import React from "react";
import MainImg from "../../../images/AboutUS/1.jpg";

const Data = () => {
  return (
    <div className="abs">
      <div className="abs-main">
        {/* <img className="abs-main-img" src={MainImg} alt="image" /> */}
      </div>
      <div className="abs-upper">
        <div className="abs-upper-inner">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/acVPq4P0aHU"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <div className="abs-bg"></div>
    </div>
  );
};

export default Data;
