import React, { useContext } from 'react';
import { Nav, NavLink, NavIcon, Bars, NavCart } from './NavbarElements';
import { Link } from "react-router-dom";
import CartContext from '../Cart/context';

export default function Navbar({ toggle }) {
  const { cartItems } = useContext(CartContext);

  return (
    <Nav>
      <NavLink to='/'>MANAS<img src="./images/logo-manas.png" style={{borderRadius: '50%', width: '50px', margin: '5px'}}/></NavLink>
      <NavIcon onClick={toggle}>
        <p>
          <NavCart to="/cart">Koszyk: </NavCart>
          { (cartItems.reduce((acc, item) => acc + item.qty, 0)) }
        </p>
        <p>Menu</p>
        <Bars />
      </NavIcon>
    </Nav>
  );
};

