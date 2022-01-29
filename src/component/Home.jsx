import React,{useContext,useEffect,Fragment} from "react";
import {FoodContext} from "../App";
import {Link, useNavigate} from "react-router-dom";

function Home(){

  let context = useContext(FoodContext);
  
  return <>
    <div className="container-fluid row">
    {
      context.data.map((e,i) =>{
        return <div className="container col item-wrapper" key={i}>
          <Link to={`/`+(e.name.toLowerCase())} className="item-wrapper-link">
            <div className="card item" width="18rem;">
              <img src={e.image} className="card-img-top item-img" alt="..."></img>
              <div className="card-body btn btn-light">
                <h5 className="card-title">{e.name}</h5>
              </div>
            </div>
          </Link>  
        </div>
      })
    }
    </div>
  </>
}

export default Home;