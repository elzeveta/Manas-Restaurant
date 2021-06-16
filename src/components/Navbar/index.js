import React from 'react';
import { Nav, NavLink, NavIcon, Bars } from './NavbarElements';

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavLink to='/'><img src="./images/logo-manas.png" style={{ borderRadius: "50%", width: "150px", marginTop: "10rem" }}/></NavLink>
        <NavIcon onClick={toggle}>
          <h1>Menu</h1>
          <Bars />
        </NavIcon>
      </Nav>
      
    </>
  );
};

export default Navbar;
