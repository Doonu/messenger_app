import { BaseButtonProps } from 'antd/lib/button/button';

export interface ILikeButton extends BaseButtonProps {
  $isLike?: boolean;
  onClick?: () => void;
}
