import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import { FaEnvira } from 'react-icons/fa';

export const Nav = styled.nav`
  background: transparent;
  height: 80px;
  display: flex;
  justify-content: left;
  font-weight: 700;
  margin-left: 4rem;
`;

export const NavLink = styled(Link)`
margin-top: 20px;
  color: #fff;
  font-size: 2rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;

  @media screen and (max-width: 400px) {
    position: absolute;
    top: 10px;
    left: 25px;
  }
`;
export const NavCart = styled(Link)`
  text-decoration: none;
  color: #fff;
  cursor: pointer;

  @media screen and (max-width: 400px) {
    position: absolute;
    top: 10px;
    left: 25px;
  }
`;

export const NavIcon = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
  color: #fff;

  p {
    transform: translate(-110%, 100%);
    font-weight: bold;
    font-size: 24px;
    color: #fff;
  }
`;

export const Bars = styled(FaEnvira)`
  font-size: 2rem;
  transform: translate(-200%, 110%);
`;
