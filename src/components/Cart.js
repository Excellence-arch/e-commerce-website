import LoginNav from "./LoginNav";
import NavBar from "./NavBar";

const Cart = ({id}) => {
  return (
    <div>
        {id ? <LoginNav/> : <NavBar/>}
    </div>
  )
}

export default Cart;