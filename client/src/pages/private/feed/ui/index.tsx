import React, { useEffect, useState } from 'react';
import AllContainer from '../../../../components/layouts/all';
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux';
import {
  selectorEditedPost,
  selectorErrorPosts,
  selectorLoadingPosts,
  selectorPost,
  selectorPagePost,
  selectorHaseMore,
  selectorWarningEdit,
  selectorDeletedPost,
} from '../../../../entities';
import { getAllPost } from '../../../../shared/api';
import { Post } from '../../../../widgets/post';
import { addPage, setAllPosts } from '../../../../entities/post/post.slice';
import AddPost from '../../../../widgets/addPost';
import SkeletonPost from '../../../../widgets/post/ui/skeleton';
import ObserverList from '../../../../components/custom/lists/ObserverList/ui';
import { DraggableContainer } from './Feed.styled';
//TODO: Оптимизировать компонент драгон-input, ререндер на каждый клик

const Feed = () => {
  const dispatch = useAppDispatch();

  const loadingPosts = useAppSelector(selectorLoadingPosts);
  const errorPosts = useAppSelector(selectorErrorPosts);
  const page = useAppSelector(selectorPagePost);
  const haseMore = useAppSelector(selectorHaseMore);
  const posts = useAppSelector(selectorPost);
  const warningEdit = useAppSelector(selectorWarningEdit);
  const deletedPost = useAppSelector(selectorDeletedPost);
  const editedPost = useAppSelector(selectorEditedPost);

  const [isDraggablePhoto, setIsDraggablePhoto] = useState(false);
  const [isDraggablePhotoInPost, setIsDraggablePhotoInPost] = useState(false);
  const isEditPost = posts.find((post) => post.id === editedPost?.id);
  const errorMessage = errorPosts ? 'Произошла ошибка' : 'Посты не найдены';

  const handlerPhotoDrag = () => {
    if (!isEditPost) {
      setIsDraggablePhoto((prev) => !prev);
    } else {
      setIsDraggablePhotoInPost((prev) => !prev);
    }
  };

  const handlerChangeInPost = () => {
    setIsDraggablePhotoInPost(false);
  };

  const handlerChange = () => {
    setIsDraggablePhoto(false);
  };

  const handlerNextPage = async () => {
    dispatch(getAllPost({ page: page + 1 }))
      .unwrap()
      .then(() => {
        dispatch(addPage());
      });
  };

  useEffect(() => {
    dispatch(getAllPost({ page: 1 }));

    return () => {
      dispatch(setAllPosts([]));
    };
  }, []);

  return (
    <DraggableContainer onDragEnterCapture={handlerPhotoDrag} onDragLeaveCapture={handlerPhotoDrag}>
      <AllContainer>
        <AddPost handlerChange={handlerChange} isDraggablePhoto={isDraggablePhoto} />

        <ObserverList
          list={posts}
          itemContent={(el) => (
            <Post
              deletedPost={deletedPost}
              warningEdit={warningEdit}
              editedPost={editedPost}
              posts={posts}
              isDraggablePhotoInPost={isDraggablePhotoInPost}
              handlerChange={handlerChangeInPost}
              post={el}
            />
          )}
          fetchNextPage={handlerNextPage}
          hasMore={haseMore}
          isPending={loadingPosts && page === 1}
          notFoundMessage={errorMessage}
          skeleton={() => <SkeletonPost />}
          isFetching={loadingPosts && page > 1}
        />
      </AllContainer>
    </DraggableContainer>
  );
};

export default Feed;
