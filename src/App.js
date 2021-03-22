import React, { useState } from "react";
import HomePage from "./components/HomePage/HomePage";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Products from "./components/Products/Products";
import AboutUs from "./components/About Us/AboutUs";
import Contact from "./components/Contact/Contact";
import SignUp from "./components/SignUp/SignUp";
import LogIn from "./components/SignUp/LogIn/LogIn";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Checkout/Checkout";
function App() {
  const [cartCount, setCartCount] = useState(0);
  return (
    <>
      <Router>
        <NavBar/>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/products" exact>
            <Products />
          </Route>
          <Route path="/aboutUs" exact>
            <AboutUs />
          </Route>
          <Route path="/contact" exact>
            <Contact />
          </Route>
          <Route path="/signUp" exact>
            <SignUp />
          </Route>
          <Route path="/login" exact>
            <LogIn />
          </Route>
          <Route path="/cart" exact>
            <Cart />
          </Route>
          <Route path="/checkout" exact>
            <Checkout />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
