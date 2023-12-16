import React, { FC } from 'react';
import { CheckboxProps } from 'antd';
import { SCheckBox } from './checkBox.styled';

const CheckBox: FC<CheckboxProps> = ({ ...props }) => {
  return <SCheckBox {...props}></SCheckBox>;
};

export default CheckBox;
