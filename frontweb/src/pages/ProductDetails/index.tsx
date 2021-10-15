import { Link } from "react-router-dom";

import { ReactComponent as ArrowIcon } from "assets/images/arrow.svg";
import ProductPrice from "components/ProductPrice";

import "./styles.css";

const ProductDetails = () => {
  return (
    <div className="product-details-container">
      <div className="base-card product-details-card">
        <div className="goback-container">
          <ArrowIcon />
          <Link to="/products">
            <h3>Voltar</h3>
          </Link>
        </div>
        <div className="row">
          <div className="col-xl-6">
            <div className="img-container">
              <img src="https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/2-big.jpg" />
            </div>
            <div className="name-price-container">
              <h1>Computer Desktop</h1>
              <ProductPrice price={2750.0} />
            </div>
          </div>
          <div className="col-xl-6">
            <div className="description-container">
              <h2>Descrição</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
