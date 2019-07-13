import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  height: 50px;
  background: #fff;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled(Link)`
  transition: opacity 0.3s;

  &:hover {
    opacity: 0.5;
  }

  img {
    height: 40px;
  }
`;
