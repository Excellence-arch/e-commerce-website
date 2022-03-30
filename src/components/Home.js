import { useEffect, useState } from 'react'
import { Navigate, Route, Routes, useNavigate, useParams } from 'react-router-dom';
// import Cart from './Cart';

const Home = ({allGoods, addToCart}) => {

    const navigate = useNavigate();

    const {id} = useParams();

    // useEffect(() => {
    //     console.log(id);
    // }, []);

    const tryAdd = (i) => {
        // console.log("Hi")
        // console.log(id)
        if (!id) {
            // console.log(id);
            navigate('/login');
        } else {
            console.log(id);
            addToCart(i, id);
            // navigate(`/:${id}/cart`);    
        }
    }

  return (
    <>
        <section className="container">
            <div className="row">
                {allGoods.map((val, i) => (
                    <div key={i} className="card col-3 m-3">
                        <img src={val.image} style={{width:'300px', height: '200px', marginLeft: "-15px"}} alt={val.name} className="mt-2 container card-img-top" />
                        <div className="card-body">
                            <p className="card-title">Name: {val.name}</p>
                            <p className="card-text">Quantity Available: {val.quantity}</p>
                            <button className='btn btn-success w-100' onClick={() => tryAdd(i)} >Add to Cart</button>
                        </div>
                    </div>
                ))}
            </div>
        </section>

        {/* <Routes>
            <Route path="cart" element={<Cart/>} />
        </Routes> */}
    </>
  )
}

export default Home;