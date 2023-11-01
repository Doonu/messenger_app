import React, { FC } from 'react';
import { SContainer, SContainerName, SImg, SName, STime } from './mainPost.styled';
import { IMainPost } from '../model/IMainPost';
import { convertName } from '../../../../../shared/util/user';

const MainPostProfile: FC<IMainPost> = ({ name, avatar, time }) => {
  return (
    <SContainer>
      <SImg src={avatar} />
      <SContainerName>
        <SName>{convertName(name)}</SName>
        <STime>{time}</STime>
      </SContainerName>
    </SContainer>
  );
};

export default MainPostProfile;
