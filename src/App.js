import { useState, useEffect } from "react"
import { Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import Login from "./components/Login"
import NavBar from "./components/NavBar"
import Signup from "./components/Signup"


const App = () => {

  const [allCustomers, setAllCustomers] = useState("");

  useEffect(()=> {
    localStorage.allCustomers ? setAllCustomers(JSON.parse(localStorage.allCustomers)) : setAllCustomers([]);
  }, []);

  const addNewCustomer = (newCustomer) => {
    newCustomer.buy = false;
    newCustomer.goods = [];
    newCustomer.id = allCustomers.length;
    setAllCustomers(()=> {
      localStorage.allCustomers = JSON.stringify([...allCustomers, newCustomer])
      return [...allCustomers, newCustomer]
    })
  }

  return (
    <div>
      <NavBar/>

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="sign-up" element={<Signup addNewCustomer={addNewCustomer}/>} />
      </Routes>

    </div>
  )
}

export default App