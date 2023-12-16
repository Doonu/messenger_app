import { ModalProps } from 'antd';

export interface IModal extends ModalProps {
  top?: string;
  width?: string;
  isFooter?: boolean;
  onClose?: () => void;
  padding?: string;
}
