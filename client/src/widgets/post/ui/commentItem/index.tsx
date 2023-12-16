import React, { ChangeEvent, FC, useState } from 'react';
import { ICommentsState } from '../../../../entities/post/model/IPost';
import {
  SContainer,
  SContent,
  SName,
  STime,
  SInfo,
  SDelete,
  SContainerHandle,
  SLike,
  SContainerColumn,
  SIcon,
  SNameContainer,
  SContainerButtons,
  SContainerEdit,
} from './commentItem.styled';
import { postTime } from '../../../../shared/util/time';
import PhotoProfile from '../../../../components/ui/profiles/photo';
import { convertName } from '../../../../shared/util/user';
import { BgLike, Close, Like, Redaction } from '../../../../shared/assets/icons';
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux';
import likeComments from '../../../../shared/api/comments/likeComments';
import { SAutosizeInput } from '../comments/comments.styled';
import { selectorUser } from '../../../../entities/user/user.selectors';
import BaseButton from '../../../../components/ui/buttons/baseButton';
import updateComment from '../../../../shared/api/comments/updateComment';

interface ICommentItem {
  comment: ICommentsState;
  onDelete: () => void;
  onEdit: () => void;
  onRemoveEdit: (content: string | null) => void;
}

const CommentItem: FC<ICommentItem> = ({ comment, onDelete, onEdit, onRemoveEdit }) => {
  const dispatch = useAppDispatch();

  const { id } = useAppSelector(selectorUser);

  const [isShowInfo, setIsShowInfo] = useState(false);
  const [isLike, setIsLike] = useState(comment.likesList.includes(+id));
  const [editContent, setEditContent] = useState(comment.content);

  const convertedName = convertName(comment.author.name);

  const handlerLike = () => {
    dispatch(likeComments(comment.id)).finally(() => setIsLike((prev) => !prev));
  };

  const handleChangeContent = (e: ChangeEvent<HTMLInputElement>) => {
    setEditContent(e.target.value);
  };

  const handleUpdateComment = () => {
    if (editContent)
      dispatch(updateComment({ commentId: comment.id, content: editContent })).then(() => {
        onRemoveEdit(editContent);
      });
    else {
      onRemoveEdit(null);
    }
  };

  return (
    <SContainer onMouseLeave={() => setIsShowInfo(false)} onMouseEnter={() => setIsShowInfo(true)}>
      <PhotoProfile img={comment.author.imgSubstitute}>{comment.author.name[0]}</PhotoProfile>
      <SInfo>
        <SNameContainer>
          <SName>{convertedName}</SName>
          {comment.isEdit && <span>редактирование комментария</span>}
        </SNameContainer>
        {comment.isEdit && (
          <SContainerEdit>
            <SAutosizeInput
              minRows={1}
              isDrag={false}
              value={editContent}
              onChange={handleChangeContent}
              $position={false}
              placeholder="Написать комментарий..."
              autoComplete="off"
              draggable="false"
            />
            <SContainerButtons>
              <BaseButton onClick={() => onRemoveEdit(null)} bgTransparent={true}>
                Отмена
              </BaseButton>
              <BaseButton onClick={handleUpdateComment}>Сохранить</BaseButton>
            </SContainerButtons>
          </SContainerEdit>
        )}
        {!comment.isEdit && (
          <>
            <SContent>{comment.content}</SContent>
            <STime>{postTime(comment.createdAt)}</STime>
          </>
        )}
      </SInfo>
      {!comment.isEdit && (
        <SContainerHandle $isView={isShowInfo}>
          <SIcon onClick={onEdit}>
            <Redaction />
          </SIcon>
          <SContainerColumn>
            <SDelete onClick={onDelete}>
              <Close />
            </SDelete>
            <SLike onClick={handlerLike}>
              {!isLike && <Like />}
              {isLike && <BgLike color={'red'} />}
            </SLike>
          </SContainerColumn>
        </SContainerHandle>
      )}
    </SContainer>
  );
};

export default CommentItem;
