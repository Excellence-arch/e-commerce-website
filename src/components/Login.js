import NavBar from './NavBar';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';

const Login = ({allCustomers}) => {

  const navigate = useNavigate();

  const [id, setId] = useState("");

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate: (values) => {
      let errors = {};
      let foundEmail = allCustomers.find((val, _) => val.email === values.email);
      let foundPassword = allCustomers.find((val, _) => val.password === values.password);
      if (!foundEmail) {
        errors.email = "Email is not registered"
      }
      if(!foundPassword) {
        errors.password = "Incorrect password"
      }
      if(foundEmail && foundPassword) {
        //   console.log(foundEmail)
        setId(foundEmail.id);
      }
      return errors;
    },
    validationSchema : Yup.object({
      email: Yup.string().required("Required").email("Not an Email"),
      password: Yup.string().required("Required")
    }),
    onSubmit: (values) => {
      navigate(`/${id}`)
    }
  })
  return (
    <div>
      <NavBar/>
      <div className="col-6 container">
        <form onSubmit={formik.handleSubmit}>
          <label htmlFor="" className='mt-5'>Email:</label>
          <input 
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          name="email"
          value={formik.values.email}
          className={formik.touched.email && formik.errors.email ? "my-2 form-control is-invalid" : "my-2 form-control"}
          />
          {formik.touched.email ? <div className="text-danger">{formik.errors.email}</div> : null}

          <label htmlFor="">Password: </label>
          <input 
          type="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          name="password"
          value={formik.values.password}
          className={formik.touched.password && formik.errors.password ? "my-2 form-control is-invalid" : "my-2 form-control"}
          />
          {formik.touched.password ? <div className="text-danger">{formik.errors.password}</div> : null}

          <button type="submit" className="btn btn-success w-100 my-2" >Login</button>
          <div className="text-center my-2">Don't have an account? <span> <Link to="/sign-up">Sign Up</Link> </span></div>
        </form>
      </div>
    </div>
  )
}

export default Login