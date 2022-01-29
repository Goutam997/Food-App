import React,{useState, useEffect,} from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import axios from "axios";
import Pizza from "./component/Pizza";
import Burger from "./component/Burger";
import Home from "./component/Home";
import Header from "./component/Header";
import Cart from "./component/Cart";
import './App.css';

export let FoodContext = React.createContext();
const url ="https://fod-app.herokuapp.com/food";

function App() {

  let [cart, setCart] = useState([]),
  [cartValue, setCartValue] = useState(cart.length),
  [data, setData] = useState([]);

  let getData = async() => {
    let response = await axios.get(url);
    setData(response.data);
  };

  useEffect(() => {
    getData();
  },[]);

  return <>
      <BrowserRouter>
        <FoodContext.Provider value={{data, cart, setCart, cartValue, setCartValue, url}}>
          <div>
            <div><Header/></div>
            <div>
              <Routes>
                <Route path="/home" element={<Home/>}/>
                <Route path="/pizza" element={<Pizza/>}/>
                <Route path="/burger" element={<Burger/>}/>
                <Route path="/cart" element={<Cart/>}/>
                <Route path="/" element={<Home/>}/>
              </Routes>
            </div>
          </div> 
        </FoodContext.Provider>
      </BrowserRouter>
    </>
}

export default App;