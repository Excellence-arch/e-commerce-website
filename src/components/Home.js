import React from 'react'
import { useParams } from 'react-router-dom';
import LoginNav from './LoginNav';
import NavBar from './NavBar';

const Home = () => {
  let {id} = useParams();
  return (
    <div>
      {id ? <LoginNav/> : <NavBar/>}
      Hello
    </div>
  )
}

export default Home;