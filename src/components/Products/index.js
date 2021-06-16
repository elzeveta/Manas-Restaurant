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
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import data from './restaurant-menu.json';
import "./products.css"

class Products extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      cartList: [],
       categories: ['all','lunchset','przystawki','daniaglowne','talerzu','zupy','duzazupy','desery','napoje','dodatki'],
       isOpen: false
    }
  }
  componentDidMount() {
    this.setState({ data: data })
  }
  filterProducts(category) {
    if (category === 'all') {
      this.setState({ data: data })
    } else {
      this.setState({ data: data.filter(product => product.category == category) })
    }
  }
  toggle = () => () => {
    this.setState({ isOpen: !this.state.isOpen })
  }
  
  addToCart = (name) => {
    let newItem = data.filter(item => { return item.title === name })

    this.setState({cartList: [...this.state.cartList,...newItem]} )
  }
  render() {
console.log("render",this.state.cartList)
    return (
      <ProductsContainer>
        <Navbar toggle={this.toggle()} />
        <Sidebar isOpen={this.state.isOpen} toggle={this.toggle()} />
        <ProductsHeading>{this.props.heading}</ProductsHeading>
        <div className="categories">
          <p style={{ textAlign: "center" }}>
            {this.state.categories.map((category) => {
              return <button onClick={() => this.filterProducts(category)}>{category.toUpperCase()}</button>
              })
            }
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
