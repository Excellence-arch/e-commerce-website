import { Navigate, Route, Routes, useParams } from "react-router-dom";
import Cart from "./Cart";
import Home from "./Home";

const Reroute = () => {

    let {id} = useParams();

  return (
    <div>
        <Routes>
            {/* <Route path="/" element={<Navigate to="/admin/"/>} /> */}
            <Route path="" element={<Home/>} />
            <Route path="cart" element={<Cart id={id} />} />
        </Routes>
    </div>
  )
}

export default Reroute;