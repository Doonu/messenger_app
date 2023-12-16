import React, { FC } from 'react';
import { Dropdown } from 'antd';
import { moreItemsDropdown } from '../../lib/moreOptions';
import { SMore } from './more.styled';
import { IPostState } from '../../../../entities/post/model/IPost';

interface IMore {
  post: IPostState;
}

const More: FC<IMore> = ({ post }) => {
  return (
    <Dropdown placement="bottom" trigger={['click']} menu={{ items: moreItemsDropdown(post) }}>
      <SMore size={20} />
    </Dropdown>
  );
};

export default More;
