import React, { useEffect, useState } from "react";
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
import Loading from "./assets/loading.json";
import Github from "./assets/github.json";
const App = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3500);
  }, []);
  return (
    <div className="app">
      {loading ? (
        <div className="loading">
          <Lottie animationData={Loading} className="loadin"></Lottie>
        </div>
      ) : (
        <div>
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
        </div>
      )}
    </div>
  );
};
export default App;
