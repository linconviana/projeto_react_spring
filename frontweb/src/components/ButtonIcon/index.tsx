import "./styles.css";

//import { ArrowIcon } from "assets/images/arrow.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight} from '@fortawesome/free-solid-svg-icons';


/*Passar texto do botão via props */
type Props = {
  text: string;
}

const ButtonIcon = ({text} : Props) => {
  return (
    <div className="btn-container">
      <button type="submit" className="btn btn-primary btn-icon">
        <h6>{text}</h6>
      </button>
      <div className="btn-icon-container">
        <FontAwesomeIcon icon={faAngleRight} className="fas fa-angle-rigth"></FontAwesomeIcon>
      </div>
    </div>
  );
};

export default ButtonIcon;
