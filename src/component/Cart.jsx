import React,{useState,useContext} from "react";
import {Link, useNavigate} from "react-router-dom"
import {FoodContext} from "../App";

function Cart(){

  let context = useContext(FoodContext);
  let [cartPrice] = useState(0);
  let handleRemove = (e) =>{
    context.cart.splice(context.cart.indexOf(e),1);
    context.setCartValue(context.cart.length);
  }

  return <div className="jumbotron-fluid">
      <div className="container">
        {
          context.cart.length?<div className="card">
          <h2 className="card-header">Your Orders are: </h2>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                {
                  context.cart.map((e,i) => {
                    cartPrice += Number(e.price);
                    return <li className="list-group-item" key={i}>
                      <div className="card-body">
                            <h4 className="card-title">{e.name}</h4>
                            <div className='card-title'> &#x20B9; {e.price} </div>
                            <div className='card-text'>{e.description}</div>
                            <span><button className='btn btn-secondary btn-danger' onClick={()=>handleRemove(e)}>🗑️</button></span>
                      </div>
                    </li>
                  })
                }
              </ul>
            </div>
            <div className="card-footer">
              <h3>Shopping Cart Total: </h3>
              <span>&#x20B9; {cartPrice} </span>
              <Link to='/'><button className='btn btn-success' onClick={()=> {
                    context.setCart([]);
                    context.setCartValue(0);
                }}>Place Order</button></Link>
            </div>
          </div> : <div className="card"><h1 className="card-title">Your Cart is empty</h1></div>
        }
      </div>
    </div>
}

export default Cart;