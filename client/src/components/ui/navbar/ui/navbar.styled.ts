import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    position: fixed;
    bottom: 0;
    justify-content: space-evenly;
    right: 0;
    z-index: 10;
    width: 100%;
    padding: 15px 10px;

    border-top: 1px solid ${({ theme }) => theme.colors.secondaryText};
    border-radius: 15px;
    background: ${({ theme }) => theme.colors.bg};
  } ;
`;

interface SLinkProps {
  $active: boolean;
  isNotify?: boolean;
}

export const SLink = styled(Link)<SLinkProps>`
  color: ${({ theme, $active }) => ($active ? theme.colors.active : theme.colors.text)};
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
  display: flex;
  flex-direction: column;
  align-items: center;

  & > svg {
    width: 25px;
    height: 25px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    & > svg {
      width: 20px;
      height: 20px;
    }
  } ;
`;

export const SDescription = styled.div`
  display: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: flex;
    font-size: 10px;
  } ;
`;
