import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { GlobalStyle } from './globalStyles';
import Hero from './components/Hero';
import Products from './components/Products';
import Products1 from './components/Products1';
import { productData, productDataTwo } from './components/Products/data';
import About from './components/About';
import Portfolio from './components/Portfolio'
import Feature from './components/Feature';
import Footer from './components/Footer';
import Cart from './components/Cart';
import CartContext from './components/Cart/context';
import useCart from './hooks/use-cart';

function App() {
  return (
    <CartContext.Provider value={useCart([])}>
      <Router>
        <GlobalStyle />
        
        <Switch>
          <Route path="/" exact>
            <Hero />
            <Products1 heading='Choose your favorite' data={productData} /> 
            <Feature />
            <Products1 heading='Sweet Treats for You' data={productDataTwo} />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/menu">
            <Products heading='Menu' />
          </Route>
          <Route path="/portfolio">
            <Portfolio />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
        </Switch>

        <Footer />
      </Router>
    </CartContext.Provider>
  );
}

export default App;
