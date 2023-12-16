import React, { FC } from 'react';
import { SButton, SCircle, SText } from './LikeButton.styled';
import { ILikeButton } from '../model/ILikeButton';
import { BgLike, Like } from '../../../../../../shared/assets/icons';

const LikeButton: FC<ILikeButton> = ({ $isLike, children, onClick, ...props }) => {
  return (
    <SButton onClick={onClick} $isLike={$isLike} {...props}>
      {$isLike && (
        <SCircle>
          <BgLike size={15} />
        </SCircle>
      )}
      {!$isLike && <Like size={20} />}
      <SText $isLike={$isLike}>{children}</SText>
    </SButton>
  );
};

export default LikeButton;
