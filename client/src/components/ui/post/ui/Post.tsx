import React from 'react';
import { SContainer, SHead, SMore } from './post.styled';
import MainProfile from '../../profiles/main';
import avatarProfile from '../../../../shared/assets/avatar.jpg';
import MainPostProfile from '../../profiles/mainPost';

const Post = () => {
  return (
    <SContainer>
      <SHead>
        <MainPostProfile time={'сегодня в 16:30'} name="Donu#1392" avatar={avatarProfile} />
        <SMore size={20} />
      </SHead>
      <div>content</div>
      <div>content</div>
      <div>content</div>
      <div>content</div>
      <div>content</div>
      <div>content</div>
    </SContainer>
  );
};

export default Post;
