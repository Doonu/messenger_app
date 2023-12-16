import React from 'react';
import { Container, SDescription, SItem, SLink, SNotify } from './navbar.styled';
import { NavbarDto } from '../lib/dto';
import { useLocation } from 'react-router-dom';

//TODO: Перенести в widgets

const Navbar = () => {
  const locate = useLocation();
  // TODO: Подумать как будут приходить нотификации
  return (
    <Container>
      {NavbarDto.map((value) => (
        <SLink $active={locate.pathname === value.path} to={value.path} key={value.path}>
          <SItem>
            <value.component />
            {false && <SNotify />}
            <SDescription>{value.description}</SDescription>
          </SItem>
        </SLink>
      ))}
    </Container>
  );
};

export default Navbar;
