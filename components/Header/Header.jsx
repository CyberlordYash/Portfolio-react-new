import React from "react";
import { easeInOut, motion } from "framer-motion";
import Profile from "../../assets/profile.png";
import Circle from "../../assets/circle.svg";
import Flutter from "../../assets/flutter.png";
import Redux from "../../assets/cpp.png";
import Sass from "../../assets/react.png";
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
            <p className="p-text">App Developer</p>
          </div>
        </div>
      </motion.div>
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__header-img"
      >
        <motion.div
          initial={{ y: -10 }}
          animate={{ y: 10 }}
          transition={{
            type: "smooth",
            repeatType: "mirror",
            duration: 2,
            repeat: Infinity,
          }}
        >
          <img src={Profile} alt="profile-bg"></img>
        </motion.div>
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
