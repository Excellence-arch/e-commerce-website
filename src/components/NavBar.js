import { Link, useNavigate } from 'react-router-dom';

const NavBar = () => {

    const navigate = useNavigate();

  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand">Excellence</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <Link to="/" className="nav-link" aria-current="page">Home</Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/cart" className="nav-link">Cart</Link>
                    </li>
                    {/* <li className="nav-item">
                    <Link to="" className="nav-link" aria-disabled="true">Disabled</Link>
                    </li> */}
                </ul>
                <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="mx-3 btn btn-outline-success" type="submit">Search</button>
                </form>
                <button className="mx-3 btn btn-outline-success" onClick={()=> navigate('/login')} >Login</button>
                <button className="btn btn-outline-success mx-3" onClick={()=> navigate('/sign-up')} >Sign Up</button>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default NavBar;