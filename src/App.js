import { useEffect, useState } from 'react';
import { Navigate, Route, Routes } from "react-router-dom";
import Admin from "./components/Admin";
import Home from "./components/Home";
import Login from "./components/Login";
import NavBar from "./components/NavBar";
// import Cart from "./components/Cart";
import PageNotFound from "./components/PageNotFound";
import SignUp from "./components/SignUp";
import { useNavigate } from 'react-router-dom';
import UseRoute from './components/UseRoute';


const App = () => {

  const [allCustomers, setallCustomers] = useState([]);
  const [allGoods, setAllGoods] = useState([]);
  const [foundGood, setFoundGood] = useState([]);
  const [onlineUser, setOnlineUser] = useState(null);

  const navigate = useNavigate();

  useEffect(()=> {
    localStorage.allCustomers ? setallCustomers(JSON.parse(localStorage.allCustomers)) : setallCustomers([]);
    localStorage.allGoods ? setAllGoods(JSON.parse(localStorage.allGoods)) : setAllGoods([]);
    localStorage.onlineUser ? setOnlineUser(JSON.parse(localStorage.onlineUser)) : setOnlineUser(null);
  }, []);

  const login = (loginDets) => {
    setOnlineUser(()=> {
      localStorage.onlineUser = JSON.stringify(loginDets.id);
      return loginDets.id;
    });
    navigate(`/${loginDets.id}`);
  }

  const addNewCustomer = (newCustomer) => {
    let customer = newCustomer;
    customer.goods = [];
    customer.id = allCustomers.length;
    setallCustomers( ()=> {
      localStorage.allCustomers = JSON.stringify([...allCustomers, customer]);
      return [...allCustomers, customer]
    })
  }

  const addNewGoods = (newGood) => {
    setAllGoods(() => {
      localStorage.allGoods = JSON.stringify([...allGoods, newGood]);
      return [...allGoods, newGood]
    })
  }

  const founds = (found) => {
    setFoundGood(()=> {
      let foundss = allGoods.filter((val, _) => val.name === found);
      console.log(foundss);
      return foundss;
    })
  }

  const addToCart = (index, userId) => {
    let customize = allCustomers;
    let foundGood = customize[userId].goods.find((val, _) => val.name === allGoods[index].name);
    console.log(foundGood)
    let seeGood;
    if (!foundGood) {
      seeGood = {}
      seeGood.id = customize[userId].goods.length;
      seeGood.name = allGoods[index].name;
      seeGood.price = allGoods[index].price;
      seeGood.image = allGoods[index].image;
      seeGood.qty = 1;
      seeGood.buy = false;
      customize[userId].goods = [...customize[userId].goods, seeGood];
    } else {
      seeGood = foundGood;
      seeGood.qty++;
      customize[userId].goods[foundGood.id] = seeGood;
      console.log(customize[userId].goods[foundGood.id]);
    }
    setallCustomers(() => {
      localStorage.allCustomers = JSON.stringify(customize);
      return customize
    });
    navigate(`/${userId}/cart`);
  }

  const increaseGood = (userId, goodInd) => {
    let realCustomer = allCustomers;
    realCustomer[userId].goods[goodInd].qty += 1;
    console.log(allCustomers)
    setallCustomers(()=> {
      localStorage.allCustomers = JSON.stringify(realCustomer);
      return realCustomer;
    })
  }

  const decreaseGood = (userId, goodInd) => {
    let customer = allCustomers;
    customer[userId].goods[goodInd].qty--;
    setallCustomers(()=> {
      localStorage.allCustomers = JSON.stringify(customer);
      return customer;
    })
  }

  return (
    <>
      <NavBar founds={founds} />
      <Routes>
        <Route path="/" element={<Home addToCart={addToCart} allGoods={allGoods}/>}/>
        {/* <Route path="/:id" element={<Home addToCart={addToCart} allGoods={allGoods}/>}/> */}
        <Route path="/:id/*" element={<UseRoute onlineUser={onlineUser} allCustomers={allCustomers} addToCart={addToCart} increaseGood={increaseGood} decreaseGood={decreaseGood} allGoods={allGoods} />}/>
        <Route path="/admin/*" element={<Admin allGoods={allGoods} addNewGoods={addNewGoods}/>}/>  
        <Route path="/login" element={<Login login={login} allCustomers={allCustomers} />}/>
        <Route path="/sign-up" element={<SignUp allCustomers={allCustomers} addNewCustomer={addNewCustomer} />} />
        <Route path="*" element={<PageNotFound/>}/>
      </Routes>
    </>
  )
}

export default App;