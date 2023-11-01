import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`;

interface SLinkProps {
  active: boolean;
  isNotify?: boolean;
}

export const SLink = styled(Link)<SLinkProps>`
  color: ${({ theme, active }) => (active ? theme.colors.active : theme.colors.text)};
  position: relative;

  & :hover {
    color: ${({ theme }) => theme.colors.active};
  }
`;

export const SNotify = styled.div`
  position: absolute;
  top: -2px;
  right: -2px;
  width: 8px;
  height: 8px;
  border-radius: 99%;
  background: ${({ theme }) => theme.colors.success};
`;

export const SItem = styled.div`
  position: relative;
  & > svg {
    width: 25px;
    height: 25px;
  }
`;
