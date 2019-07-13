import React from 'react';

import { Container, Products, CategoryTitle } from './styles';

import ProductItem from '../../components/Product';

export default function Main() {
  return (
    <Container>
      <CategoryTitle>Hamburgers</CategoryTitle>
      <Products>
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
      </Products>
    </Container>
  );
}
