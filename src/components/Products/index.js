import React, { Component } from 'react';
import {
  ProductsContainer,
  ProductWrapper,
  ProductsHeading,
  ProductTitle,
  ProductCard,
  ProductImg,
  ProductInfo,
  ProductDesc,
  ProductPrice,
  ProductButton
} from './ProductsElements';
import data from './restaurant-menu.json';
import "./products.css"

class Products extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      cartList: []
    }
  }
  componentDidMount() {
    this.setState({ data: data })
  }
  filterProducts(category) {
    this.setState({ data: data.filter(product => product.category == category) })
  }
  
  addToCart = (name) => {
    let newItem = data.filter(item => { return item.title === name })

    this.setState({cartList: [...this.state.cartList,...newItem]} )
  }
  render() {
console.log("render",this.state.cartList)
    return (
      <ProductsContainer>
        <ProductsHeading>{this.props.heading}</ProductsHeading>
        <div className="categories">
          <p style={{ textAlign: "center" }}>
            <button onClick={() => this.filterProducts('all')}>ALL</button>
            <button onClick={() => this.filterProducts('lunchset')}>LUNCH SET</button>
            <button onClick={() => this.filterProducts('przystawki')}>PRZYSTAWKI</button>
            <button onClick={() => this.filterProducts('daniaglowne')}>DANIA GLÓWNE</button>
            <button onClick={() => this.filterProducts('talerzu')}>DANIA PODAWANE GORĄCYM TALERZU</button>
            <button onClick={() => this.filterProducts('zupy')}>ZUPY</button>
            <button onClick={() => this.filterProducts('duzazupy')}>DUZAZUPY</button>
            <button onClick={() => this.filterProducts('desery')}>DESERY</button>
            <button onClick={() => this.filterProducts('napoje')}>NAPOJE</button>
            <button onClick={() => this.filterProducts('dodatki')}>DODATKI</button>
            <br />
          </p>
        </div>
        <ProductWrapper>
        
          {this.state.data.map((product, index) => {
            return (
              <ProductCard key={index}>
                <ProductImg src={`/images/${product.img}`} alt={product.title} />
                <ProductInfo>
                  <ProductTitle>{product.title}</ProductTitle>
                  <ProductDesc>{product.desc}</ProductDesc>
                  <ProductPrice>{product.price}</ProductPrice>
                  <ProductButton onClick={() => { this.addToCart(product.title)}}>Add to Cart</ProductButton>
                </ProductInfo>
              </ProductCard>
            );
          })}
        </ProductWrapper>
      </ProductsContainer>
    );
  }
};

export default Products;
