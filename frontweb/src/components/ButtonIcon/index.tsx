import "./styles.css";

import { ReactComponent as ArrowIcon } from "assets/images/arrow.svg";

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
        <ArrowIcon />
      </div>
    </div>
  );
};

export default ButtonIcon;
