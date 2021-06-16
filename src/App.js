import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { GlobalStyle } from './globalStyles';
import Hero from './components/Hero';
import Products from './components/Products';
import Products1 from './components/Products1';
import { productData, productDataTwo } from './components/Products1/data';
import About from './components/About';
import Portfolio from './components/Portfolio'
import Feature from './components/Feature';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <GlobalStyle />
      

      <Switch>
        <Route path="/" exact>
          <Hero />
          <Products1 heading='Wybierz swój ulubiony' data={productData} /> 
          <Feature />
          <Products1 heading='Słodkie smakołyki dla Ciebie' data={productDataTwo} />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/menu">
          <Products heading='Nazse Menu' />
        </Route>
        <Route path="/portfolio">
          <Portfolio />
        </Route>
      </Switch>

      <Footer />
    </Router>
  );
}

export default App;
