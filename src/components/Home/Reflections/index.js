import React from "react";
import { ReflectionsText } from "../../../constants";
import RightArrow from "../../../images/icons/right-arrow.svg";
import image1 from "../../../images/reflections/1.png";
import image2 from "../../../images/reflections/2.png";
import image3 from "../../../images/reflections/3.png";

const Reflections = () => {
  const data = [
    {
      image: image1,
      name: "Mrs. Kiran Kumari Pasi",
      des: "Deputy Commissioner, Godda, Jharkhand",
      text:
        "With the help of Eckovation, we started Gyanodaya in 50 High Schools which resulted in tremendous growth in attendance and learning outcome and we are expanding in 600+ schools in district."
    },
    {
      image: image2,
      name: "Lion king",
      des: "King of Forests",
      text:
        "As a cub, Simba is forced to leave the Pride Lands after his father Mufasa is murdered by his wicked uncle, Scar. Years later, he returns as a young lion to reclaim his throne"
    },
    {
      image: image3,
      name: "Mr. Owl",
      des: "Night Watcher",
      text:
        "Owls are birds from the order Strigiformes, which includes about 200 species of mostly solitary and nocturnal birds of prey typified by an upright stance, a large, broad head, binocular vision, binaural hearing, sharp talons, and feathers adapted for silent flight."
    }
  ];
  const [active, setActive] = React.useState(0);

  const changeActive = pos => {
    if (pos >= data.length) {
      setActive(0);
    } else if (pos < 0) {
      setActive(data.length - 1);
    } else {
      setActive(pos);
    }
  };

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
                <div className="row">
                  <div className="d-none d-lg-block ">
                    <div
                      className="rfl-slider-move-left"
                      onClick={() => changeActive(active - 1)}
                    >
                      <span className="rfl-slider-move-triangle"></span>
                    </div>
                  </div>

                  {data.map((dt, index) => {
                    return (
                      <div
                        style={{
                          display: index === active ? "block" : "none"
                        }}
                        className={
                          index === active
                            ? "rfl-slider-data-active"
                            : "rfl-slider-data-non-active"
                        }
                      >
                        <div className="rfl-slider-data">
                          <div className="rfl-slider-data-dt">
                            <img
                              className="rfl-slider-data-img"
                              src={dt.image}
                            />
                          </div>
                          <div className="rfl-slider-data-dt">
                            <p className="rfl-slider-data-txt-head">
                              {dt.name}
                            </p>
                            <p className="rfl-slider-data-txt-sub">{dt.des}</p>
                            <p className="rfl-slider-data-txt-dt">{dt.text}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}

                  <div className="d-none d-lg-block">
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

export default Reflections;
