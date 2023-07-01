import React from "react";
import "./About.scss";

import { motion } from "framer-motion";
import AppWrap from "../../wrapper/AppWrap";
import Lottie from "lottie-react";
import Laptop from "../../assets/laptop.json";
import { AiFillSetting, AiFillAndroid } from "react-icons/ai";
import { SiBlockchaindotcom } from "react-icons/si";
import { BsFillPenFill } from "react-icons/bs";
import MotionWrap from "../../wrapper/MotionWrap";
const abouts = [
  {
    title: "Web Developer",
    description: "",
    imgURL: <AiFillSetting className="logo"></AiFillSetting>,
  },
  {
    title: "App Developer",
    description: "",
    imgURL: <AiFillAndroid className="logo"></AiFillAndroid>,
  },
  {
    title: "DSA problem solver",
    description: "",
    imgURL: <BsFillPenFill className="logo"></BsFillPenFill>,
  },
  {
    title: "Blockchain Enthusiast",
    description: "",
    imgURL: <SiBlockchaindotcom className="logo"></SiBlockchaindotcom>,
  },
];
const About = () => {
  return (
    <div className="bg">
      <h2 className="head-text">
        Intro<span>duction</span>
      </h2>
      <div className="transparent">
        <div className="introduction">
          <Lottie animationData={Laptop} className="laptop"></Lottie>

          <p className="p-texts">
            I am<span> Yash Sachan</span> pursuing BTech in <span>CSE</span>{" "}
            from IIIT Sonepat. I'm a frontend focused{" "}
            <span>full stack developer</span> with experience in front end web
            development, backend debugging and UI UX designing. I'm a{" "}
            <span>quick learner</span> and <span>good team player</span>, can
            collaborate with clients efficiently and work on developing
            scalable, user-friendly solutions. Please feel free to find out
            more.
          </p>
        </div>
        <h2 className="head-text size">
          Software is a great combination of
          <br />
          <span>Artistry </span>
          and
          <span> Engineering</span>
        </h2>
        <div className="app__profiles">
          {abouts.map((about, index) => (
            <motion.div
              whileHover={{ scale: 1.15 }}
              transition={{ duration: 0.5, type: "tween" }}
              className="app__profile-item"
              key={about.title + index}
            >
              <motion.div
                whileInView={{ rotate: 360 }}
                transition={{ duration: 1.5, type: "tween" }}
                className="icon"
                key={about.title + index}
              >
                {about.imgURL}
              </motion.div>
              <h2
                className="bold-text"
                style={{ marginTop: 20, fontSize: "0.9rem" }}
              >
                {about.title}
              </h2>
              <p className="p-text" style={{ marginTop: 10 }}>
                {about.description}
              </p>
            </motion.div>
          ))}
        </div>
        z
      </div>
    </div>
  );
};
export default MotionWrap(AppWrap(About, "about"), "");
