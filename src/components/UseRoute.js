import { useEffect, useState } from 'react'
import { Navigate, Route, Routes, useNavigate, useNavigationType, useParams } from 'react-router-dom';
import Carts from './Carts';
// import Cart from './Cart';
import Home from './Home';

const UseRoute = ({addToCart, allGoods, allCustomers, increaseGood, decreaseGood, onlineUser}) => {

  // let {id} = useParams();
  // const navigate = useNavigate();

  // useEffect(()=> {
  //   if(allCustomers.length == 0 || id > allCustomers.length) {
  //     navigate(`/${id}`);
  //   } else {
  //     navigate();
  //   }
  // });

  return (
    <>
        <Routes>
            <Route path='/' element={<Home addToCart={addToCart} allGoods={allGoods}/>} />
            <Route path="cart" element={<Carts allCustomers={allCustomers} />} />
        </Routes>
    </>
  )
}

export default UseRoute;