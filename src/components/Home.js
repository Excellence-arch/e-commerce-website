import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import LoginNav from './LoginNav';
import NavBar from './NavBar';

const Home = ({allGoods, addToCart}) => {

    let {id} = useParams();
    const navigate = useNavigate();

    const handleClick = (ind) => {
        if(id) {
            addToCart(ind, id);
        } else {
            navigate("/login");
        }
    }
  return (
    <div>
      {id ? <LoginNav/> : <NavBar/>}
      <div className="card-group">
          {allGoods.map((val, i) => (
              <div className="card m-3 col-lg-4 col-sm-12 col-md-4" key={i}>
                <img className="card-img-top" style={{height:"180px"}} src={val.img} alt={val.goodName}/>
                <div className="card-body">
                    <h4 className="card-title">Name: {val.goodName}</h4>
                    <p className="card-text">Quantity: {val.quantity}</p>
                    <p className="card-text">Price: {val.price}</p>
                </div>
                <button className="btn btn-success w-100" onClick={() => handleClick(i)} >Add to cart</button>
            </div>
          ))}
      </div>
    </div>
  )
}

export default Home;