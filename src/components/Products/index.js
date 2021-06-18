import React, { Component } from "react";
import {
  ProductsContainer,
  ProductWrapper,
  ProductsHeading
} from "./ProductsElements";
import Product from './product';
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import data from "./restaurant-menu.json";
import "./products.css";

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      cartList: [],
      categories: [
        "wszystkie",
        "lunchset",
        "przystawki",
        "daniaglowne",
        "talerzu",
        "zupy",
        "duzazupy",
        "desery",
        "napoje",
        "dodatki",
      ],
      isOpen: false,
    };
  }
  componentDidMount() {
    this.setState({ data: data });
  }
  filterProducts(category) {
    if (category === "wszystkie") {
      this.setState({ data: data });
    } else {
      this.setState({
        data: data.filter((product) => product.category === category),
      });
    }
  }
  toggle = () => () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <ProductsContainer>
        <Navbar toggle={this.toggle()} />
        <Sidebar isOpen={this.state.isOpen} toggle={this.toggle()} />
        <ProductsHeading>{this.props.heading}</ProductsHeading>
        <div className="categories">
          <p style={{ textAlign: "center" }}>
            {this.state.categories.map((category) => {
              return (
                <button onClick={() => this.filterProducts(category)}>
                  {category.toUpperCase()}
                </button>
              );
            })}
            <br />
          </p>
        </div>
        <ProductWrapper>
          {this.state.data.map((product) => (
            <Product key={product.id} {...product} />
          ))}
        </ProductWrapper>
      </ProductsContainer>
    );
  }
}

export default Products;
