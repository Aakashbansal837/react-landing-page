import React from "react";
import {
  AboutUsAboutText,
  aboutDivTexthead,
  AboutUsDiscText
} from "../../../constants";
import LeftImg from "../../../images/AboutUS/2.jpg";
import BottomImg from "../../../images/AboutUS/3.svg";

const About = () => {
  return (
    <div className="abus-abt">
      <center className="abus-header">About Gyanodaya</center>
      <div className="container abus-container">
        <div className="abus-main">
          <div className="row">
            <div className="col-sm-12 col-xs-12 col-md-6 col-lg-6">
              <div className="abus-main-data">{AboutUsAboutText}</div>
              <div className="abus-main-img">
                <img className="d-block w-100" src={LeftImg} />
              </div>
            </div>
            <div className="col-sm-12 col-xs-12 col-md-6 col-lg-6">
              <div className="abus-right-head">{aboutDivTexthead}</div>
              <div className="abus-right-data">{AboutUsDiscText}</div>
            </div>
            <div className="col-12">
              <div className="abus-bottom">
                <img
                  className="d-block w-100"
                  src={BottomImg}
                  alt="about img"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
