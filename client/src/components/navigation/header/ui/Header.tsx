import React, { useEffect } from 'react';

import { SContainer, SLeft, STitle, SWrapper } from './header.styled';
import Navbar from '../../../ui/navbar';
import MainProfile from '../../../ui/profiles/main';
import avatarProfile from '../../../../shared/assets/avatar.jpg';
import Logo from '../../../ui/logo';
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux';
import { selectorUser } from '../../../../entities/user/user.selectors';
import getProfile from '../../../../shared/api/user/getProfile';
import { SearchForm } from '../../../forms/searchForm';

const Header = () => {
  //TODO: Сделать для мобилки
  const user = useAppSelector(selectorUser);

  return (
    <SContainer>
      <SWrapper>
        <SLeft>
          <Logo shadow size={20} color="white" title={'right'}>
            <STitle>Discord</STitle>
          </Logo>
          <Navbar />
        </SLeft>
        <SearchForm />
        <MainProfile avatar={user.avatar} name={user.name} />
      </SWrapper>
    </SContainer>
  );
};

export default Header;
