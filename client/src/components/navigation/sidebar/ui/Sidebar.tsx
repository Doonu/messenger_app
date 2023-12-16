import React, { FC } from 'react';
import { SContainer } from './sidebar.styled';
import { SidebarProps } from '../model/ISidebar';

const Sidebar: FC<SidebarProps> = ({ children, ...props }) => {
  return <SContainer {...props}>{children}</SContainer>;
};

export default Sidebar;
