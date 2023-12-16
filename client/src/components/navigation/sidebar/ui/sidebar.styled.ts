import styled, { css } from 'styled-components';
import { SidebarProps } from '../model/ISidebar';

export const SContainer = styled.div<SidebarProps>`
  min-width: 250px;
  max-width: 250px;
  position: absolute;
  top: 0;
  ${({ $right }) =>
    $right
      ? css`
          right: 0;
        `
      : css`
          left: 0;
        `};

  @media (max-width: ${({ theme }) => theme.breakpoints.bigDesktop}) {
    display: none;
  }
`;
