import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  padding: 10px;
  background: #ffffff;

  img {
    width: 180px;
  }
`;

export const ProductImage = styled.div`
  display: flex;
  justify-content: center;
`;

export const ProductTitle = styled.div`
  font-size: 17px;
  font-weight: bold;
  padding-bottom: 5px;
  color: #292929;
`;
export const ProductPrice = styled.div`
  font-size: 17px;
  font-weight: bold;
  padding-bottom: 3px;
  color: #292929;
`;
export const ProductDescription = styled.div`
  font-size: 12px;
  color: #292929;
`;
