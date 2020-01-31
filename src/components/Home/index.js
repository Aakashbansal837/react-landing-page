import React from "react";
import Navbar from './Navbar';
import Corousel from './Corousel';
import Partners from './Partners';
import About from './About';
import Heatmap from './Heatmap';
import Stride from './Stride';
import Reports from './Reports';
import Reflections from './Reflections';
import News from './News';
import Gallery from './Gallery';
import DownloadOptions from './DownloadOptions';
import Footer from './Footer';

const Home = () => {
    return (
        <div>
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
        </div>
    );

};

export default Home;

