import React from "react";
import "./About.scss";

import { motion } from "framer-motion";
import AppWrap from "../../wrapper/AppWrap";
import hero from "../../assets/me.png";
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
          <img src={hero} className="intro"></img>

          <p className="p-texts">
            <span className="intro-heading"> Yash Sachan</span>
            <br />
            <span className="intro-text">Passionate Full Stack Developer</span>
            <hr />
            <br /> pursuing BTech in <span>CSE</span> from IIIT Sonepat. I'm a
            frontend focused <span>full stack developer</span> with experience
            in front end web development, backend debugging and UI UX designing.
            I'm a <span>quick learner</span> and <span>good team player</span>,
            can collaborate with clients efficiently and work on developing
            scalable, user-friendly solutions. Please feel free to find out
            more.
            <hr></hr>
            <br></br>
            <span>Age :</span> 20 <br />
            <span>College :</span>
            <a className="intro-link" href="http://iiitsonepat.ac.in/">
              Indian Institute of Information Technology, Sonepat
            </a>
          </p>
          <button class="button">
            <span class="button_lg">
              <span class="button_sl"></span>
              <span class="button_text">Resume</span>
            </span>
          </button>
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
              <div
                whileInView={{ rotate: 360 }}
                transition={{ duration: 1.5, type: "tween" }}
                className="icon"
                key={about.title + index}
              >
                {about.imgURL}
              </div>
              <h2
                className="p-text"
                style={{ margin: 0.2, fontSize: "0.8rem" }}
              >
                {about.title}
              </h2>
              <p className="p-text" style={{ marginTop: 10 }}>
                {about.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default MotionWrap(AppWrap(About, "about"), "");
