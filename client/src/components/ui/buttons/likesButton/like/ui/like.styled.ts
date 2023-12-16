import styled, { css } from 'styled-components';
import { BgLike, Like } from '../../../../../../shared/assets/icons';
import { ILike } from '../model/ILikeButton';

export const SButton = styled.div<ILike>`
  display: flex;
  align-items: center;
  gap: 5px;
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;
  font-size: 18px;
  ${({ isLike }) =>
    isLike &&
    css`
      color: #fa2f43;
    `}
`;

export const SText = styled.div``;
export const SLikeButton = styled(Like).attrs({
  size: 25,
})`
  color: ${({ theme }) => theme.colors.text} !important;
`;

export const SBgLikeButton = styled(BgLike).attrs({
  size: 25,
})`
  color: ${({ theme }) => theme.colors.danger} !important;
`;
