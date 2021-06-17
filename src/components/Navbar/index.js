import React, { useState } from 'react';
import { Nav, NavLink, NavIcon, Bars, Cart } from './NavbarElements';

const Navbar = ({ toggle, showCart }) => {
	
	
  return (
		<>
			<Nav>
				<NavLink to='/'>
					<img
						src='./images/logo-manas.png'
						style={{ borderRadius: '50%', width: '150px', marginTop: '10rem' }}
						alt='image'
					/>
				</NavLink>

				<NavIcon>
					<h1>Menu</h1>
					<Bars onClick={toggle} />
					<Cart onClick={showCart} />
				</NavIcon>
			</Nav>
		</>
	);
};

export default Navbar;
