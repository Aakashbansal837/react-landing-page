import React from "react";
import MainImg from "../../../images/AboutUS/1.jpg";

const Data = () => {
  return (
    <div className="abs">
      <div className="abs-main">
        <img className="abs-main-img" src={MainImg} alt="image" />
      </div>
      <div className="abs-upper">
        <div className="container">
          <div className="row">
            <div className="abs-video"></div>
          </div>
        </div>
      </div>
      <div className="abs-bg"></div>
    </div>
  );
};

export default Data;
