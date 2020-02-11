import React from "react";
import BgWall from "../../../images/bg-wall-big.svg";
import { ReflectionsText } from "../../../constants";
import RightArrow from "../../../images/right-arrow.svg";

const Reflections = () => {
  return (
    <div className="rfl">
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-lg-4 col-sm-12 col-sm-12">
            <div className="rfl-textbox">
              <div className="rfl-textbox-header">Reflections</div>
              <div className="rfl-textbox-txt">{ReflectionsText}</div>
              <div className="rfl-textbox-reviews">
                <a href="#" className="white-button-btn">
                  See all Reviews
                  <img className="wht-btn-arrow" src={RightArrow} />
                  <div className="transition"></div>
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-8 col-lg-8 col-sm-12 col-sm-12">
            <div className="rfl-slider"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reflections;
