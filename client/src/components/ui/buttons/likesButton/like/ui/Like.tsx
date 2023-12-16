import React, { FC } from 'react';
import { ILike } from '../model/ILikeButton';
import { SBgLikeButton, SButton, SLikeButton, SText } from './like.styled';

export const Like: FC<ILike> = ({ isLike, children, onClick, ...props }) => {
  return (
    <SButton onClick={onClick} isLike={isLike} {...props}>
      {!isLike && <SLikeButton />}
      {isLike && <SBgLikeButton />}
      <SText>{children}</SText>
    </SButton>
  );
};
