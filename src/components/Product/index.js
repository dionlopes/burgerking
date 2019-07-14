import React from 'react';
import PropTypes from 'prop-types';

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

Product.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string,
    image: PropTypes.string,
    priceFormatted: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
};
