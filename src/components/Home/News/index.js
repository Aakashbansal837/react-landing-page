import React from "react";
import News1 from "../../../images/news/news1.svg";
import News2 from "../../../images/news/news2.svg";
import News3 from "../../../images/news/news3.svg";
import News4 from "../../../images/news/news4.svg";
import News5 from "../../../images/news/news5.svg";

const News = () => {
  return (
    <div className="news">
      <center className="news-header">Gyanodaya in News</center>

      <div className="news-main">
        <div className="container">
          <div className="row">
            <div className="col-lg-1 col-md-1 col-sm-4 col-xs-4"></div>
            <div className="col-lg-1 col-md-1 col-sm-4 col-xs-4">
              <div className="news-main-img">
                <img src={News1} className="news-main-img-1" alt="news img" />
              </div>
            </div>
            <div className="col-lg-2 col-md-2 col-sm-8 col-xs-8">
              <div className="news-main-img">
                <img src={News2} className="news-main-img-2" alt="news img" />
              </div>
            </div>
            <div className="col-lg-2 col-md-2 col-sm-6 col-xs-6">
              <div className="news-main-img">
                <img src={News3} className="news-main-img-3" alt="news img" />
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6">
              <div className="news-main-img">
                <img src={News4} className="news-main-img-4" alt="news img" />
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6">
              <div className="news-main-img">
                <img src={News5} className="news-main-img-5" alt="news img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
