import React from "react";
import Navbar from "../Main/Navbar";
import Corousel from "./Corousel";
import Partners from "./Partners";
import About from "./About";
import Heatmap from "./Heatmap";
import Stride from "./Stride";
import Reports from "./Reports";
import Reflections from "./Reflections";
import News from "./News";
import Gallery from "./Gallery";
import DownloadOptions from "../Main/DownloadOptions";
import Footer from "../Main/Footer";
import Lazyload from "react-lazyload";

const Home = () => {
  return (
    <div>
      <Lazyload>
        <Navbar />
        <Corousel />
        <Partners />
        <About />
        <Heatmap />
        <Stride />
        <Reports />
        <Reflections />
        <News />
        <Gallery />
        <DownloadOptions />
        <Footer />
      </Lazyload>
    </div>
  );
};

export default Home;
