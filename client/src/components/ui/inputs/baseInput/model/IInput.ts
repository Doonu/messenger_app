import { InputProps } from 'antd/es/input/Input';
import { ReactNode } from 'react';

export type InputBorder = 'all' | 'right' | 'left' | 'none';

export interface IInput extends InputProps {
  border?: InputBorder;
  height?: string;
  type?: string;
  minWidth?: string;
  loading?: boolean;
  sizeLoading?: number;
}

export interface IVariantType {
  type?: string;
  icon?: ReactNode;
}
