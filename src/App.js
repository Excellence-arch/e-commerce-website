import { useState, useEffect } from "react"
import { Route, Routes, useNavigate } from "react-router-dom"
import Cart from "./components/Cart"
import Home from "./components/Home"
import Login from "./components/Login"
import NavBar from "./components/NavBar"
import Reroute from "./components/Reroute"
import Admin from "./components/Admin"
import SignUp from "./components/SignUp"


const App = () => {

  const [allCustomers, setAllCustomers] = useState("");
  const [allGoods, setAllGoods] = useState([]);
  const [cartGoods, setCartGoods] = useState([]);
  const navigate = useNavigate();

  useEffect(()=> {
    localStorage.allCustomers ? setAllCustomers(JSON.parse(localStorage.allCustomers)) : setAllCustomers([]);
    localStorage.allGoods ? setAllGoods(JSON.parse(localStorage.allGoods)) : setAllGoods([]);
    localStorage.cartGoods ? setCartGoods(JSON.parse(localStorage.cartGoods)) : setCartGoods([]);
  }, [allCustomers, allGoods, cartGoods]);

  const addNewCustomer = (newCustomer) => {
    newCustomer.id = allCustomers.length;
    setAllCustomers(()=> {
      localStorage.allCustomers = JSON.stringify([...allCustomers, newCustomer])
      return [...allCustomers, newCustomer]
    })
    setCartGoods(() => {
      localStorage.cartGoods = JSON.stringify([...cartGoods, []]);
      return [...cartGoods, []];
    })
    navigate(`/login`)
  }

  const addNewGood = (newGood) => {
    newGood.id = allGoods.length;
    setAllGoods(()=> {
      localStorage.allGoods = JSON.stringify([...allGoods, newGood]);
      return [...allGoods, newGood];
    })
  }

  const addToCart = (index, userId) => {
    try {
      let goods = cartGoods;
      let found = cartGoods[userId].find((val, _) => val.goodName == allGoods[index].goodName);
      let good = {}
      if(found) {
        good = found;
        good.qty += 1;
        goods[userId][found.id] = good;
      } else {
        good.goodName = allGoods[index].goodName;
        good.price = allGoods[index].price;
        good.qty = 1;
        good.img = allGoods[index].img;
        good.buy = false;
        good.id = goods[userId].length;
        goods[userId] = [...goods[userId], good];
      }
      setAllCustomers(()=> {
        localStorage.cartGoods = JSON.stringify(goods);
        return goods;
      })
  } catch(err) {
    navigate('/login')
  }
  }

  const increaseNum = (index, userId) => {
    let found = allGoods.find((val, _) => val.name === cartGoods[userId][index].name);
    if(Number(found.quantity) >= cartGoods[userId][index].qty) {
      let customer = cartGoods;
      let newQty = customer[userId][index].qty + 1;
      customer[userId][index].qty = newQty;
      setAllCustomers(() => {
        localStorage.allCustomers = JSON.stringify(customer);
        // return customer;
      })
    }
  }

  const decreaseNum = (index, userId) => {
    let found = allGoods.find((val, _) => val.name === cartGoods[userId][index].name);
    if(found.quantity >= cartGoods[userId][index].qty) {
      let customer = cartGoods;
      let newQty = customer[userId][index].qty - 1;
      customer[userId][index].qty = newQty;
      setAllCustomers(() => {
        localStorage.allCustomers = JSON.stringify(customer);
        // return customer;
      })
    }
  }

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home allCustomers={allCustomers} allGoods={allGoods}/>} />
        <Route path="/:id/*" element={<Reroute cartGoods={cartGoods} allCustomers={allCustomers} addToCart={addToCart} allGoods={allGoods} increaseNum={increaseNum} decreaseNum={decreaseNum} />} />
        <Route path="/admin/*" element={<Admin addNewGood={addNewGood} allGoods={allGoods} allCustomers={allCustomers} />} />
        <Route path="/cart" element={<div><NavBar/>  <h2 className="text-center mt-5">Please Log in or sign up</h2> </div> }/>
        <Route path="/login" element={<Login allCustomers={allCustomers} />} />
        <Route path="/sign-up" element={<SignUp allCustomers={allCustomers} addNewCustomer={addNewCustomer}/>} />
      </Routes>

    </div>
  )
}

export default App