import React, { Component } from "react";
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
  ProductButton,
} from "./ProductsElements";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import Cartbar from "../Cartbar";
import data from "./restaurant-menu.json";
import "./products.css";

class Products extends React.Component {
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
      isShowCart: false,
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
        data: data.filter((product) => product.category == category),
      });
    }
  }
  toggle = () => () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  showCart = () => {
    this.setState({ isShowCart: !this.state.isShowCart });
  }

  addToCart = (id) => {
    let newItem = data.filter((item) => {
      return item.id === id;
    });

    this.setState({ cartList: [...this.state.cartList, ...newItem] });
  };
  render() {
    console.log("show",this.state.isShowCart)
    return (
			<ProductsContainer>
				<Navbar toggle={this.toggle()} showCart={this.showCart} />
				<Sidebar isOpen={this.state.isOpen} toggle={this.toggle()} />
				<Cartbar
					isShowCart={this.state.isShowCart}
					cartList={this.state.cartList}
				/>
				<ProductsHeading>{this.props.heading}</ProductsHeading>
				<div className='categories'>
					<p style={{ textAlign: 'center' }}>
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
					{this.state.data.map((product, index) => {
						return (
							<ProductCard key={index}>
								<ProductImg
									src={`/images/${product.img}`}
									alt={product.title}
								/>
								<ProductInfo>
									<ProductTitle>{product.title}</ProductTitle>
									<ProductDesc>{product.desc}</ProductDesc>
									<ProductPrice>{product.price} pln</ProductPrice>
									<ProductButton
										onClick={() => {
											this.addToCart(product.id);
										}}
									>
										Dodaj do kozsyka
									</ProductButton>
								</ProductInfo>
							</ProductCard>
						);
					})}
				</ProductWrapper>
			</ProductsContainer>
		);
  }
}

export default Products;
