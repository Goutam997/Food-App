import React,{useContext} from "react";
import {FoodContext} from "../App";
import {Link} from "react-router-dom";

function Header(){

  let context = useContext(FoodContext);

  return <>
    <div className="navbar navbar-light bg-dark" id="nav-bar">
      <Link to="/home" className="header-link">
        <div className="navbar-brand mb-0 h2" id="navbar-content">Food-App</div>
      </Link> 
      <div>
        <Link to="/cart" className="shopping-cart">
          <span>Cart 🛒</span>
          <span id="cart-count">({context.cartValue})</span>
        </Link>
      </div> 
    </div>
  </>
}

export default Header;