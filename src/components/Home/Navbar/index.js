import React from "react";
import "../../../styles/index.scss";
import { ReactComponent as Logo } from "../../../images/logo.svg";

const Navbar = () => {
  return (
    <nav className="nvbr">
      <div className=" container nvbr-container">
        <Logo className="nvbr-logo" />
        <ul className="nvbr-menu">
          <li>
            <a href="#" className="nvbr-link">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="nvbr-link">
              About Us
            </a>
          </li>
          <li>
            <a href="#" className="nvbr-link">
              Blogs
            </a>
          </li>
          <li>
            <a href="#" className="btn-main">
              Log In
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
