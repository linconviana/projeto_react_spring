import { ReactComponent as MainImage } from "assets/images/main-image.svg";
import ButtonIcon from "../../components/ButtonIcon";

import "./styles.css";
import { Link } from "react-router-dom";
import { isAuthenticated } from "util/requests";

const Home = () => {
  return (
    <div className="home-container">
      <p>{isAuthenticated() ? 'Success' : 'Error'}</p>
      <div className="base-card home-card">
        <div className="home-content-container">
          <div>
            <h1>Conheça o melhor catalogo de produtos</h1>
            <p>
              Ajudaremos você a encontrar os melhores produtos disponiveis no
              mercado
            </p>
          </div>
          <div>
            <Link to="/products">
              <ButtonIcon text="Inicie agora a sua busca"/>
            </Link>
          </div>
        </div>
        <div className="home-image-container">
          <MainImage />
        </div>
      </div>
    </div>
  );
};

export default Home;
