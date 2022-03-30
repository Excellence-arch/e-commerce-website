import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const Carts = ({allCustomers}) => {

    let {id} = useParams();
    const navigate = useNavigate();

    useEffect(()=> {
        console.log(id);
        if(allCustomers.length == 0 || id > allCustomers.length) {
            navigate(`/${id}`)
        } else {
            navigate(`/${id}/cart`);
        }
    })

  return (
    <div>Carts</div>
  )
}

export default Carts;