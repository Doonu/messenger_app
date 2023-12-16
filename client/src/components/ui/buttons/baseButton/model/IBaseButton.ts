import { BaseButtonProps } from 'antd/lib/button/button';
import { ReactNode } from 'react';

type BaseButtonVariants = 'primary' | 'secondary';

export interface IBaseButton extends BaseButtonProps {
  htmlType?: string;
  variant?: BaseButtonVariants;
  height?: string;
  radius?: number;
  leftIcon?: JSX.Element;
  rightIcon?: ReactNode;
  bgTransparent?: boolean;
  onClick?: () => void;
}
