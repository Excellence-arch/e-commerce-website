import { useState, useEffect } from 'react';
import { parsePath, resolvePath } from 'react-router-dom';
// import 'path';

const NewGoods = ({addNewGoods}) => {

    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [quantity, setQuantity] = useState("");
    const [image, setImage] = useState("");


    const handleImage = (e) => {
        let img = `./assets/${e.target.files[0].name}`;
        setImage(img);
        console.log(img);
    }

    const addGood = () => {
        addNewGoods({name, price, quantity, image})
    }

  return (
    <>
        <section className="container">
            <div className="row">
                <div className="text-center container col-6">
                    <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Name of good" className="form-control my-2" />
                    <input value={price} onChange={e => setPrice(e.target.value)} type="text" placeholder="price" className="form-control my-2" />
                    <input value={quantity} onChange={e => setQuantity(e.target.value)} type="text" placeholder="quantity" className="form-control my-2"/>
                    <input type="file" onChange={e => handleImage(e)} />
                    <button className="btn btn-success" onClick={addGood}>Add Good</button>
                </div>
            </div>
        </section>
    </>
  )
}

export default NewGoods;