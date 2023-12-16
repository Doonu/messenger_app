import { BaseButtonProps } from 'antd/lib/button/button';

export interface ILike extends BaseButtonProps {
  isLike?: boolean;
  onClick?: () => void;
}
