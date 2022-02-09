import { Switch } from "react-router";
import Navbar from "./Navbar";
import Users from "./User";
import Pagination from "components/Pagination";

import "./styles.css";
import PrivateRoute from "components/PrivateRoute";

/// :: Mudou de <Route path="/admin/products"> para <PrivateRoute path="/admin/products"> para testar a rota autenticada
/// :: <Route path="/admin/products">
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
            <PrivateRoute path="/admin/products">
              <h1>Product Crud</h1>
            </PrivateRoute>
            <PrivateRoute path="/admin/categories">
              <h1>Category Crud</h1>
            </PrivateRoute>
            <PrivateRoute path="/admin/users">
              <Users />
            </PrivateRoute>
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
