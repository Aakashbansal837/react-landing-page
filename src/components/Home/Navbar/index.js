import React from "react";
import './navbar.scss';
import { ReactComponent as Logo } from '../../../images/logo.svg';


const Navbar = () => {
    return (
        <nav class="nav">
          <div class="container">
            <Logo />
            <ul class="nav-menu">
              <li><a href="#" class="nav-link">Home</a></li>
              <li><a href="#" class="nav-link">About Us</a></li>
              <li><a href="#" class="nav-link">Blogs</a></li>
              <li><a href="#" class="btn-main">Log In</a></li>
            </ul>
          </div>
        </nav>
        
    );

};

export default Navbar;

