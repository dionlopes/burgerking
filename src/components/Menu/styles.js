import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 160px;
  padding: 15px 0;
  margin-top: 50px;

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
    width: 90px;
  }

  p {
    font-size: 11px;
    color: #7b7b7b;
  }

  &.${activeClassName} {
    border-right: 6px solid #ff6e2f;
    padding-left: 6px;
  }

  transition: opacity 0.3s;

  &:hover {
    opacity: 0.8;
  }
`;
