import styled from "styled-components";

export const ProductsContainer = styled.div`
  min-height: 100vh;
  background: #150f0f;
  color: #fff;
  text-align: center;
`;

export const ProductWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: baseline;
  margin: 0 auto;
`;

export const ProductCard = styled.div`
  margin-left: 4rem;
  line-height: 1.5;
  width: 320px;
`;

export const ProductImg = styled.img`
  height: 250px;
  min-width: 250px;
  width: 100%;
  box-shadow: 8px 8px #fdc500;
`;

export const ProductsHeading = styled.h1`
  font-size: clamp(2rem, 2.5vw, 3rem);
  text-align: center;
  margin-bottom: 2rem;
`;

export const ProductTitle = styled.h2`
  font-weight: 400;
  font-size: 1.5rem;
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  text-align: center;
`;

export const ProductDesc = styled.p`
min-height: 70px;
`;

export const ProductPrice = styled.p`
  font-size: 2rem;
`;

export const ProductButton = styled.button`
  font-size: 1rem;
  padding: 0.5rem 1rem;
  border: none;
  background: #e31837;
  color: #fff;
  transition: 0.2 ease-out;

  &:hover {
    background: #ffc500;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #000;
  }
`;
