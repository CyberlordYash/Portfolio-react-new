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
const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header></Header>
      <About></About>
      <Work></Work>
      <Skills></Skills>
      <Testimonials></Testimonials>
      <Footer></Footer>

      <h1>Yash Sachan</h1>
      <p>yash</p>
    </div>
  );
};
export default App;
