import React from 'react';
import styled from 'styled-components';
import { FiMoreHorizontal } from 'react-icons/fi';
import { BlockContainer } from '../../../../shared/styles/containers';
import BaseButton from '../../buttons/baseButton';
import { Comment, Shared } from '../../../../shared/assets/icons';

export const SHead = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 15px;
`;

export const SContainer = styled(BlockContainer)``;

export const SMore = styled(FiMoreHorizontal)``;

export const SP = styled.div`
  word-wrap: break-word;
  color: ${({ theme }) => theme.colors.white};
  font-size: 20px;
`;

export const SInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 20px;
  border-radius: 20px;
`;

export const SShared = styled(BaseButton).attrs({
  variant: 'secondary',
  radius: 20,
  leftIcon: <Shared size={22} />,
})`
  color: ${({ theme }) => theme.colors.text};
  background: ${({ theme }) => theme.colors.secondaryText};
`;

export const SComment = styled(BaseButton).attrs({
  variant: 'secondary',
  radius: 20,
  leftIcon: <Comment size={20} />,
})`
  color: ${({ theme }) => theme.colors.text};
  background: ${({ theme }) => theme.colors.secondaryText};
`;
