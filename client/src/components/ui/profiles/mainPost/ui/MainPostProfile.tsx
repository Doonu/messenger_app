import React, { FC } from 'react';
import { SContainer, SContainerName, SImg, SImgSubstitute, SName, STime } from './mainPost.styled';
import { IMainPost } from '../model/IMainPost';
import { convertName } from '../../../../../shared/util/user';

const MainPostProfile: FC<IMainPost> = ({ name, avatar, time }) => {
  return (
    <SContainer>
      {avatar && avatar[0] !== '#' && <SImg src={avatar} />}
      {avatar && avatar[0] === '#' && name && (
        <SImgSubstitute color={avatar}>{name[0]}</SImgSubstitute>
      )}
      <SContainerName>
        <SName>{convertName(name)}</SName>
        <STime>{time}</STime>
      </SContainerName>
    </SContainer>
  );
};

export default MainPostProfile;
