import { useEffect } from "react";
import { Navigate, Route, Routes, useNavigate, useParams } from "react-router-dom";
import Cart from "./Cart";
import Home from "./Home";

const Reroute = ({addToCart,allGoods, cartGoods, increaseNum, decreaseNum, allCustomers}) => {

    let {id} = useParams();
    const navigate = useNavigate();

    useEffect(() =>  {
      const me = async () => {
        if(allCustomers.length < id) {
          navigate("/")
        }
      }
    }, [])

  return (
    <div>
        <Routes>
            {/* <Route path="/" element={<Navigate to="/"/>} /> */}
            <Route path="" element={<Home addToCart={addToCart} allGoods={allGoods} />} />
            <Route path="cart" element={<Cart increaseNum={increaseNum} cartGoods={cartGoods} decreaseNum={decreaseNum} allGoods={allGoods} allCustomers={allCustomers} id={id} />} />
            {/* <Route to="/*" element={<Navigate to="/"/>}/> */}
        </Routes>
    </div>
  )
}

export default Reroute;