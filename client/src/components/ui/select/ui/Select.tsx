import React, { FC } from 'react';
import { IBaseSelect } from '../model/IBaseSelect';
import { SSelect } from './baseSelect.styles';

const BaseSelect: FC<IBaseSelect> = ({ ...props }) => {
  return <SSelect bordered={false} {...props} />;
};

export default BaseSelect;
