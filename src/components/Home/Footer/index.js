import React from "react";
import { ReactComponent as Logo } from "../../../images/FooterLogo.svg";
import downloadOption1 from "../../../images/downloadOption1.svg";
import downloadOption2 from "../../../images/downloadOption2.svg";

const Footer = () => {
  return (
    <div className="ftr">
      <div className="ftr-main">
        <div className="container">
          <div className="row">
            <Logo className="ftr-main-logo" />
            <div className="ftr-main-btn">
              <div className="ftr-main-btn-button">
                <a href="#" className="footer-button">
                  Dashboard
                  <div className="transition"></div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ftr-content">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
              <div className="ftr-content-head">COMPANY</div>
              <div className="coloumn ">
                <div className=" col-lg-12 col-md-12 col-sm-6 col-xs-6 px-0">
                  <div className="ftr-content-data">About Us</div>
                </div>
                <div className=" col-lg-12 col-md-12 col-sm-6 col-xs-6 px-0">
                  <div className="ftr-content-data">Contact Us</div>
                </div>
                <div className=" col-lg-12 col-md-12 col-sm-6 col-xs-6 px-0">
                  <div className="ftr-content-data">Blogs</div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
              <div className="ftr-content-head">LATEST BLOGS</div>
              <div className="coloumn ">
                <div className=" col-lg-12 col-md-12 col-sm-6 col-xs-6 px-0">
                  <div className="ftr-content-data">
                    Launch of Gyanodaya Coffee Table Book
                  </div>
                </div>
                <div className=" col-lg-12 col-md-12 col-sm-6 col-xs-6 px-0">
                  <div className="ftr-content-data">
                    Enabling The Rural Youth To Grasp The …
                  </div>
                </div>
                <div className=" col-lg-12 col-md-12 col-sm-6 col-xs-6 px-0">
                  <div className="ftr-content-data">
                    Gyanodaya: New Hopes for Kasturba Gandhi…
                  </div>
                </div>
                <div className=" col-lg-12 col-md-12 col-sm-6 col-xs-6 px-0">
                  <div className="ftr-content-data">
                    Gyanodaya: Eckovation Join Hands with Ada.…
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-2 col-md-2 col-sm-12 col-xs-12">
              <div className="coloumn ">
                <div className=" col-lg-12 col-md-12 col-sm-6 col-xs-6 px-0">
                  <div className="ftr-content-data">
                    <img
                      className="ftr-download-options"
                      src={downloadOption1}
                      alt="download option"
                    />
                  </div>
                </div>
                <div className=" col-lg-12 col-md-12 col-sm-6 col-xs-6 px-0">
                  <div className="ftr-content-data">
                    <img
                      className="ftr-download-options"
                      src={downloadOption2}
                      alt="download option"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
              <div className="coloumn ">
                <div className=" col-lg-12 col-md-12 col-sm-6 col-xs-6 px-0">
                  <div className="ftr-content-data1">
                    125 A, Shahpur Jat, Siri Fort New Delhi- 110049
                  </div>
                </div>
                <div className=" col-lg-12 col-md-12 col-sm-6 col-xs-6 px-0">
                  <div className="ftr-content-data1">+91-9266677335</div>
                </div>
                <div className=" col-lg-12 col-md-12 col-sm-6 col-xs-6 px-0">
                  <div className="ftr-content-data1">info@eckovation.com</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="ftr-divider"></div>
      </div>
    </div>
  );
};

export default Footer;
