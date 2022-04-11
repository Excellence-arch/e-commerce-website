import { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup'

const AddGood = ({allGoods, addNewGood}) => {
    const formik = useFormik({
        initialValues: {
            goodName: "",
            price: "",
            quantity: "",
            img: ""
        },
        validationSchema: Yup.object({
            goodName: Yup.string().required("Required"),
            price: Yup.number().required("Required"),
            quantity: Yup.number().required("Required")
        }),
        onSubmit: (values) => {
            values.img = `./assets/${values.img.slice(12)}`;
            addNewGood(values);
            formik.resetForm({values : ""})
        }
    })
  return (
    <div className='container'>
        <table className="table table-striped">
            <thead>
                <tr>
                    <td>Name</td>
                    <td>Price</td>
                    <td>Quantity</td>
                    <td>Image</td>
                </tr>
            </thead>
            <tbody>
                {allGoods.map((val, i) => (
                    <tr key={i}>
                        <td>{val.goodName}</td>
                        <td>{val.price}</td>
                        <td>{val.quantity}</td>
                        <td>{val.img}</td>
                    </tr>
                ))}
                </tbody>
            </table>
                <form onSubmit={formik.handleSubmit}>
            
                    <input 
                    type="text"
                    placeholder='Name'
                    className={formik.errors.goodName && formik.touched.goodName ? "my-2 form-control is-invalid" : 'my-2 form-control'}
                    value={formik.values.goodName}
                    name="goodName"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    />
                    {formik.errors.goodName && formik.touched.goodName ? <div className='text-danger' >{formik.errors.goodName}</div> : null}
                
                    <input 
                    type="text"
                    placeholder='Price'
                    value={formik.values.price}
                    className={formik.errors.price && formik.touched.price ? "my-2 form-control is-invalid" : 'my-2 form-control'}
                    name="price"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    />
                    {formik.errors.price && formik.touched.price ? <div className='text-danger' >{formik.errors.price}</div> : null}
                
                    <input 
                    type="text"
                    placeholder='Quantity'
                    name="quantity"
                    className={formik.errors.quantity && formik.touched.quantity ? "my-2 form-control is-invalid" : 'my-2 form-control'}
                    value={formik.values.quantity}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    />
                    {formik.errors.quantity && formik.touched.quantity ? <div className='text-danger' >{formik.errors.quantity}</div> : null}
                
                    <input 
                    type="file"
                    name="img"
                    value={formik.values.img}
                    onChange={formik.handleChange}
                    />
                    
                    <div className="text-center"> <button type="submit" className='btn btn-success' > Add new good </button> </div>
                </form>
    </div>
  )
}

export default AddGood;