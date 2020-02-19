import React from "react";
import {
  StrideInfo,
  StrideCard1head,
  StrideCard1txt,
  StrideCard2head,
  StrideCard2txt,
  StrideCard3head,
  StrideCard3txt,
  StrideReadMore
} from "../../../constants";
import RightArrow from "../../../images/icons/right-arrow.svg";

const Stride = () => {
  return (
    <div className="stride">
      <center className="stride-header">Gyanodaya Stride</center>
      <div className="container">
        <div className="row">
          <center className="stride-txt">
            <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
              <p className="stride-info">{StrideInfo}</p>
            </div>
          </center>
        </div>
      </div>

      <div className="container stride-main">
        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
            <div
              className="container"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className="stride-card">
                <div className="stride-card-img-1"></div>
                <div className="stride-card-dt">
                  <p className="stride-card-dt-head">{StrideCard1head}</p>
                  <p className="stride-card-dt-txt">{StrideCard1txt}</p>
                  <a
                    target="_blank"
                    href="https://beats.eckovation.com/launch-of-gyanodaya-coffee-table-book/"
                    className="stride-card-dt-rm"
                  >
                    {StrideReadMore} <img src={RightArrow} />
                  </a>
                </div>
              </div>
              <div className="stride-card-bg"></div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
            <div
              className="container"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className="stride-card">
                <div className="stride-card-img-2"></div>
                <div className="stride-card-dt">
                  <p className="stride-card-dt-head">{StrideCard2head}</p>
                  <p className="stride-card-dt-txt">{StrideCard2txt}</p>
                  <a
                    target="_blank"
                    href="https://beats.eckovation.com/enabling-the-rural-youth-to-grasp-the-perch/"
                    className="stride-card-dt-rm"
                  >
                    {StrideReadMore} <img src={RightArrow} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
            <div
              className="container"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className="stride-card">
                <div className="stride-card-img-3"></div>
                <div className="stride-card-dt">
                  <p className="stride-card-dt-head">{StrideCard3head}</p>
                  <p className="stride-card-dt-txt">{StrideCard3txt}</p>
                  <a
                    target="_blank"
                    href="https://beats.eckovation.com/gyanodaya-new-hopes-for-kasturba-gandhi-balika-vidyalaya-godda/"
                    className="stride-card-dt-rm"
                  >
                    {StrideReadMore} <img src={RightArrow} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <center className="stride-rm-btn">
          <div className="read-more">
            <a href="#" className="read-more-btn">
              Read more
              <div className="transition"></div>
            </a>
          </div>
        </center>
      </div>
    </div>
  );
};
export default Stride;
