import React from "react";
import { easeInOut, motion } from "framer-motion";

import { TypeAnimation } from "react-type-animation";
import clsx from "clsx";
import "./Header.scss";
import { SiLeetcode, SiGithub, SiLinkedin, SiNextdotjs } from "react-icons/si";

import AppWrap from "../../wrapper/AppWrap";
import MotionWrap from "../../wrapper/MotionWrap";

import Cpp from "../../assets/cpp.svg";
import Reacticon from "../../assets/react.svg";

const Header = () => {
  return (
    <>
      <div class="blob"></div>
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__header app__flex"
      >
        <section className="hero">
          <div className="side-text">YASH</div>
          <img className="cpp" src={Cpp}></img>
          <img className="react" src={Reacticon}></img>
          <SiNextdotjs className="next"></SiNextdotjs>
          <h1>
            <span className={clsx("title", "heroTitle", "heroTitle_1")}>
              <span className={clsx("title", "animatedTitle_1")}>
                {"Yash Sachan "}
              </span>
            </span>
            <span className={clsx("title", "heroTitle", "heroTitle_2")}>
              <span className={clsx("title", "animatedTitle_2")}>
                {"web developer "}
              </span>
            </span>
            <span className={clsx("title", "heroTitle", "heroTitle_3")}>
              <span className={clsx("title", "animatedTitle_3")}>
                {"ui ux "}
              </span>
            </span>
          </h1>
          <div className="type">
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
          <div className="links">
            <a href="https://github.com/CyberlordYash">
              <div className="github">
                <SiGithub></SiGithub>
                <p className="p-text">Github</p>
              </div>
            </a>
            <a href="https://leetcode.com/cyberlordyash/">
              <div className="leetcode">
                <SiLeetcode></SiLeetcode>
                <p className="p-text">LeetCode</p>
              </div>
            </a>
            <a href="https://www.linkedin.com/in/yash-sachan-187405209/">
              <div className="linkedin">
                <SiLinkedin></SiLinkedin>
                <p className="p-text">Linkedin</p>
              </div>
            </a>
          </div>
        </section>
      </motion.div>
    </>
  );
};
export default MotionWrap(AppWrap(Header, "home"), "");
