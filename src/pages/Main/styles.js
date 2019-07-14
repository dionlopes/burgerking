import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-content: center;
  flex-direction: column;
  padding: 0px 20px;
`;

export const Products = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 20px;
  padding-bottom: 20px;

  @media screen and (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: 960px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const CategoryTitle = styled.h2`
  padding: 20px 0;
  text-transform: capitalize;
  color: #929292;
`;

export const Loading = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;

  img {
    width: 100px;
    opacity: 0.5;
    -webkit-animation: spin 2s linear infinite;
    -moz-animation: spin 2s linear infinite;
    animation: spin 2s linear infinite;

    @-moz-keyframes spin {
      100% {
        -moz-transform: rotate(360deg);
      }
    }
    @-webkit-keyframes spin {
      100% {
        -webkit-transform: rotate(360deg);
      }
    }
    @keyframes spin {
      100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
      }
    }
  }
`;
