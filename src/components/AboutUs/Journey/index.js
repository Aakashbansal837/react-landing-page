import React from "react";
import Img from "../../../images/AboutUS/4.svg";

const Journey = () => {
  return (
    <div className="journey">
      <center className="journey-header">Our Journey</center>
      <div className="container">
        <div className="journey-data">
          <div className="row">
            <div className="col-12">
              <img className="d-block w-100" src={Img} alt="journey image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Journey;
