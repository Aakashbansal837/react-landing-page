import React from "react";
import Img1 from "../../../images/gallery/1.png";
import Img2 from "../../../images/gallery/2.png";
import Img3 from "../../../images/gallery/3.png";
import Img4 from "../../../images/gallery/4.png";
import Img5 from "../../../images/gallery/5.png";
import Img6 from "../../../images/gallery/6.png";
import Img7 from "../../../images/gallery/7.png";
import Img8 from "../../../images/gallery/8.png";
import Img9 from "../../../images/gallery/9.png";
import Img10 from "../../../images/gallery/10.png";
import Img11 from "../../../images/gallery/11.png";

const Gallery = () => {
  const [active, setActive] = React.useState(0);
  const [moveData, setMoveData] = React.useState("glry-sliderBTN-right-1");
  const [left, setLeft] = React.useState("");
  const [right, setRight] = React.useState("");

  const data = [
    Img1,
    Img2,
    Img3,
    Img4,
    Img5,
    Img6,
    Img7,
    Img8,
    Img9,
    Img10,
    Img11
  ];
  const data2 = [
    Img11,
    Img10,
    Img9,
    Img8,
    Img7,
    Img6,
    Img5,
    Img4,
    Img3,
    Img2,
    Img1
  ];

  const changeActive = pos => {
    // moving right (end point)
    if (pos >= data.length - 2) {
      setActive(0);
      if (moveData === "glry-sliderBTN-right-1") {
        setMoveData("glry-sliderBTN-right-2");
      } else {
        setMoveData("glry-sliderBTN-right-1");
      }
    }
    //moving left (end point)
    else if (pos <= 0) {
      setActive(data.length - 3);
      if (moveData === "glry-sliderBTN-left-1") {
        setMoveData("glry-sliderBTN-left-2");
      } else {
        setMoveData("glry-sliderBTN-left-1");
      }
    } else {
      //moving right (center)

      if (pos > active) {
        if (moveData === "glry-sliderBTN-right-1") {
          setMoveData("glry-sliderBTN-right-2");
        } else {
          setMoveData("glry-sliderBTN-right-1");
        }
      }
      // moving left center
      else {
        if (moveData === "glry-sliderBTN-left-1") {
          setMoveData("glry-sliderBTN-left-2");
        } else {
          setMoveData("glry-sliderBTN-left-1");
        }
      }

      setActive(pos);
    }
  };

  const LeftButtonClick = () => {
    if (left == "") {
      setLeft("glry-sliderBTN-fade-1");
    }
    if (left == "glry-sliderBTN-fade-2") {
      setLeft("glry-sliderBTN-fade-1");
    } else if (left == "glry-sliderBTN-fade-1") {
      setLeft("glry-sliderBTN-fade-2");
    }

    setTimeout(() => {
      setLeft("");
      setRight("");
      changeActive(active - 1);
    }, 500);
  };

  const RightButtonClick = () => {
    if (right == "") {
      setRight("glry-sliderBTN-fade-1");
    }
    if (right == "glry-sliderBTN-fade-2") {
      setRight("glry-sliderBTN-fade-1");
    } else if (right == "glry-sliderBTN-fade-1") {
      setRight("glry-sliderBTN-fade-2");
    }
    setTimeout(() => {
      setLeft("");
      setRight("");
      changeActive(active + 1);
    }, 500);
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
                      onClick={() => LeftButtonClick()}
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
                          <div className={moveData + " " + right}>
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
                          <div className={moveData + " " + left}>
                            <div className="gallery-data-slide">
                              <img src={data[active + 2]} />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="d-none d-sm-block col-sm-6 col-md-6 col-lg-4">
                          <div className={moveData + " " + right}>
                            <div className="gallery-data-slide">
                              <img src={data2[active]} />
                            </div>
                          </div>
                        </div>
                        <div className="d-none d-lg-block col-md-6 col-lg-4">
                          <div className={moveData}>
                            <div className="gallery-data-slide">
                              <img src={data2[active + 1]} />
                            </div>
                          </div>
                        </div>
                        <div className="d-none d-sm-block col-sm-6  col-md-6 col-lg-4">
                          <div className={moveData + " " + left}>
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
                      onClick={() => RightButtonClick()}
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
