import React, { FC } from 'react';
import { IPostState } from '../../../../../entities/post/model/IPost';
import { useAppDispatch } from '../../../../../hooks/redux';
import deletePostById from '../../../../../shared/api/post/deletePostById';

interface IDeletePost {
  post: IPostState;
}

const DeletePost: FC<IDeletePost> = ({ post }) => {
  const dispatch = useAppDispatch();

  const handlerDeletePost = () => {
    dispatch(deletePostById(post.id));
  };

  return <div onClick={handlerDeletePost}>Удалить запись</div>;
};

export default DeletePost;
