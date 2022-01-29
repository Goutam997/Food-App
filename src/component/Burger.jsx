import React,{useState,useEffect,useContext} from "react";
import {useNavigate} from "react-router-dom";
import {FoodContext} from "../App";

function Burger(){
  let context = useContext(FoodContext);
  let navigate = useNavigate();
  let [products, setProducts] = useState([]);

  let getData = () =>{
    if(context.data.length >0){
      setProducts(context.data[1].subItemsData.subItems);
    }
    else{
      navigate("/");
    }
  };

  useEffect(() => {
    getData();
  },[])

  let handleAdd = (e) =>{
    context.cart.push(e);
    context.setCartValue(context.cart.length)
  };

  return <>
    <div className="container-fluid jumbotron products">
    <h2>Tasty Burgers</h2>
    {
      products.map((e,i) => {
        return <div className="card product" key={i}>
          <div className="card-header">Burger</div>
          <img className="card-img-top product-img" src={e.image} alt={e.name} />
          <div className="card-body">
            <h3 className="card-title">{e.name}</h3>
            <p className="card-text">{e.description}</p>
            <h5 className="card-title product-price">&#x20B9; {e.price}</h5>
            <button className="btn btn-primary btn-outlined-warning" onClick={()=>{handleAdd(e)}}>Add to Cart</button>
          </div>
        </div>
      })
    }
    </div>
  </>
}

export default Burger;