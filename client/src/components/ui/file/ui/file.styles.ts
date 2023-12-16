import styled from 'styled-components';
import { Close } from '../../../../shared/assets/icons';
import { Typography } from 'antd';

export const SContainer = styled.a`
  display: flex;
  flex-direction: column;
  width: 100px;
`;

export const SLink = styled.a`
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SClose = styled(Close)`
  font-size: 20px;
  align-self: flex-end;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.text};
  &:hover {
    color: ${({ theme }) => theme.colors.white};
  }
`;

export const SText = styled(Typography.Text).attrs({ ellipsis: true })`
  color: inherit;
`;
