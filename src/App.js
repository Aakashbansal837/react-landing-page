import React from "react";
import "./styles/index.scss";
import { BrowserRouter, Route } from "react-router-dom";

import Home from "./components/Home";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/home" component={Home}></Route>
    </BrowserRouter>
  );
}

export default App;
