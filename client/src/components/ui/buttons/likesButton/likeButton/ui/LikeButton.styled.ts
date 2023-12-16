import styled, { css } from 'styled-components';
import { Button } from 'antd';
import { ILikeButton } from '../model/ILikeButton';

export const SButton = styled(Button)<ILikeButton>`
  display: flex;
  align-items: center;
  gap: 5px;
  border-radius: 20px;
  border: none;
  color: ${({ theme }) => theme.colors.text};
  max-height: 30px;
  max-width: max-content;

  &:hover {
    color: ${({ theme }) => theme.colors.active} !important;
    opacity: 0.7;
  }

  ${({ $isLike }) =>
    $isLike &&
    css`
      background: #42292a;
    `}

  ${({ $isLike, theme }) =>
    !$isLike &&
    css`
      background: ${theme.colors.secondaryText};
    `}
`;

export const SCircle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3px;
  border-radius: 99%;
  background: #fa2f43;
`;

export const SText = styled.div<ILikeButton>`
  color: ${({ $isLike }) => $isLike && `#fa2f43`};
`;
