import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const Carts = ({allCustomers, goodIncrease}) => {

    let {id} = useParams();
    const navigate = useNavigate();

    useEffect(()=> {
        // console.log(id);
        if(allCustomers.length == 0 || id > allCustomers.length) {
            navigate(`/${id}`)
        } else {
            navigate(`/${id}/cart`);
        }
    }, []);

    const increase = (i) => {

    }

    const decrease = () => {
        
    }

  return (
    <div>
        <section className="container">
            <div className="row">
                <div className="col-6 text-center container">
                    {allCustomers[id].goods.map((val, i) => (
                        <div className="card mt-2" key={i}>
                            <img src={val.image} alt={val.name} className="card-img-top" />
                            <div className="card-body">
                                <p className="card-title">{val.name}</p>
                                <p className="card-text"> <button className='btn btn-warning' onClick={() => decrease(i)} >{"<"}</button> {val.qty} <button className='btn btn-warning' onClick={() => increase(i)} >{">"}</button> </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    </div>
  )
}

export default Carts;