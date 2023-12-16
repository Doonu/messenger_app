import styled, { css } from 'styled-components';
import TextareaAutosize from 'react-textarea-autosize';
import { IPositionProps } from './';

export const SInput = styled(TextareaAutosize)<IPositionProps>`
  color: ${({ theme }) => theme.colors.active};
  font-size: 18px;
  max-width: ${({ isMaxWidth }) => (isMaxWidth ? '800px' : 'none')};
  min-height: ${({ minRows }) => (minRows === 1 ? '40px' : '60px')};
  padding-left: 10px;
  height: unset;
  display: inline-table;

  ${({ isDrag }) =>
    isDrag &&
    css`
      margin: -10px -20px -10px 0px;
    `}

  flex: 1;
  padding-top: ${({ minRows }) => (minRows === 1 ? '5px' : '15px')};

  resize: none !important;
  background: inherit;
  border: none;
  outline: none;

  ${({ $position }) =>
    $position &&
    css`
      margin: -10px -20px 10px 0px;
    `}

  &:focus {
    box-shadow: none;
  }
  &::placeholder {
    color: ${({ theme }) => theme.colors.text};
    font-size: ${({ $position }) => (!$position ? '18px' : '25px')};
  }
  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.bigDesktop}) {
    ${({ $position }) =>
      $position &&
      css`
        font-size: 14px;
        margin: -10px -10px 10px 0px;
      `}
  }
`;
