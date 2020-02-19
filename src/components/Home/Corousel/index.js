import React from "react";
import crsl1 from "../../../images/corousel/1.png";
import crsl2 from "../../../images/corousel/2.png";
import crsl3 from "../../../images/corousel/3.png";
import crsl4 from "../../../images/corousel/4.png";

const Corousel = () => {
  const crslHead = [
    "GYANODAYA",
    "GYANODAYA",
    "GAMIFICATION TOOLS",
    "GYANODAYA"
  ];
  const crslText = [
    "Bringing quality education to more than 600 schools of Jharkhand",
    "An exemplary public-private partnership model",
    "Bringing the gamification factor in academics has made education more exciting",
    "Bringing transparency and accountability in education system"
  ];
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
          <center class="carousel-caption">
            <p className="carousel-caption-head">{crslHead[0]}</p>
            <p className="carousel-caption-text">{crslText[0]}</p>
          </center>
        </div>
        <div className="carousel-item">
          <img className="d-flex " src={crsl2} alt="Second slide" />
          <center class="carousel-caption">
            <p className="carousel-caption-head">{crslHead[1]}</p>
            <p className="carousel-caption-text">{crslText[1]}</p>
          </center>
        </div>
        <div className="carousel-item">
          <img className="d-flex " src={crsl3} alt="Third slide" />
          <center class="carousel-caption">
            <p className="carousel-caption-head">{crslHead[2]}</p>
            <p className="carousel-caption-text">{crslText[2]}</p>
          </center>
        </div>
        <div className="carousel-item">
          <img className="d-flex " src={crsl4} alt="fourth slide" />
          <center class="carousel-caption">
            <p className="carousel-caption-head">{crslHead[3]}</p>
            <p className="carousel-caption-text">{crslText[3]}</p>
          </center>
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
