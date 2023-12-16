import React, { FC } from 'react';
import { SContainer } from './warningCountPhotos.styled';

interface WarningCountPhotosProps {
  message: string;
}

export const WarningCountPhotos: FC<WarningCountPhotosProps> = ({ message }) => {
  return (
    <SContainer>
      <div>Ошибка</div>
      <div>{message}</div>
    </SContainer>
  );
};
