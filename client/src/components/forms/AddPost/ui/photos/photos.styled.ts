import styled, { css } from 'styled-components';

interface IPositionProps {
  $position: boolean;
  $isDraggable?: boolean;
}

export const SPhotos = styled.div<IPositionProps>`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  gap: 20px;

  ${({ $isDraggable }) =>
    $isDraggable &&
    css`
      visibility: ${$isDraggable ? 'hidden' : 'visible'};
    `}

  flex-wrap: nowrap;
  overflow-x: auto;
  overflow-y: hidden;

  &::-webkit-scrollbar {
    height: 0;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 20px;
    background: ${({ theme }) => theme.colors.secondaryText};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    justify-content: flex-start;
  }
`;
