import React, { FC } from 'react';
import { IPostState } from '../../../../../entities/post/model/IPost';
import { useAppDispatch } from '../../../../../hooks/redux';
import toggleCommentsById from '../../../../../shared/api/post/toggleCommentsById';

interface IToggleComments {
  post: IPostState;
}

const ToggleComments: FC<IToggleComments> = ({ post }) => {
  const dispatch = useAppDispatch();

  const handlerToggleComments = () => {
    dispatch(toggleCommentsById({ isDisabledComments: post.isDisabledComments, postId: post.id }));
  };

  return (
    <div onClick={handlerToggleComments}>
      {post.isDisabledComments ? 'Включить комментарии' : 'Выключить комментарии'}
    </div>
  );
};

export default ToggleComments;
