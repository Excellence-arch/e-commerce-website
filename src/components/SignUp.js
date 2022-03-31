import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Signup = ({addNewCustomer}) => {

    const formik = useFormik({
        initialValues: {
            firstname: "",
            lastname: "",
            email: "",
            phone: "",
            password: ""
        },
        // validate : (values) => {
        //     let errors = {};
        //     return errors
        // },
        validationSchema: Yup.object({
            firstname: Yup.string().required("Required"),
            lastname: Yup.string().required("Required"),
            email: Yup.string().required("Required").email("Not an email"),
            phone: Yup.number("").required("Required"),
            password: Yup.string().required("Required")
        }),
        onSubmit : (values) => {
            addNewCustomer(values);
            formik.resetForm({values: ""})
        }
    })
    // console.log(formik)
  return (
    <>
        <section className="container">
            <div className="row mt-5">
                <div className="col-6 container">
                    <form onSubmit={formik.handleSubmit}>
                        <label htmlFor="">Firstname: </label>
                        <input 
                        type="text" 
                        className={(formik.touched.firstname && formik.errors.firstname) ? "my-2 form-control is-invalid" : "my-2 form-control"} 
                        name='firstname'
                        value={formik.values.firstname}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        />
                        {formik.touched.firstname ? <div className="text-danger">{formik.errors.firstname}</div> : null}

                        <label htmlFor="">Lastname: </label>
                        <input 
                        type="text" 
                        className={(formik.touched.lastname && formik.errors.lastname) ? "my-2 form-control is-invalid" : "my-2 form-control"} 
                        name='lastname'
                        value={formik.values.lastname}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        />
                        {formik.touched.lastname ? <div className="text-danger">{formik.errors.lastname}</div> : null}

                        <label htmlFor="">Email: </label>
                        <input 
                        type="text"
                        className={(formik.touched.email && formik.errors.email) ? "my-2 form-control is-invalid" : "my-2 form-control"} 
                        name='email'
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        />
                        {formik.touched.email ? <div className="text-danger">{formik.errors.email}</div> : null}

                        <label htmlFor="">Phone Number: </label>
                        <input 
                        type="text"
                        className={(formik.touched.phone && formik.errors.phone) ? "my-2 form-control is-invalid" : "my-2 form-control"} 
                        name='phone'
                        value={formik.values.phone}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        />
                        {formik.touched.phone ? <div className="text-danger">{formik.errors.phone}</div> : null}

                        <label htmlFor="">Password: </label>
                        <input 
                        type="text"
                        className={(formik.touched.password && formik.errors.password) ? "my-2 form-control is-invalid" : "my-2 form-control"} 
                        name='password'
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        />
                        {formik.touched.password ? <div className="text-danger">{formik.errors.password}</div> : null}

                        <button className="btn btn-success w-100 my-2" type='submit'>Submit</button>
                    </form>
                </div>
            </div>
        </section>
    </>
  )
}

export default Signup;