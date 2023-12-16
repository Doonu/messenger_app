import React, { FC } from 'react';
import { SLoader } from './loaderSmall.styled';

interface ILoaderSmall {
  size?: number;
}

const LoaderSmall: FC<ILoaderSmall> = ({ size = 40 }) => {
  return <SLoader size={size} />;
};

export default LoaderSmall;
