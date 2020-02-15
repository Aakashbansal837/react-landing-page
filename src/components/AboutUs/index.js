import React from "react";
import Navbar from "../Main/Navbar";
import Gallery from "./Gallery";
import About from "./About";
import Journey from "./Journey";
import DownloadOptions from "../Main/DownloadOptions";
import Footer from "../Main/Footer";
import Lazyload from "react-lazyload";

const AboutUs = () => {
  return (
    <div>
      <Lazyload>
        <Navbar />
        <Gallery />
        <About />
        <Journey />
        <DownloadOptions />
        <Footer />
      </Lazyload>
    </div>
  );
};

export default AboutUs;
