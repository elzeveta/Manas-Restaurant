import styled from "styled-components";
import ImgBg from '../../images/food-main.jpg';

export const Products1Container = styled.div`
  min-height: 80vh;
  background: whitesmoke;
  color: #150f0f;
  padding-top: 2rem;
`;
export const Products1Btn = styled.button`
  background: #ffc500;
`;

export const Products1Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
`;

export const Products1Card = styled.div`
  margin: 0 2rem;
  line-height: 2;
  width: 300px;
`;

export const Products1Img = styled.img`
  height: 300px;
  min-width: 300px;
  max-width: 100%;
  box-shadow: 8px 8px #fdc500;
`;

export const Products1Heading = styled.h1`
  font-size: clamp(2rem, 2.5vw, 3rem);
  text-align: center;
  margin-bottom: 2rem;
`;

export const Products1Title = styled.h2`
  font-weight: 400;
  font-size: 1.5rem;
`;

export const Products1Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

// export const Products1Desc = styled.p`
//   margin-bottom: 1rem;
// `;

// export const Products1Price = styled.p`
//   margin-bottom: 1rem;
//   font-size: 2rem;
// `;

// export const Products1Button = styled.button`
//   font-size: 1rem;
//   padding: 1rem 1rem;
//   border: none;
//   background: #e31837;
//   color: #fff;
//   transition: 0.2 ease-out;

//   &:hover {
//     background: #ffc500;
//     transition: 0.2s ease-out;
//     cursor: pointer;
//     color: #000;
//   }
// `;
