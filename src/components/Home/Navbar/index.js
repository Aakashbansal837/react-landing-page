import React from "react";
import './navbar.scss';
import { ReactComponent as Logo } from '../../../images/logo.svg';


const Navbar = () => {
    return (
        <nav class="nvbr">
          <div class=" container nvbr-container">
            <Logo className='nvbr-logo' />
            <ul class="nvbr-menu">
              <li><a href="#" class="nvbr-link">Home</a></li>
              <li><a href="#" class="nvbr-link">About Us</a></li>
              <li><a href="#" class="nvbr-link">Blogs</a></li>
              <li><a href="#" class="btn-main">Log In</a></li>
            </ul>
          </div>
        </nav>
        
    );

};

export default Navbar;

