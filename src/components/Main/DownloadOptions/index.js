import React from "react";
import DownloadButton from "../../../images/icons/DownloadButton.svg";

const DownloadOptions = () => {
  return (
    <div className="dwnld">
      <div className="dwnld-main">
        <div className="container">
          <div className="row">
            <div className="col-lg-2 col-md-2 hidden-sm hidden-xs"></div>
            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
              <center className="dwnld-main-header">
                Download Teacher App!
              </center>
              <center>
                <img
                  className="dwnld-main-download"
                  src={DownloadButton}
                  alt="download button"
                />
              </center>
            </div>
            <div className="hidden-md hidden-lg hidden-sm hidden-xs">
              <div className="vertical-divider"></div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
              <center className="dwnld-main-header">
                Download Student App!
              </center>
              <center>
                <img
                  className="dwnld-main-download"
                  src={DownloadButton}
                  alt="download button"
                />
              </center>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadOptions;
