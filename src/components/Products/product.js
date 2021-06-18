import React, { useContext } from "react";
import {
    ProductTitle,
    ProductCard,
    ProductImg,
    ProductInfo,
    ProductDesc,
    ProductPrice,
    ProductButton
} from "./ProductsElements";
import CartContext from '../Cart/context'

export default function Product({
    id,
    title,
    category,
    price,
    img,
    desc
}) {
    const { addToCart } = useContext(CartContext);
    return (
        <ProductCard key={id}>
            <ProductImg
                src={`/images/${img}`}
                alt={title}
            />
            <ProductInfo>
            <ProductTitle>{title}</ProductTitle>
            <ProductDesc>{desc}</ProductDesc>
            <ProductPrice>Cena: {price} pln</ProductPrice>
            <ProductButton onClick={() => addToCart({ id, title, price})}>
            Dodaj do koszyka
            </ProductButton>
            </ProductInfo>
        </ProductCard>
    );
}