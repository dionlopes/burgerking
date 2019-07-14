import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import api from '../../services/api';
import { formatPrice } from '../../util/format';

import { Container, Products, CategoryTitle } from './styles';

import ProductItem from '../../components/Product';

export default function Main({ match }) {
  const [products, setProducts] = useState([]);

  const categoryName = match.params.id || 'hamburgers';

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get(`/${categoryName}`);

      const data = response.data.map(product => ({
        ...product,
        priceFormatted: formatPrice(product.price),
      }));

      setProducts(data);
    }

    loadProducts();
  }, [categoryName]);

  return (
    <Container>
      <CategoryTitle>{categoryName}</CategoryTitle>
      <Products>
        {products.map(product => (
          <ProductItem key={product.id} product={product} />
        ))}
      </Products>
    </Container>
  );
}

Main.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};
