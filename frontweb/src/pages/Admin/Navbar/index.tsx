import { NavLink } from "react-router-dom";
import { hasAnyRoles } from "util/requests";
import "./styles.css";

const Navbar = () => {
  return (
    <nav className="admin-nav-container">
      <ul className="">
        <li>
          <NavLink to="/admin/products" className="admin-nav-item">
            <p>Produtos</p>
          </NavLink>
        </li>
        <li>
          <NavLink to="/admin/categories" className="admin-nav-item">
            <p>Categorias</p>
          </NavLink>
        </li>
        {
          hasAnyRoles(['ROLE_ADMIN']) &&
          <li>
            <NavLink to="/admin/users" className="admin-nav-item">
              <p>Usuarios</p>
            </NavLink>
          </li>
        }
      </ul>
    </nav>
  );
};

export default Navbar;
