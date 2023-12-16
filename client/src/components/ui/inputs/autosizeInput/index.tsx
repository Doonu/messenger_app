import React, { FC } from 'react';
import { SInput } from './autosizeInput.styled';
import { InputProps } from 'antd/es/input/Input';

export interface IPositionProps extends InputProps {
  $position: boolean;
  $isDraggable?: boolean;
  minRows: number;
  isDrag?: boolean;
  isMaxWidth?: boolean;
}

interface IInputs extends IPositionProps {}

const AutosizeInput: FC<IInputs> = ({ isDrag = true, ...props }) => {
  return <SInput {...props} isDrag={isDrag} />;
};

export default AutosizeInput;
