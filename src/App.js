import { useState, useEffect } from "react"
import { Route, Routes, useNavigate } from "react-router-dom"
import Cart from "./components/Cart"
import Home from "./components/Home"
import Login from "./components/Login"
import NavBar from "./components/NavBar"
import Reroute from "./components/Reroute"
import Admin from "./components/Admin"
import Signup from "./components/Signup"


const App = () => {

  const [allCustomers, setAllCustomers] = useState("");
  const [allGoods, setAllGoods] = useState([]);
  const navigate = useNavigate();

  useEffect(()=> {
    localStorage.allCustomers ? setAllCustomers(JSON.parse(localStorage.allCustomers)) : setAllCustomers([]);
    localStorage.allGoods ? setAllGoods(JSON.parse(localStorage.allGoods)) : setAllGoods([]);
  }, []);

  const addNewCustomer = (newCustomer) => {
    newCustomer.buy = false;
    newCustomer.goods = [];
    newCustomer.id = allCustomers.length;
    setAllCustomers(()=> {
      localStorage.allCustomers = JSON.stringify([...allCustomers, newCustomer])
      return [...allCustomers, newCustomer]
    })
    navigate(`/login`)
  }

  const addNewGood = (newGood) => {
    newGood.id = allGoods.length;
    setAllGoods(()=> {
      localStorage.allGoods = JSON.stringify([...allGoods, newGood]);
      return allGoods;
    })
  }

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/:id/*" element={<Reroute allGoods={allGoods} />} />
        <Route path="/admin/*" element={<Admin addNewGood={addNewGood} allGoods={allGoods} allCustomers={allCustomers} />} />
        <Route path="/cart" element={<div><NavBar/>  <h2 className="text-center mt-5">Please Log in or sign up</h2> </div> }/>
        <Route path="/login" element={<Login allCustomers={allCustomers} />} />
        <Route path="/sign-up" element={<Signup allCustomers={allCustomers} addNewCustomer={addNewCustomer}/>} />
      </Routes>

    </div>
  )
}

export default App