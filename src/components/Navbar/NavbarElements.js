import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import { FaEnvira } from 'react-icons/fa';
import { HiOutlineShoppingCart } from 'react-icons/hi';

export const Nav = styled.nav`
  background: transparent;
  height: 80px;
  display: flex;
  justify-content: left;
  font-weight: 700;
  margin-left: 6rem;
`;

export const NavLink = styled(Link)`
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

export const NavIcon = styled.div`
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
  color: #fff;

  h1 {
    transform: translate(-175%, 100%);
    font-weight: bold;
    font-size: 35px;
  }
`;

export const Bars = styled(FaEnvira)`
  font-size: 2rem;
  transform: translate(-80%, -1%);
`;

export const Cart = styled(HiOutlineShoppingCart)`
	font-size: 2rem;
	
`;
