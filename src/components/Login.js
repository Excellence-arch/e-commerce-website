import { useState } from 'react'
import { Link } from 'react-router-dom';
import { validEmail } from '../Regex';

const Login = ({allCustomers, login}) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailErr, setEmailErr] = useState("");


    const handleEmail = (e) => {
        setEmail(e.target.value);
        if(validEmail.test(e.target.value)) {
            setEmailErr("is-valid");
        } else {
            setEmailErr("is-invalid");
        }
    }

    const confirmDets = () => {
        let found = allCustomers.find((val, _) => val.email == email && val.password == password)
        if(found) {
            login(found);
        } else {
            alert("Invalid login details");
        }
        setEmail("");
        setPassword("");
    }

  return (
    <>
        <section className="container">
            <div className="row">
                <div className={`col-6 container text-center`}>
                    <input placeholder='Email' type="text" value={email} onChange={e => handleEmail(e)} className={`form-control ${emailErr} my-2`} />
                    <input placeholder='Password' value={password} onChange={e => setPassword(e.target.value)} type="text" className="form-control my-2" />
                    <button className="btn btn-success" onClick={confirmDets}>Login</button>
                    <br />
                    <p>Don't have an account? <Link to="/sign-up">Sign up</Link> </p>
                </div>
            </div>
        </section>
    </>
  )
}

export default Login;