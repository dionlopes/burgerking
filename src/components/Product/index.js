import React from 'react';

import {
  Container,
  ProductImage,
  ProductTitle,
  ProductPrice,
  ProductDescription,
} from './styles';

export default function Product(props) {
  const { product } = props;

  return (
    <Container>
      <ProductImage>
        <img
          src="http://bk-latam-prod.s3.amazonaws.com/sites/burgerking.com.br/files/BigKing_thumb_0.png"
          alt="Big King XL"
        />
      </ProductImage>

      <ProductTitle>{product.title}</ProductTitle>
      <ProductPrice>R$ {product.price}</ProductPrice>
      <ProductDescription>{product.description}</ProductDescription>
    </Container>
  );
}
