
import './styles.css';
import ProductImg from "assets/images/product.png";

const ProductCard = () => {
  return (
    <>
      <div className="base-card product-car">
        <div className="card-top-container">
            <img src={ProductImg} alt="nome do produto"/>
        </div>
        <div className="car-bottom-container">
            <h6>Nome do produto</h6>
            <p>1223.45</p>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
