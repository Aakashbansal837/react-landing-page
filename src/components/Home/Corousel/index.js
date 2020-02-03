import React from "react";
import "../../../styles/index.scss";
import crsl1 from "../../../images/crsl1.png";
import crsl2 from "../../../images/crsl2.jpg";
import crsl3 from "../../../images/crsl3.jpg";
import crsl4 from "../../../images/crsl4.png";

const Corousel = () => {
  return (
    <div className="carousel">
      <ul className="slides">
        <input type="radio" name="radio-buttons" id="img-1" />
        <li className="slide-container">
          <div className="slide-image">
            <img className="carousel-img" src={crsl1} />
          </div>
          <div className="carousel-controls">
            <label htmlFor="img-4" className="prev-slide">
              <span>&lsaquo;</span>
            </label>
            <label htmlFor="img-2" className="next-slide">
              <span>&rsaquo;</span>
            </label>
          </div>
        </li>
        <input type="radio" name="radio-buttons" id="img-2" checked />
        <li className="slide-container">
          <div className="slide-image">
            <img className="carousel-img" src={crsl2} />
          </div>
          <div className="carousel-controls">
            <label htmlFor="img-1" className="prev-slide">
              <span>&lsaquo;</span>
            </label>
            <label htmlFor="img-3" className="next-slide">
              <span>&rsaquo;</span>
            </label>
          </div>
        </li>
        <input type="radio" name="radio-buttons" id="img-3" checked />
        <li className="slide-container">
          <div className="slide-image">
            <img className="carousel-img" src={crsl3} />
          </div>
          <div className="carousel-controls">
            <label htmlFor="img-2" className="prev-slide">
              <span>&lsaquo;</span>
            </label>
            <label htmlFor="img-4" className="next-slide">
              <span>&rsaquo;</span>
            </label>
          </div>
        </li>
        <input type="radio" name="radio-buttons" id="img-4" checked />
        <li className="slide-container">
          <div className="slide-image">
            <img className="carousel-img" src={crsl4} />
          </div>
          <div className="carousel-controls">
            <label htmlFor="img-3" className="prev-slide">
              <span>&lsaquo;</span>
            </label>
            <label htmlFor="img-1" className="next-slide">
              <span>&rsaquo;</span>
            </label>
          </div>
        </li>
        <div className="carousel-dots">
          <label
            htmlFor="img-1"
            className="carousel-dot"
            id="img-dot-1"
          ></label>
          <label
            htmlFor="img-2"
            className="carousel-dot"
            id="img-dot-2"
          ></label>
          <label
            htmlFor="img-3"
            className="carousel-dot"
            id="img-dot-3"
          ></label>
          <label
            htmlFor="img-4"
            className="carousel-dot"
            id="img-dot-4"
          ></label>
        </div>
      </ul>
    </div>
  );
};

export default Corousel;
