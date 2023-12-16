import styled from 'styled-components';
import { Input } from 'antd';
import { LoaderSmall } from '../../../loaders';

interface SInputProps {
  border?: string;
  $minWidth?: string;
}

export const SLoaderSmall = styled(LoaderSmall)``;

export const SLabel = styled.label`
  display: block;
  width: 100%;
  position: relative;
  & > div {
    position: absolute;
    right: 15px;
    top: calc(50% - 7px);
  }
`;

export const SInput = styled(Input)<SInputProps>`
  border-color: transparent;
  outline: none !important;
  border-radius: ${({ border }) => border};
  padding-right: 45px;
  background: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.active};
  width: 100%;
  height: ${({ height }) => height};
  flex: 1;
  min-width: ${({ $minWidth }) => $minWidth};

  &::placeholder {
    color: ${({ theme }) => theme.colors.text};
    opacity: 0.7;
  }

  &:focus {
    border-color: ${({ theme }) => theme.colors.active};
  }

  &:hover {
    border-color: ${({ theme }) => theme.colors.text};
  }
`;

export const SIcon = styled.div`
  position: absolute;
  top: 0;
  right: 15px;
  cursor: pointer;
  z-index: 2;
  svg {
    color: white;
  }
`;
