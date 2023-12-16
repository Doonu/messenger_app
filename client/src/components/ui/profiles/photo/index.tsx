import React, { FC, ReactNode } from 'react';
import { SContainer } from './photo.styled';

interface IPhotoProfile {
  img: string;
  children?: ReactNode;
}

const PhotoProfile: FC<IPhotoProfile> = ({ img, children }) => {
  return <SContainer color={img}>{children}</SContainer>;
};

export default PhotoProfile;
