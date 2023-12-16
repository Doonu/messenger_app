import styled, { css } from 'styled-components';
import { ILogo } from '../model/ILogo';

export const SContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;
  color: ${({ theme }) => theme.colors.active};

  @media (max-width: ${({ theme }) => theme.breakpoints.bigDesktop}) {
    gap: 30px;
  }
`;

export const SContainerIcon = styled.div<Pick<ILogo, '$pulse' | '$sizeBg' | '$shadow'>>`
  animation: ${({ $pulse }) => $pulse && `color-change 5s infinite`};
  background: ${({ theme }) => theme.colors.blue};
  border-radius: 15px;

  ${({ $sizeBg }) => css`
    width: ${$sizeBg};
    height: ${$sizeBg};
  `}

  box-shadow: ${({ $shadow, theme }) =>
    $shadow &&
    `${theme.colors.blue} 6px 2px 16px 0px,
    ${theme.colors.blue} -6px -2px 16px 0px`};
  display: flex;
  align-items: center;
  justify-content: center;

  @keyframes color-change {
    0% {
      color: ${({ theme }) => theme.colors.active};
    }
    95% {
      color: ${({ theme }) => theme.colors.blue};
    }
    100% {
      color: ${({ theme }) => theme.colors.active};
    }
  }
`;
