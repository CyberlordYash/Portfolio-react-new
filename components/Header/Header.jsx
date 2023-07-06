import React from "react";
import { easeInOut, motion } from "framer-motion";

import Circle from "../../assets/circle.svg";
import { TypeAnimation } from "react-type-animation";
import "./Header.scss";

import AppWrap from "../../wrapper/AppWrap";
import MotionWrap from "../../wrapper/MotionWrap";
import Hero from "../../assets/profile.png";
import Cpp from "../../assets/cpp.svg";
import Reacticon from "../../assets/react.svg";
import Node from "../../assets/node.svg";
const Header = () => {
  return (
    <>
      <div className="app__header app__flex">
        <div className="side-text"></div>
        <motion.div
          whileInView={{ x: [-100, 0], opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
          className="app__header-info"
        >
          <div className="app__header-badge">
            <div className="badge-cmp app__flex">
              <span>👋</span>
              <div style={{ marginLeft: 20 }}>
                <p className="p-text">Hi There, I am</p>
                <h1 className="purple head-text">Yash </h1>
              </div>
            </div>
            <div className="tag-cmp app__flex">
              <p className="p-text">I Am Into</p>
              <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed out once, initially
                  "Web Development",
                  1000, // wait 1s before replacing "Mice" with "Hamsters"
                  "App Development",
                  1000,
                  "Blockchain",
                  1000,
                  "Tech Communities",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                style={{
                  fontSize: "1.4em",
                  display: "inline-block",
                  color: " #6962fa",
                  fontWeight: "800",
                }}
                repeat={Infinity}
              />
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
            <div class="slider-thumb">
              <img src={Hero} alt="profile-bg"></img>
            </div>
          </motion.div>
        </motion.div>
        <motion.div
          whileInView={{ scale: [0, 1], opacity: [0, 1] }}
          transition={{
            duration: 1,
            ease: easeInOut,
            type: "spring",
          }}
          className="app__header-circles"
        >
          {[Reacticon, Cpp, Node].map((circle, index) => (
            <motion.div
              animate={{
                rotate: [5, 0, 5],
                scale: [1, 1.06, 1],
              }}
              transition={{ ease: "easeInOut", duration: 4, repeat: Infinity }}
              className="circle-cmp app__flex"
              key={`circle-${index}`}
            >
              <img src={circle}></img>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
};
export default MotionWrap(AppWrap(Header, "home"), "");
