import Navbar from "./Navbar";
import Pagination from "components/Pagination";

import "./styles.css";
import { Switch, Route } from "react-router";

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
              <h1>User Crud</h1>
            </Route>
          </Switch>
          <Pagination />
        </div>
      </div>
    </div>
  );
};

export default Admin;
