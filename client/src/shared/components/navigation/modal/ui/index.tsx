import React, { FC } from 'react';
import { BaseButton } from '@shared/components';

import { SModal, SButtons } from './modalBase.styled';
import { IModal } from '../model/IModal';

export const Modal: FC<IModal> = ({
  children,
  onClose,
  top = '300px',
  isFooter = true,
  ...props
}) => {
  return (
    <SModal top={top} onCancel={onClose} footer={() => <div>fff</div>} {...props}>
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
