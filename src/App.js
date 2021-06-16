import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { GlobalStyle } from './globalStyles';
import Hero from './components/Hero';
import Products from './components/Products';
import Products1 from './components/Products-1';
import { productData, productDataTwo } from './components/Products/data';
import About from './components/About';
import Feature from './components/Feature';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <GlobalStyle />
      

      <Switch>
        <Route path="/" exact>
          <Hero />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/menu">
          <Products heading='Menu' />
        </Route>
      </Switch>

      
      <Products1 heading='Choose your favorite' data={productData} /> 
      <Feature />
      <Products1 heading='Sweet Treats for You' data={productDataTwo} />
      <Footer />
    </Router>
  );
}

export default App;
