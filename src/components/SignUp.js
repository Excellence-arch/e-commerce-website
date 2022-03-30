import { useState } from 'react'
import { Link } from 'react-router-dom';
import { validEmail, validPhone } from '../Regex';

const SignUp = ({addNewCustomer, allCustomers}) => {

    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phoneError, setPhoneError] = useState("form-control");
    const [showpwd, setShowpwd] = useState(false);
    const [emailErr, setEmailErr] = useState("form-control");

    // const phones = / ^([\w]{11})$ /

    const handlePhone = (e) => {
        setPhone(e.target.value);
        if (validPhone.test(e.target.value)) {
            setPhoneError("form-control is-valid");
            // setPhoneError("success");
        } else {
            setPhoneError("form-control is-invalid")
        }
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
        if (validEmail.test(e.target.value)) {
            setEmailErr("form-control is-valid");
        } else {
            setEmailErr("form-control is-invalid");
        }
    }

    const confirmDets = () => {
        if ((emailErr === "form-control is-valid" && phoneError === "form-control is-valid") && (firstname && lastname && phone && email && password)) {
            let found = allCustomers.find((val, i) => val.email === email || phone === val.phone)
            if (!found) {
                addNewCustomer({firstname, lastname, phone, email, password});
                setFirstname("");
                setLastname("");
                setEmail("");
                setPhone("");
                setPassword("");
                setEmailErr("form-control");
                setPhoneError("form-control");
            } else {
                alert("this email of phone number has already been registered")
            }
        } else {
            alert("Please fill in the appropriate details")
        }
    }

  return (
    <>
        <section className="container">
            <div className="row">
                <div className="col-6 container mt-4 text-center">
                    <input type="text" placeholder='Firstname' value={firstname} onChange={e => setFirstname(e.target.value)} className="form-control my-2" />
                    <input type="text" placeholder='Lastname' value={lastname} onChange={e => setLastname(e.target.value)} className="form-control my-2" />
                    <input type="text" placeholder='Phone Number' value={phone} onChange={e => handlePhone(e)}  className={`${phoneError} my-2`} />
                    <input type="text" placeholder='Email' className={`${emailErr} my-2`} value={email} onChange={e => handleEmail(e)} />
                    <input type={showpwd ? `text` : `password`} value={password} placeholder='Password' onChange={e => setPassword(e.target.value)} className="form-control my-2" />
                    <input type="checkbox" onChange={() => setShowpwd(!showpwd)} /> <span>Show Password</span> <br />
                    <button className="btn btn-success" onClick={confirmDets}>Submit</button> <br />
                    <p>Already have an account? <Link to="/login">Login</Link> </p>
                </div>
            </div>
        </section>
    </>
  )
}

export default SignUp;