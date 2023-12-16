import React, { Dispatch, FC, SetStateAction } from 'react';
import { SButtonContainer, SDelete, SRestore } from './restore.styled';
import { SContainer } from './restore.styled';
import { useAppDispatch } from '../../../../hooks/redux';
import restorePostById from '../../../../shared/api/post/restorePostById';
import { deletePost } from '../../../../entities/post/post.slice';

interface IRestoreProps {
  postId: number;
  setIsDeletedPost: Dispatch<SetStateAction<boolean>>;
}

const Restore: FC<IRestoreProps> = ({ postId, setIsDeletedPost }) => {
  const dispatch = useAppDispatch();

  const handlerRestore = () => {
    dispatch(restorePostById(postId))
      .unwrap()
      .then(() => {
        setIsDeletedPost(false);
      })
      .catch(() => {});
  };

  const handlerDelete = () => dispatch(deletePost(postId));

  return (
    <SContainer>
      <div>Запись удалена</div>
      <SButtonContainer>
        <SRestore onClick={handlerRestore}>Восстановить</SRestore>
        <SDelete onClick={handlerDelete}>Удалить окончательно</SDelete>
      </SButtonContainer>
    </SContainer>
  );
};

export default Restore;
