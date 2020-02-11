import React from "react";
import DownloadButton from "../../../images/DownloadButton.svg";

const DownloadOptions = () => {
  return (
    <div className="dwnld">
      <div className="dwnld-main">
        <div className="container">
          <div className="row">
            <div className="col-lg-2 col-md-2 col-sm-0 col-xs-0"></div>
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
            <div className="col-lg-0 col-md-0 col-sm-0 col-xs-0">
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
