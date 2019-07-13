import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  padding: 0px 20px;
`;

export const Products = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  padding-bottom: 20px;
`;

export const CategoryTitle = styled.h2`
  padding: 20px 0;
  color: #929292;
`;
