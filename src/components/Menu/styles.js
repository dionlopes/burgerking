import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  min-width: 160px;
  margin-top: 67px;

  background: #fff;
`;

export const MenuTitle = styled.div`
  display: flex;
  justify-content: center;

  h1 {
    margin-top: 20px;
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
  padding: 0px 30px;
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
    padding: 0px 8px 0px 14px;
  }

  transition: opacity 0.3s;

  &:hover {
    opacity: 0.8;
  }
`;
