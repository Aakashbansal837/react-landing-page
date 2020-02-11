import React from "react";
import { ReactComponent as Logo } from "../../../images/FooterLogo.svg";

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
              <div className="ftr-content-data">
                <div className="coloumn">
                  <div className=" col-lg-12 col-md-12 col-sm-6 col-xs-6">
                    About Us
                  </div>
                  <div className=" col-lg-12 col-md-12 col-sm-6 col-xs-6">
                    Contact Us
                  </div>
                  <div className=" col-lg-12 col-md-12 col-sm-6 col-xs-6">
                    Blogs
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

export default Footer;
