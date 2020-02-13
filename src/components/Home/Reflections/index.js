import React from "react";
import { ReflectionsText } from "../../../constants";
import RightArrow from "../../../images/icons/right-arrow.svg";

const Reflections = () => {
  const data = [
    {
      image: ""
    }
  ];
  const [active, setActive] = React.useState(0);

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
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-8 col-lg-8 col-sm-12 col-sm-12">
            <div className="rfl-slider">
              <div className="rfl-slider-center">
                <div className="container">
                  <div className="row">
                    <div className="d-none d-lg-block ">
                      <div className="rfl-slider-move-left">
                        <span className="rfl-slider-move-triangle"></span>
                      </div>
                    </div>

                    <div className="rfl-slider-data"></div>

                    <div className="d-none d-lg-block">
                      <div className="rfl-slider-move-right">
                        <span className="rfl-slider-move-triangle"></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reflections;
