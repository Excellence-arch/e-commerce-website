import { useState } from 'react'
import { Link } from 'react-router-dom';

const NavBar = ({founds}) => {

    const [name, setName] = useState();

    const search = (e) => {
        e.preventDefault();
        founds(name);
    }
  return (
    <>
        <nav className="navbar navbar-expand-lg navbar-success bg-success">
            <div className="container-fluid">
                <Link className="navbar-brand text-white" to="/">Excellence</Link>
                <ul className="navbar-nav">
                    <li className="nav-item mx-3">
                    <Link className="nav-link text-white active" aria-current="page" to="/">Home</Link>
                    </li>
                    <li className="nav-item mx-3">
                    <Link className="text-white nav-link float-left" to="/login">Login</Link>
                    </li>
                    <li className="nav-item mx-3">
                    <Link className="nav-link text-white" to="/sign-up">Sign Up</Link>
                    </li>
                    <li className="nav-item mx-3">
                        <Link to="/admin" className="nav-link text-white">Admin</Link>
                    </li>
                    <li className='nav-item mx-3'>
                        <Link to="/cart" className="nav-link text-white">Cart</Link>
                    </li>
                    <form className="d-flex mx-3">
                        <input className="form-control me-2" type="search" value={name} onChange={e => setName(e.target.value)} placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-warning" onClick={e => search(e)}>Search</button>
                    </form>
                </ul>
                </div>
            </nav>
    </>
  )
}

export default NavBar;