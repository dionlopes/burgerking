import React from 'react';

import { Container, Logo } from './styles';

import logo from '../../assets/images/logo.svg';

export default function Header() {
  return (
    <Container>
      <Logo to="/">
        <img src={logo} alt="Burger King" />
      </Logo>
    </Container>
  );
}
