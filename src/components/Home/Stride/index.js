import React from "react";
import "../../../styles/index.scss";
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
import Card1 from "../../../images/stride-card1.png";
import Card2 from "../../../images/stride-card2.png";
import Card3 from "../../../images/stride-card3.jpg";
import RightArrow from "../../../images/right-arrow.svg";
import Wall from "../../../images/vdo-bg-wall.svg";

const Stride = () => {
  const StrideCards = [
    {
      card: Card1,
      head: StrideCard1head,
      txt: StrideCard1txt,
      rm: StrideReadMore
    },
    {
      card: Card2,
      head: StrideCard2head,
      txt: StrideCard2txt,
      rm: StrideReadMore
    },
    {
      card: Card3,
      head: StrideCard3head,
      txt: StrideCard3txt,
      rm: StrideReadMore
    }
  ];
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
          {StrideCards.map((card, index) => {
            return (
              <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                <div
                  className="container"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <div className="stride-card">
                    <img
                      className="stride-card-img"
                      src={card.card}
                      alt="stride card 1"
                    />
                    <div className="stride-card-dt">
                      <p className="stride-card-dt-head">{card.head}</p>
                      <p className="stride-card-dt-txt">{card.txt}</p>
                      <a className="stride-card-dt-rm">
                        {card.rm} <img src={RightArrow} />
                      </a>
                    </div>
                  </div>
                  <div
                    style={{ visibility: index == 0 ? "visible" : "hidden" }}
                  >
                    <div className="stride-card-bg">
                      <img src={Wall} />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
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
