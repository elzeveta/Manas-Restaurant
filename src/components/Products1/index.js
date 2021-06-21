import React from 'react';
import {
  Products1Container,
  Products1Wrapper,
  Products1Heading,
  Products1Title,
  Products1Card,
  Products1Img,
  Products1Info,
  Products1Desc,
  Products1Price,
  Products1Button
} from './Products1Elements';

const Products1 = ({ heading, data }) => {
  return (
    <Products1Container>
      <Products1Heading>{heading}</Products1Heading>
      <Products1Wrapper>
        {data.map((product, index) => {
          return (
            <Products1Card key={index}>
              <Products1Img src={product.img} alt={product.alt} />
              <Products1Info>
                <Products1Title>{product.name}</Products1Title>
                {/* <Products1Desc>{product.desc}</Products1Desc> */}
                {/* <Products1Price>{product.price}</Products1Price>
                <Products1Button>{product.button}</Products1Button> */}
              </Products1Info>
            </Products1Card>
          );
        })}
      </Products1Wrapper>
    </Products1Container>
  );
};

export default Products1;