import React, { FC } from 'react';
import { BsDiscord } from 'react-icons/bs';
import { SContainer, SContainerIcon } from './logo.styled';
import { ILogo } from '../model/ILogo';

const Logo: FC<ILogo> = ({
  size,
  $pulse = false,
  $sizeBg = '40px',
  $shadow,
  title,
  children,
  ...props
}) => {
  return (
    <SContainer>
      {title === 'left' && children}
      <SContainerIcon $sizeBg={$sizeBg} $pulse={$pulse} $shadow={$shadow}>
        <BsDiscord size={size} {...props} />
      </SContainerIcon>
      {title === 'right' && children}
    </SContainer>
  );
};

export default Logo;
