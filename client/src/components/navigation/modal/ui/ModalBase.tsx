import React, { FC } from 'react';
import { SModal } from './modalBase.styled';
import { IModal } from '../model/IModal';
import { SButtons } from './modalBase.styled';
import BaseButton from '../../../ui/buttons/baseButton';

const ModalBase: FC<IModal> = ({ children, onClose, top, isFooter = true, ...props }) => {
  return (
    <SModal top="20px" onCancel={onClose} {...props}>
      <div>{children}</div>
      {isFooter && (
        <SButtons>
          <BaseButton onClick={onClose} bgTransparent variant="secondary">
            Отмена
          </BaseButton>
          <BaseButton onClick={onClose} variant="secondary">
            Продолжить
          </BaseButton>
        </SButtons>
      )}
    </SModal>
  );
};

export default ModalBase;
