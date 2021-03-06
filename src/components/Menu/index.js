import React from 'react';

import { Container, MenuItem, MenuTitle } from './styles';

import Hamburgers from '../../assets/images/hamburgers.png';
import Acompanhamentos from '../../assets/images/acompanhamentos.jpg';
import Saladas from '../../assets/images/saladas.png';
import Bebidas from '../../assets/images/bebidas.png';
import Sobremesas from '../../assets/images/sobremesas.png';

export default function Menu() {
  return (
    <Container>
      <MenuTitle>
        <h1>Menu</h1>
      </MenuTitle>

      <MenuItem exact to="/">
        <img src={Hamburgers} alt="Hamburgers" />
        <p>Hamburgers</p>
      </MenuItem>
      <MenuItem to="/acompanhamentos">
        <img src={Acompanhamentos} alt="Acompanhamentos" />
        <p>Acompanhamentos</p>
      </MenuItem>
      <MenuItem to="/saladas">
        <img src={Saladas} alt="Saladas" />
        <p>Saladas</p>
      </MenuItem>
      <MenuItem to="/bebidas">
        <img src={Bebidas} alt="Bebidas" />
        <p>Bebidas</p>
      </MenuItem>
      <MenuItem to="/sobremesas">
        <img src={Sobremesas} alt="Sobremesas" />
        <p>Sobremesas</p>
      </MenuItem>
    </Container>
  );
}
