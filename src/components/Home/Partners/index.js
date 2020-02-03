import React from "react";
import "../../../styles/index.scss";
import { ReactComponent as Card1 } from "../../../images/card1.svg";
import { ReactComponent as Card2 } from "../../../images/card2.svg";
import Card3 from "../../../images/card3.svg";
// import { ReactComponent as Card3 } from '../../../images/card3.svg';
import { ReactComponent as Card4 } from "../../../images/card4.svg";

const Partners = () => {
  return (
    <div className="partner-div">
      <center className="partner-div-header">Gyanodaya Partners</center>
      <center>
        <div className="container">
          <div className="row partner-div-stack">
            <div
              className="mt-5 col-lg-3 col-md-6 col-sm-6 col-xs-12"
              data-aos="zoom-in-up"
              data-aos-duration="700"
            >
              <div className="partner-div-stack-card">
                <Card1 className="partner-div-stack-card-1" />
              </div>
            </div>
            <div
              className="mt-5 col-lg-3 col-md-6 col-sm-6 col-xs-12"
              data-aos-duration="700"
              data-aos="zoom-in-up"
            >
              <div className="partner-div-stack-card">
                <Card2 className="partner-div-stack-card-2" />
              </div>
            </div>
            <div
              className=" mt-5 col-lg-3 col-md-6 col-sm-6 col-xs-12"
              data-aos-duration="700"
              data-aos="zoom-in-up"
            >
              <div className="partner-div-stack-card">
                <img
                  src={Card3}
                  className="partner-div-stack-card-3"
                  alt="partner image"
                />
              </div>
            </div>
            <div
              className="mt-5 col-lg-3 col-md-6 col-sm-6 col-xs-12"
              data-aos-duration="700"
              data-aos="zoom-in-up"
            >
              <div className="partner-div-stack-card">
                <Card4 className="partner-div-stack-card-4" />
              </div>
            </div>
          </div>
        </div>
      </center>
    </div>
  );
};

export default Partners;
