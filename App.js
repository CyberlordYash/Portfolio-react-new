import React, { useEffect, useState } from "react";
import "./app.scss";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Work from "./components/Work/Work";
import Skills from "./components/Skills/Skills";
import Testimonials from "./components/Testimonials/Testimonials";
import Footer from "./components/Footer/Footer";
import Chatbot from "./components/chatbot/Chatbot.jsx";

import Footerend from "./components/Footerend/Footerend";
import Cursor from "./components/Cursor";

const App = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  const [lightMode, setLightMode] = useState("light");
  const setLightModeHandler = (data) => {
    setLightMode(data);
    console.log(data);
  };

  return (
    <div className={`app ${lightMode}`}>
      {loading ? (
        <div className="loading">
          <div className="lottie loader"></div>
        </div>
      ) : (
        <div className="jumbo">
          <Cursor></Cursor>
          <Chatbot
            setLightModeHandler={setLightModeHandler}
            lightMode={lightMode}
          ></Chatbot>
          <Navbar />

          <Header></Header>
          <About></About>

          <Work></Work>

          <Skills></Skills>

          <Testimonials></Testimonials>

          <Footer></Footer>
          <Footerend></Footerend>
        </div>
      )}
    </div>
  );
};
export default App;
