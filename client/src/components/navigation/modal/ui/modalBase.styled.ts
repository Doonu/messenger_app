import styled from 'styled-components';
import { Modal } from 'antd';
import { IModal } from '../model/IModal';

export const SModal = styled(Modal)<IModal>`
  width: ${({ width }) => (width ? width : 'inherit')};
  top: ${({ top }) => top};

  &.ant-modal {
    .ant-modal-content {
      background: ${({ theme }) => theme.colors.secondaryBg};
      padding: ${({ padding }) => padding};
    }
    .ant-modal-footer {
      display: none;
    }
  }
  & svg {
    color: ${({ theme }) => theme.colors.active};
  }
`;

export const SButtons = styled.div`
  padding-top: 20px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 10px;
`;
