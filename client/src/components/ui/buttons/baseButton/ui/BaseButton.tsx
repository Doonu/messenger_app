import React, { FC } from 'react';
import { SButton } from './BaseButton.styled';
import { IBaseButton } from '../model/IBaseButton';

const BaseButton: FC<IBaseButton> = ({
  htmlType,
  children,
  disabled,
  loading,
  variant = 'primary',
  height,
  ...props
}) => {
  return (
    <SButton
      height={height}
      variant={variant}
      htmlType={htmlType}
      loading={loading}
      disabled={disabled}
      {...props}
    >
      {children}
    </SButton>
  );
};

export default BaseButton;
