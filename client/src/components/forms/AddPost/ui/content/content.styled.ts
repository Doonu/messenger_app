import styled, { css } from 'styled-components';
import TextareaAutosize from 'react-textarea-autosize';

interface IPositionProps {
  $position: boolean;
  $isDraggable?: boolean;
}

export const SContainer = styled.div<IPositionProps>`
  display: flex;
  align-items: flex-start;
  gap: 20px;
  height: max-content;

  &:first-child {
    align-self: flex-start;
  }
  ${({ $isDraggable }) =>
    css`
      opacity: ${$isDraggable ? '0' : '1'};
    `}
`;

export const SInput = styled(TextareaAutosize)<IPositionProps>`
  color: ${({ theme }) => theme.colors.active};
  font-size: 18px;
  max-width: 800px;
  min-height: 60px;
  height: unset;
  display: inline-table;

  margin: -10px -20px -10px 0px;
  flex: 1;
  padding-top: 15px;

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
