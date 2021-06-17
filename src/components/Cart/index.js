import  React, { useContext, useState } from "react";
import { useHistory } from "react-router";
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import {
  CartContainer,
  CartContent,
  CartItems,
  CartH1,
  CartP,
  CartBtn,
} from './CartElements';
import Context from './context';


export default function Cart() {
    const { cartItems, clearCart } = useContext(Context);
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen);
    };
    let history = useHistory();
    const redirect = () => {
        clearCart()
        history.push('/?success=true');
    }

    return (
        <CartContainer>
            <Navbar toggle={toggle} />
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <CartContent>
                <CartH1>My Cart</CartH1>

                {(cartItems.length > 1)
                ? <table width="100%" cellSpacing={0} cellPadding={0}>
                    <thead style={{textAlign: 'left'}}>
                        <tr>
                            <th>Product name</th>
                            <th>Price</th>
                            <th>Qty</th>
                            <th>Subtotal</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cartItems.map((product) => (
                            <tr key={product.id}>
                                <td>{product.title}</td>
                                <td>{product.price} pln</td>
                                <td>{product.qty}</td>
                                <td>{product.price * product.qty} pln</td>
                            </tr>
                        ))}
                        <tr>
                            <td></td>
                            <td></td>
                            <td>Total:</td>
                            <td>{cartItems.reduce((acc, item) => acc + (item.price * item.qty), 0)} pln</td>
                        </tr>
                    </tbody>
                </table>
                : <CartP>Your cart is empty</CartP>
                }

                <CartBtn onClick={redirect}>Buy now</CartBtn>
            </CartContent>
        </CartContainer>
    );
}