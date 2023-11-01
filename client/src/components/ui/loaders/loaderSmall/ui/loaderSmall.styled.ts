import styled from 'styled-components';

interface ISLoaderProps {
  size?: number;
}

export const SLoader = styled.div<ISLoaderProps>`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  border-radius: 50%;
  display: inline-block;
  border-top: 2px solid #fff;
  border-right: 2px solid transparent;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;

  &::after {
    content: '';
    box-sizing: border-box;
    position: absolute;
    left: 0;
    top: 0;
    width: ${({ size }) => size}px;
    height: ${({ size }) => size}px;
    border-radius: 50%;
    border-bottom: 2px solid ${({ theme }) => theme.colors.blue};
    border-left: 2px solid transparent;
  }
  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
