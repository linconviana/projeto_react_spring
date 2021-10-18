import "./styles.css";

import { ReactComponent as ArrowIcon } from "assets/images/arrow.svg";

const Pagination = () => {
  return (
    <div className="pagination-container">
      <ArrowIcon className="arrow-left"/>
      <div className="pagination-item active">1</div>
      <div className="pagination-item">2</div>
      <div className="pagination-item">3</div>
      <div className="pagination-item">4</div>
      <div className="pagination-item">5</div>
      <ArrowIcon className="arrow-rigth active"/>
    </div>
  );
};

export default Pagination;
