import axios, { AxiosRequestConfig } from "axios";
import Pagination from "components/Pagination";
import ProductCard from "components/ProductCard";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Product } from "types/product";
import { SpringPage } from "types/vendor/spring";
import { BASE_URL } from "util/requests";
import CardLoader from "./CardLoader";

import "./styles.css";

const Catalog = () => {
  const [page, setPage] = useState<SpringPage<Product>>();

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    //parametros da url
    const params: AxiosRequestConfig = {
      method: "GET",
      baseURL: BASE_URL,
      url: '/products',
      params: {
        page: 0,
        size: 12,
      },
    };

    //carregamento de loading
    setIsLoading(true);

    axios(params)
      .then((response) => {
        setPage(response.data);
      })
      .finally(() => {
        //encerramento de loading
        setIsLoading(false);
      });

  }, []);

  return (
    <div className=" container my-4 catalog-container">
      <div className="row catalog-title-container">
        <h1>Catálogo de Produtos</h1>
      </div>

      <div className="row">
        {( isLoading ? <div> Aguarde carregando lista de produtos... <br /><CardLoader /> <br /></div> :
          page?.content.map((product) => {

          return (
            <div className="col-sm-6 col-lg-4 col-xl-3" key={product.id}>
              <Link to="/products/2">
                <ProductCard product={product} />
              </Link>
            </div>
          );
        }))}
      </div>

      <div className="row">
      {( isLoading ? "" : <Pagination />)}
      </div>
    </div>
  );
};

export default Catalog;
