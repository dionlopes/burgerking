import React from 'react';

import {
  Container,
  ProductImage,
  ProductTitle,
  ProductPrice,
  ProductDescription,
} from './styles';

export default function Product() {
  return (
    <Container>
      <ProductImage>
        <img
          src="http://bk-latam-prod.s3.amazonaws.com/sites/burgerking.com.br/files/BigKing_thumb_0.png"
          alt="Big King XL"
        />
      </ProductImage>

      <ProductTitle>Big King XL</ProductTitle>
      <ProductPrice>R$ 29,90</ProductPrice>
      <ProductDescription>
        Pão, hamburger bovino, picles, tomate, queijo, alface com maionese
        caseira verde.
      </ProductDescription>
    </Container>
  );
}
