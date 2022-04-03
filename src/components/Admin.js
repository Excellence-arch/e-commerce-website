import React from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom';
import AddGood from './AddGood';
import NavBar from './NavBar';

const Admin = ({allGoods, addNewGood}) => {
    const navigate = useNavigate();

    const handleNav = () => {
      navigate("/admin/add-good")
    }
  return (
    <div>
        <NavBar/>
        <button className="btn btn-success" onClick={handleNav} >View all goods</button>
        <Routes>
          <Route path="add-good" element={<AddGood addNewGood={addNewGood} allGoods={allGoods} />} />
        </Routes>
    </div>
  )
}

export default Admin;