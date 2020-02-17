import React from "react";
import crsl1 from "../../../images/corousel/crsl1.png";
import crsl2 from "../../../images/corousel/crsl2.png";
import crsl3 from "../../../images/corousel/crsl3.png";
import crsl4 from "../../../images/corousel/crsl4.png";

const Corousel = () => {
  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide"
      data-ride="carousel"
    >
      <ol className="carousel-indicators">
        <li
          data-target="#carouselExampleIndicators"
          data-slide-to="0"
          className="active"
        ></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img className="d-flex " src={crsl1} alt="First slide" />
        </div>
        <div className="carousel-item">
          <img className="d-flex " src={crsl2} alt="Second slide" />
        </div>
        <div className="carousel-item">
          <img className="d-flex " src={crsl3} alt="Third slide" />
        </div>
        <div className="carousel-item">
          <img className="d-flex " src={crsl4} alt="fourth slide" />
        </div>
      </div>
      <a
        className="carousel-control-prev"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
};

export default Corousel;
