import React from 'react';

import { SContainer, SMainProfile, STitle, SWrapper } from './header.styled';
import Navbar from '../../../ui/navbar';
import Logo from '../../../ui/logo';
import { useAppSelector } from '../../../../hooks/redux';
import { selectorUser } from '../../../../entities/user/user.selectors';
import { SearchForm } from '../../../forms/searchForm';

const Header = () => {
  //TODO: Сделать для мобилки
  const user = useAppSelector(selectorUser);

  return (
    <SContainer>
      <SWrapper>
        <Logo $shadow size={20} color="white" title={'right'}>
          <STitle>Discord</STitle>
        </Logo>
        <Navbar />
        <SearchForm />
        <SMainProfile avatar={user.avatar} name={user.name} />
      </SWrapper>
    </SContainer>
  );
};

export default Header;
