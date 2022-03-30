import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import ListAllUsers from "./ListAllUsers";
import NewGoods from "./NewGoods";
import PageNotFound from "./PageNotFound";

const Admin = ({allGoods, addNewGoods, allCustomers}) => {
    const navigate = useNavigate();

    const nav = () => {
        navigate("/admin/add-goods");
    }
  return (
    <>
        <section className="container">
            <div className="row">
                <div className="col-6 text-center container">
                    <button className="my-2 btn btn-success" onClick={nav}>Add New Goods</button> <br />
                    <button className="my-2 btn btn-warning" >View Users</button>
                </div>
            </div>
        </section>

        <Routes>
            {/* <Route path="/" element={<Navigate to="/admin"/>}/> */}
            <Route path="/add-goods" element={<NewGoods allGoods={allGoods} addNewGoods={addNewGoods}/>}/>
            <Route path="/see-users" element={<ListAllUsers allCustomers={allCustomers}/>}/>
            {/* <Route path="*" element={<PageNotFound/>} /> */}
        </Routes>
    </>
  )
}

export default Admin;