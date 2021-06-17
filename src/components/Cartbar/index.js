import React from 'react';
import { CartbarContainer, CartbarList } from './CartElements';

function Cartbar(props) {
	return (
		<CartbarContainer>
			{props.cartList.length !== 0
				? props.cartList.map((cart) => <CartbarList>{cart.title}</CartbarList>)
				: ''}
		</CartbarContainer>
	);
}

export default Cartbar;
