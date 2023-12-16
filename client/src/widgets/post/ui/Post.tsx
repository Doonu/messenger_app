import React, { FC, useEffect, useState } from 'react';
import { SComment, SContainer, SHead, SInfo, SP, SShared, STop } from './post.styled';
import { v4 } from 'uuid';
import More from './more';
import Restore from './restore';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { selectorPost } from '../../../entities/post/post.selectors';
import { ICommentsState, IPostState } from '../../../entities/post/model/IPost';
import MainPostProfile from '../../../components/ui/profiles/mainPost';
import { postTime } from '../../../shared/util/time';
import LikeButton from '../../../components/ui/buttons/likesButton/likeButton';
import { IFilesPost } from '../../../shared/models/IPost';
import { selectorUser } from '../../../entities/user/user.selectors';
import likePost from '../../../shared/api/post/likePost';
import Comments from './comments';

interface PostProps {
  post: IPostState;
}

const Post: FC<PostProps> = ({ post }) => {
  const dispatch = useAppDispatch();

  const { deletedPost } = useAppSelector(selectorPost);
  const { id } = useAppSelector(selectorUser);

  const [files, setFiles] = useState<IFilesPost[]>([]);
  const [photos, setPhotos] = useState<IFilesPost[]>([]);
  const [comments, setComments] = useState<ICommentsState[]>([]);

  const [isLike, setIsLike] = useState(post.likesList.includes(+id));
  const [isDeletedPost, setIsDeletedPost] = useState(false);
  const [isCommentsActive, setIsCommentsActive] = useState(false);

  const handleLikeClick = () => {
    dispatch(likePost(post.id));
    setIsLike((prev) => !prev);
  };

  const handleActiveComments = () => {
    setIsCommentsActive(true);
  };

  const handlerDeletePost = () => {
    if (deletedPost.find((postD) => postD.id === post.id)) {
      setIsDeletedPost(true);
    }
  };

  const filterFiles = () => {
    const allFiles = post.files.map((file) => {
      return {
        id: v4(),
        file: file,
      };
    });

    const photos: IFilesPost[] = allFiles.filter(({ file }) => {
      const arrayFile = file.split('.');
      if (
        arrayFile[arrayFile.length - 1].includes('jpg') ||
        arrayFile[arrayFile.length - 1].includes('png') ||
        arrayFile[arrayFile.length - 1].includes('webp')
      ) {
        return true;
      }
      return false;
    });

    const files: IFilesPost[] = allFiles.filter(({ file }) => {
      const arrayFile = file.split('.');
      if (
        arrayFile[arrayFile.length - 1].includes('pdf') ||
        arrayFile[arrayFile.length - 1].includes('docx')
      ) {
        return true;
      }
      return false;
    });

    setPhotos(photos);
    setFiles(files);
  };

  useEffect(() => {
    handlerDeletePost();
  }, [deletedPost]);

  useEffect(() => {
    if (post.isDisabledComments) setIsCommentsActive(false);
  }, [post.isDisabledComments]);

  useEffect(() => {
    filterFiles();
  }, []);

  return (
    <SContainer>
      <STop>
        {isDeletedPost && <Restore setIsDeletedPost={setIsDeletedPost} postId={post.id} />}
        {!isDeletedPost && (
          <>
            <SHead>
              <MainPostProfile
                time={postTime(post.createdAt)}
                name={post.author.name}
                avatar={post.author.imgSubstitute}
              />
              <More post={post} />
            </SHead>
            {photos.map(({ file, id }) => (
              <img key={id} style={{ width: '300px', height: '300px' }} src={file}></img>
            ))}
            {post.content.map((content, i) => (
              <SP key={post.id + i}>{content}</SP>
            ))}
            {files.map(({ file, id }) => (
              <a key={id} href={`http://localhost:5000/${file}`} target="blank">
                Сслы
              </a>
            ))}
            <SInfo>
              <LikeButton $isLike={isLike} onClick={handleLikeClick}>
                {post.countLikes}
              </LikeButton>
              {!post.isDisabledComments && (
                <SComment onClick={handleActiveComments}>
                  {post.comments.length || comments.length}
                </SComment>
              )}
              <SShared>{post.shared}</SShared>
            </SInfo>
            {post.view && post.view}
          </>
        )}
      </STop>
      {isCommentsActive && <Comments comments={comments} setComments={setComments} post={post} />}
    </SContainer>
  );
};

export default Post;
