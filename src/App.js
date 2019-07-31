import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import  Home  from './Pages/Home';
import  Products  from './Pages/Products';
import  About  from './Pages/About';
import  fof from './Pages/fof';
import Layout from './Components/Layout'
import Navbar from './Components/Navbar'


function App() {
  return (
    <React.Fragment>
    <Router>
      <Navbar/>
     
      <Switch>
        <Route exact path = "/" component = { Home }/>
        <Route path = "/products" component = { Products }/>  
        <Route path = "/about" component = { About }/>  
        <Route component = {fof}/>
      </Switch>  
      
    </Router> 
    </React.Fragment>
  );
}

export default App;
