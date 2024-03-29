import React from "react";
import { aboutDivTexthead, aboutDivTextDis } from "../../../constants";
import BgWall from "../../../images/background/vdo-bg-wall.svg";
import BgBall from "../../../images/background/vdo-bg-ball.svg";

const About = () => {
  return (
    <div className="abt">
      <center className="abt-header">About Gyanodaya</center>
      <div className="container">
        <div className="row abt-dt">
          <div className="abt-dt-vdo col-md-6 col-lg-6 col-sm-12 col-xs-12">
            <div
              className="abt-dt-vdo-vd"
              data-aos="zoom-in-down"
              data-aos-duration="700"
            >
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/acVPq4P0aHU"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
            <div className="abt-dt-vdo-bg-wall">
              <img className="abt-dt-vdo-bg-wall-img" src={BgWall} />
            </div>
            <div className="abt-dt-vdo-bg-ball">
              <img className="abt-dt-vdo-bg-ball-img" src={BgBall} />
            </div>
          </div>
          <div
            className="abt-dt-txt col-md-6 col-lg-6 col-sm-12 col-xs-12"
            data-aos="zoom-in-up"
            data-aos-duration="1000"
          >
            <div>
              <span className="abt-dt-txt-head">{aboutDivTexthead}</span>
              <br />
              <br />
              <span className="abt-dt-txt-dis">{aboutDivTextDis}</span>
            </div>
            <div className="read-more">
              <a href="/aboutUs" className="read-more-btn">
                Read more
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
