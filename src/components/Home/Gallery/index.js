import React from "react";

const Gallery = () => {
  return (
    <div className="gallery">
      <center className="gallery-header">Gallery</center>
      <div className="container">
        <div className="gallery-main">
          <div className="container">
            <div className="row">
              <div className="gallery-data-move-left">
                <span className="gallery-data-move-triangle"></span>
              </div>
              <div className="gallery-data-center"> </div>
              <div className="gallery-data-move-right">
                <span className="gallery-data-move-triangle"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
