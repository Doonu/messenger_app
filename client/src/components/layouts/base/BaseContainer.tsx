import React, { FC, ReactNode } from 'react';
import Header from '../../navigation/header';
import { Containers } from '../../../shared/styles/containers';

interface BaseContainerProps {
  children: ReactNode;
  isHeader?: boolean;
}

const BaseContainer: FC<BaseContainerProps> = ({ isHeader = true, children }) => {
  return (
    <>
      {isHeader && <Header />}
      <Containers>{children}</Containers>
    </>
  );
};

export default BaseContainer;
