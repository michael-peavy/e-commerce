import React from "react";
import {Switch, Route} from 'react-router-dom';
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/NavBar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/Cart';
import Default from './components/Default';



 class App extends React.Component {
  render() {
    return (
    <React.Fragment>
      <Navbar/>

      <Switch>
      <Route exact={true} path="/" component={ProductList}/>

      <Route exact={true} path="/details" component={Details}/>
      <Route exact={true} path="/cart" component={Cart}/>
      <Route component={Default}/>
      </Switch>

    </React.Fragment>
    );
  }
}

export default App;
