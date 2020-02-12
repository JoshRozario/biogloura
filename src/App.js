import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home  from './Pages/Home';
import Product  from './Pages/Product';
import About  from './Pages/About';
import Details from './Pages/Details';
import fof from './Pages/fof';
import ProductList from './Pages/ProductList';
import Navbar from './Components/Navbar';
import Contact from './Pages/Contact';
import Cart from "./Components/Cart/Cart";

function App() {
  return (
    <React.Fragment>
    <Router>
      <Navbar/>
      <Switch>
        <Route exact path = "/" component = { Home }/>
        <Route path = "/products" component = { ProductList }/>  
        <Route path = "/about" component = { About }/>  
        <Route path = "/details" component = { Details }/>
        {/*<Route path = "/contact" component = { Contact }/>*/}
        <Route path = "/cart" component = {Cart}/>
        <Route component = {fof}/>
      </Switch>  
      <Contact/>
    </Router> 
    </React.Fragment>
  );
}

export default App;
