import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  height: 90vh;
  width: 130px;
  padding: 15px 0;

  background: #fff;
`;

export const MenuTitle = styled.div`
  display: flex;
  justify-content: center;

  h1 {
    font-size: 20px;
    font-weight: bold;
    color: #ff6e2f;
  }
`;

const activeClassName = 'active';

export const MenuItem = styled(NavLink).attrs({
  activeClassName,
})`
  display: flex;
  flex-direction: column;
  align-items: center;

  text-decoration: none;

  margin: 15px 0px;

  img {
    width: 70px;
  }

  p {
    font-size: 11px;
    color: #7b7b7b;
  }

  &.${activeClassName} {
    border-right: 5px solid #ff6e2f;
    padding-left: 5px;
  }
`;
