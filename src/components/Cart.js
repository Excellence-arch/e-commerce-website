import LoginNav from "./LoginNav";
import NavBar from "./NavBar";
import { useState, useEffect } from 'react';

const Cart = ({id, allCustomers, allGooods, cartGoods, increaseNum, decreaseNum}) => {

  const [totals, setTotals] = useState([]);

  useEffect(()=> {
    const me = async () => {
      let total = [];
      for(let i = 0; i < cartGoods[id].length; i++) {
        let newPrice = (cartGoods[id][i].price * cartGoods[id][i].qty);
        // console.log(newPrice);
        total.push(newPrice);
        // console.log(total);
      }
      setTotals(total);
    }
    me();
  },[])

  const increased = (i) => {
    increaseNum(i, id);
  }

  const decreased = (i) => {
    decreaseNum(i, id);
  }
  return (
    <div>
        {id ? <LoginNav/> : <NavBar/>}
        <div className="container col-8 column mt-4">
          {cartGoods[id].map((val, i) => (
            <div className="card container" key={i}>
              <h4 className="card-title">Name: {val.goodName}</h4>
              <p className="card-text">Price for each: {val.price}</p>
              <p className="card-text">Total Price: {val.price * val.qty}</p>
              <p className="cart-text">
                <button className="btn btn-success" onClick={()=> decreased(i)} >Decrease</button>
                  <span className="text-center mx-5" >{val.qty}</span>
                <button className="btn btn-success" onClick={() => increased(i)}>Increase</button>
              </p>
            </div>
          ))}
          <div className="text-center">Total: {totals.reduce((a,b) => a+b, 0)}</div>
        </div>
        <div className="container text-center">
          <button className="btn btn-success">Checkout</button>
        </div>
    </div>
  )
}

export default Cart;