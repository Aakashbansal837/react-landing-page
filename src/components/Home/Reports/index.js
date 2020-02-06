import React from "react";
import "../../../styles/index.scss";
import BGWall from "../../../images/bg-wall-2.svg";
import Report from "../../../images/report.png";
import { ReportsText } from "../../../constants/index";
import DownloadIcon from "../../../images/download.svg";
import DownloadPdf from "../../../pdf/Coffee_table_book.pdf";

const Reports = () => {
  return (
    <div className="report">
      <div className="container">
        <center className="report-header"> Reports</center>
      </div>
      <div className="container">
        <center className="report-main">
          <div className="report-main-dt">
            <div className="container">
              <div className="row">
                <div className="col-sm-12 col-xs-12 col-md-5 col-lg-5">
                  <div className="report-main-dt-img">
                    <img
                      className="report-main-dt-img-dt"
                      src={Report}
                      alt="report img"
                    />
                  </div>
                </div>
                <div className="col-sm-12 col-xs-12 col-md-7 col-lg-7">
                  <div className="report-main-dt-data">
                    <div className="container">
                      <div className="row">
                        <div className="report-main-dt-data-head">
                          Gyanodaya Coffee Table Book
                        </div>
                        <div className="report-main-dt-data-txt">
                          {ReportsText}
                        </div>
                        <div className="report-main-dt-data-dw">
                          <a href={DownloadPdf}>
                            <img src={DownloadIcon} alt="download icon" />
                            <span className="report-main-dt-data-dw-span">
                              Download as PDF
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="report-main-bg">
            <img src={BGWall} alt="backgroud wall" />
          </div>
        </center>
      </div>
    </div>
  );
};

export default Reports;
