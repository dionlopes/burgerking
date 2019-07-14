import React, { useState, useEffect } from 'react';
import api from '../../services/api';

import { Container, Products, CategoryTitle } from './styles';

import ProductItem from '../../components/Product';

export default function Main() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get('/hamburgers');
      setProducts(response.data);
    }

    loadProducts();
  }, []);

  return (
    <Container>
      <CategoryTitle>Hamburgers</CategoryTitle>
      <Products>
        {products.map(product => (
          <ProductItem key={product.id} product={product} />
        ))}
      </Products>
    </Container>
  );
}
