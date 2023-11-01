import styled, { css } from 'styled-components';
import { Button } from 'antd';
import { IBaseButton } from '../model/IBaseButton';

export const SButton = styled(Button)<IBaseButton>`
  background: ${({ theme }) => theme.colors.blue};
  color: ${({ theme }) => theme.colors.active};
  border: none;

  &:hover {
    color: ${({ theme }) => theme.colors.active} !important;
    opacity: 0.7;
  }
  &:focus {
    color: ${({ theme }) => theme.colors.active} !important;
  }

  ${({ variant, height }) =>
    variant === 'primary'
      ? css`
          width: 100%;
          height: ${height ? height : '45px'};
        `
      : css`
          min-width: 50px;
          width: max-content;
          height: max-content;
        `}

  ${({ disabled, theme }) =>
    disabled &&
    css`
      color: ${theme.colors.active} !important;
      background: ${theme.colors.text} !important;
    `}
`;
