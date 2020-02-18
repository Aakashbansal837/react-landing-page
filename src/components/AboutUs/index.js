import React from "react";
import Navbar from "../Main/Navbar";
import Gallery from "./Gallery";
import About from "./About";
import Journey from "./Journey";
import DownloadOptions from "../Main/DownloadOptions";
import Footer from "../Main/Footer";

const AboutUs = () => {
  return (
    <div>
      <Navbar />
      <Gallery />
      <About />
      <Journey />
      <DownloadOptions />
      <Footer />
    </div>
  );
};

export default AboutUs;
