import { useState } from 'react';

export default function useCart() {
    const [ cartItems, setCartItems] = useState([]);

    function addToCart(product) {
        setCartItems((prev) => {
            const existing = cartItems.find(
                (item) => item.id === product.id
            );

            return existing
                ? [
                    ...cartItems.map((item) =>
                    item.id === product.id
                        ? { ...item, qty: item.qty + 1 }
                        : item
                    ),
                ]
                : [...prev, { ...product, qty: 1}];
        });
    }

    function clearCart() {
        setCartItems((prev) => [])
    }

    return {
        cartItems,
        addToCart,
        clearCart
    }
}
