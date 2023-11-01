import { BaseButtonProps } from 'antd/lib/button/button';

type BaseButtonVariants = 'primary' | 'secondary';

export interface IBaseButton extends BaseButtonProps {
  htmlType?: string;
  variant?: BaseButtonVariants;
  height?: string;
}
