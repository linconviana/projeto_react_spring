
import Navbar from "components/Navbar";
import ProductCard from "components/ProductCard";
import './styles.css';

const Catalog = () => {
  return (
    <>
      <Navbar />
      <div className=" container my-4">
        <h1>Tela Catalog</h1>
        <ProductCard />
      </div>
    </>
  );
};

export default Catalog;
