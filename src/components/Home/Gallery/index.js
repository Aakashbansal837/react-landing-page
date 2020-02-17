import React from "react";
import Img1 from "../../../images/gallery/1.png";
import Img2 from "../../../images/gallery/2.png";
import Img3 from "../../../images/gallery/3.png";
import Img4 from "../../../images/gallery/4.png";
import Img5 from "../../../images/gallery/5.png";
import Img6 from "../../../images/gallery/6.png";
import Img7 from "../../../images/gallery/7.png";

const Gallery = () => {
  const [active, setActive] = React.useState(0);
  const [moveData, setMoveData] = React.useState("glry-sliderBTN-left-1");

  const data = [Img1, Img2, Img3, Img4, Img5, Img6, Img7];
  const data2 = [Img2, Img3, Img4, Img5, Img6, Img7, Img1];

  const changeActive = pos => {
    if (pos >= data.length - 2) {
      setActive(0);
      if (moveData === "glry-sliderBTN-right-1") {
        setMoveData("glry-sliderBTN-right-2");
      } else {
        setMoveData("glry-sliderBTN-right-1");
      }
    } else if (pos <= 0) {
      setActive(data.length - 3);
      if (moveData === "glry-sliderBTN-left-1") {
        setMoveData("glry-sliderBTN-left-2");
      } else {
        setMoveData("glry-sliderBTN-left-1");
      }
    } else {
      if (pos > active) {
        if (moveData === "glry-sliderBTN-right-1") {
          setMoveData("glry-sliderBTN-right-2");
        } else {
          setMoveData("glry-sliderBTN-right-1");
        }
      } else {
        if (moveData === "glry-sliderBTN-left-1") {
          setMoveData("glry-sliderBTN-left-2");
        } else {
          setMoveData("glry-sliderBTN-left-1");
        }
      }

      setActive(pos);
    }
  };
  return (
    <div className="gallery">
      <center className="gallery-header">Gallery</center>
      <div className="container">
        <div className="gallery-main">
          <div className="container">
            <div className="gallery-data">
              <div className="row">
                <div className="col-1">
                  <div className="d-none d-md-block">
                    <div
                      className="gallery-data-moveData-left"
                      onClick={() => changeActive(active - 1)}
                    >
                      <span className="gallery-data-moveData-triangle"></span>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-xs-12 col-md-10 col-lg-10">
                  <div className="gallery-data-center">
                    <div className="container">
                      <div className="row">
                        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4">
                          <div className={moveData}>
                            <div className="gallery-data-slide">
                              <img src={data[active]} />
                            </div>
                          </div>
                        </div>
                        <div className="d-none d-lg-block col-md-6 col-lg-4">
                          <div className={moveData}>
                            <div className="gallery-data-slide">
                              <img src={data[active + 1]} />
                            </div>
                          </div>
                        </div>
                        <div className="d-none d-sm-block col-sm-6 col-md-6 col-lg-4">
                          <div className={moveData}>
                            <div className="gallery-data-slide">
                              <img src={data[active + 2]} />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="d-none d-sm-block col-sm-6 col-md-6 col-lg-4">
                          <div className={moveData}>
                            <div className="gallery-data-slide">
                              <img src={data2[active]} />
                            </div>
                          </div>
                        </div>
                        <div className="d-none d-sm-block col-sm-6 col-md-6 col-lg-4">
                          <div className={moveData}>
                            <div className="gallery-data-slide">
                              <img src={data2[active + 1]} />
                            </div>
                          </div>
                        </div>
                        <div className="d-none d-lg-block col-md-6 col-lg-4">
                          <div className={moveData}>
                            <div className="gallery-data-slide">
                              <img src={data2[active + 2]} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-1">
                  <div className="d-none d-md-block">
                    <div
                      className="gallery-data-moveData-right"
                      onClick={() => changeActive(active + 1)}
                    >
                      <span className="gallery-data-moveData-triangle"></span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-6">
                  <div className="d-sm-block d-md-none ">
                    <div
                      className="rfl-slider-move-left"
                      onClick={() => changeActive(active - 1)}
                    >
                      <span className="rfl-slider-move-triangle"></span>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="d-sm-block d-md-none">
                    <div
                      className="rfl-slider-move-right"
                      onClick={() => changeActive(active + 1)}
                    >
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
  );
};

export default Gallery;
