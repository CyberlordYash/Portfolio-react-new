import React, { useState } from "react";
import "./app.scss";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Work from "./components/Work/Work";
import Skills from "./components/Skills/Skills";
import Testimonials from "./components/Testimonials/Testimonials";
import Footer from "./components/Footer/Footer";
import DarkMode from "./DarkMode";
import Lottie from "lottie-react";
import Line from "./assets/line.json";
const App = () => {
  return (
    <div className="app">
      <Navbar />

      <Header></Header>
      <Lottie animationData={Line} className="line"></Lottie>
      <About></About>
      <Lottie animationData={Line} className="line"></Lottie>
      <Work></Work>
      <Lottie animationData={Line} className="line"></Lottie>
      <Skills></Skills>
      <Lottie animationData={Line} className="line"></Lottie>
      <Testimonials></Testimonials>
      <Lottie animationData={Line} className="line"></Lottie>
      <Footer></Footer>

      <h1>Yash Sachan</h1>
      <p>yash</p>
    </div>
  );
};
export default App;
