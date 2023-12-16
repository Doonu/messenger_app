import React, { useEffect, useState } from 'react';
import AllContainer from '../../../../components/layouts/all';
import AddPost from '../../../../components/forms/AddPost';
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux';
import { selectorPost } from '../../../../entities/post/post.selectors';
import { SList } from './Home.styled';
import getAllPost from '../../../../shared/api/post/getAllPost';
import Post from '../../../../widgets/post/ui/Post';
import { isAuthSelector } from '../../../../entities/auth/auth.selectors';
import { setAllPosts } from '../../../../entities/post/post.slice';

//TODO: Оптимизировать компонент драгон-input, ререндер на каждый клик

const Home = () => {
  const [isDraggablePhoto, setIsDraggablePhoto] = useState(false);

  const dispatch = useAppDispatch();

  const { posts } = useAppSelector(selectorPost);
  const isAuth = useAppSelector(isAuthSelector); // TODO:Убрать из entities

  const handlerPhotoDrag = () => {
    setIsDraggablePhoto((prev) => !prev);
  };

  const handlerChange = () => {
    setIsDraggablePhoto(false);
  };

  useEffect(() => {
    dispatch(getAllPost());

    return () => {
      dispatch(setAllPosts([]));
    };
  }, []);

  return (
    <div onDragEnterCapture={handlerPhotoDrag} onDragLeaveCapture={handlerPhotoDrag}>
      <AllContainer>
        <AddPost handlerChange={handlerChange} isDraggablePhoto={isDraggablePhoto} />
        <SList>
          {posts.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </SList>
      </AllContainer>
    </div>
  );
};

export default Home;
