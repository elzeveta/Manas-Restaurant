import React, { useContext } from 'react';
import { Nav, NavLink, NavIcon, Bars } from './NavbarElements';
import { Link } from "react-router-dom";
import CartContext from '../Cart/context';

export default function Navbar({ toggle }) {
  const { cartItems } = useContext(CartContext);

  return (
    <Nav>
      <NavLink to='/'>Manas</NavLink>
      <NavIcon onClick={toggle}>
        <p>
          <Link to="/cart">Cart:</Link>
          { (cartItems.reduce((acc, item) => acc + item.qty, 0)) }
        </p>
        <p>Menu</p>
        <Bars />
      </NavIcon>
    </Nav>
  );
};

