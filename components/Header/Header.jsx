import React from "react";
import { easeInOut, motion } from "framer-motion";
import Profile from "../../assets/profile.png";
import Circle from "../../assets/circle.svg";
import Flutter from "../../assets/flutter.png";
import Redux from "../../assets/redux.png";
import Sass from "../../assets/sass.png";
import "./Header.scss";
import AppWrap from "../../wrapper/AppWrap";
const Header = () => {
  return (
    <div className="app__header app__flex">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <span>👋</span>
            <div style={{ marginLeft: 20 }}>
              <p className="p-text">Hello, I am</p>
              <h1 className="head-text">Yash</h1>
            </div>
          </div>
          <div className="tag-cmp app__flex">
            <p className="p-text">Web Developer</p>
            <p className="p-text">App Development</p>
          </div>
        </div>
      </motion.div>
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__header-img"
      >
        <img src={Profile} alt="profile-bg"></img>
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: "easeInOut" }}
          src={Circle}
          className="overlay_circle"
        ></motion.img>
      </motion.div>
      <motion.div
        whileInView={{ scale: [0, 1], opacity: [0, 1] }}
        transition={{ duration: 1, ease: easeInOut }}
        className="app__header-circles"
      >
        {[Flutter, Redux, Sass].map((circle, index) => (
          <div className="circle-cmp app__flex" key={`circle-${index}`}>
            <img src={circle}></img>
          </div>
        ))}
      </motion.div>
    </div>
  );
};
export default AppWrap(Header, "home");
