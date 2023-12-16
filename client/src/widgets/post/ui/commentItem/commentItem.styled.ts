import styled from 'styled-components';
import { Typography } from 'antd';

interface ISContainerHandler {
  $isView: boolean;
}

export const SContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  padding: 5px;
`;

export const SContainerHandle = styled.div<ISContainerHandler>`
  align-self: normal;
  display: flex;
  gap: 20px;
  visibility: ${({ $isView }) => ($isView ? '' : 'hidden')};
`;

export const SContainerColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const SInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
  flex: 1;
`;

export const SLike = styled.div`
  cursor: pointer;
`;

export const SNameContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

export const SName = styled(Typography.Text)`
  color: ${({ theme }) => theme.colors.active};
  font-size: 16px;
  font-weight: 700;
  line-height: 25px;
`;

export const SContent = styled(Typography.Text)`
  color: ${({ theme }) => theme.colors.active};
  font-size: 16px;
  line-height: normal;
  margin-bottom: 5px;
`;

export const STime = styled.span``;

export const SDelete = styled.div`
  margin-right: 20px;
  cursor: pointer;
`;

export const SIcon = styled.div`
  cursor: pointer;
`;

export const SContainerEdit = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const SContainerButtons = styled.div`
  align-self: flex-end;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 20px;
`;
