
import Navbar from "./Navbar";
import Pagination from "components/Pagination";

import "./styles.css";

const Admin = () => {
  return (
    <div>
      <div className="row">
        <div className="col-md-3 admin-navbar">
        <h3>Navbar Lateral</h3>
          <Navbar />
        </div>
        <div className="col-md-9 admin-content">
          <h3>Menu itens</h3>
          <Pagination />
        </div>
      </div>
    </div>
  );
};

export default Admin;
