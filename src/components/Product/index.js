import React from 'react';

import {
  Container,
  ProductImage,
  ProductTitle,
  ProductPrice,
  ProductDescription,
} from './styles';

export default function Product({ product }) {
  return (
    <Container>
      <ProductImage>
        <img src={product.image} alt={product.title} />
      </ProductImage>

      <ProductTitle>{product.title}</ProductTitle>
      <ProductPrice>{product.priceFormatted}</ProductPrice>
      <ProductDescription>{product.description}</ProductDescription>
    </Container>
  );
}
