import React from "react";
import { ReactComponent as Logo } from "../../../images/logo.svg";

const Navbar = () => {
  return (
    <nav className="nvbr">
      <div className=" container nvbr-container">
        <a href="/home">
          <Logo className="nvbr-logo" />
        </a>

        <ul className="nvbr-menu">
          <li>
            <a href="/home" className="nvbr-link">
              Home
            </a>
          </li>
          <li>
            <a href="/aboutUs" className="nvbr-link">
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
