import { Switch, Route } from "react-router";
import Navbar from "./Navbar";
import Users from "./User";
import Pagination from "components/Pagination";

import "./styles.css";

const Admin = () => {
  return (
    <div>
      <div className="row">
        <div className="col-md-3 admin-navbar">
          <Navbar />
        </div>
        <div className="col-md-9 admin-content">
          <h3>Menu itens</h3>
          <Switch>
            <Route path="/admin/products">
              <h1>Product Crud</h1>
            </Route>
            <Route path="/admin/categories">
              <h1>Category Crud</h1>
            </Route>
            <Route path="/admin/users">
              <Users />
            </Route>
          </Switch>
          <div className="row">
            <Pagination />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
