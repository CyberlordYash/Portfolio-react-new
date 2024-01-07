import React from "react";
import "./About.scss";

import { motion } from "framer-motion";
import AppWrap from "../../wrapper/AppWrap";
import hero from "../../assets/me.png";

import MotionWrap from "../../wrapper/MotionWrap";
import pent from "../../assets/pent.svg";
import iiit from "../../assets/iiit.png";
import school from "../../assets/school.png";
const abouts = [
  {
    title: (
      <div>
        <p>Bachelor Of Engineering In Computer Science</p>
        <p className="p-text1">
          IIIT Sonepat <br></br>gpa: 9.0{" "}
        </p>
      </div>
    ),
    description: "",
    imgURL: <img src={iiit} className="logo"></img>,
  },
  {
    title: (
      <div>
        {" "}
        <p>High School | Science</p>
        <p className="p-text1">
          Ram Eesh International School
          <br />
          12th: 95.6%
        </p>
      </div>
    ),
    description: "",
    imgURL: <img src={school} className="logo"></img>,
  },
];
const About = () => {
  return (
    <>
      <div className="bg">
        <div className="pent-about">
          <img src={pent}></img>
        </div>
        <h2 className="head-text">
          Intro<span>duction</span>
        </h2>
        <div className="transparent">
          <div className="introduction">
            <img src={hero} className="intro"></img>

            <p className="p-texts">
              <span className="intro-heading"> Yash Sachan</span>
              <br />
              <span className="intro-text">
                Passionate Full Stack Developer
              </span>
              <hr />
              <br /> pursuing BTech in <span>CSE</span> from IIIT Sonepat. I'm a
              frontend focused <span>full stack developer</span> with experience
              in front end web development, backend debugging and UI UX
              designing. I'm a <span>quick learner</span> and{" "}
              <span>good team player</span>, can collaborate with clients
              efficiently and work on developing scalable, user-friendly
              solutions. Please feel free to find out more.
              <hr></hr>
              <br></br>
              <span>Age :</span> 20 <br />
              <span>College :</span>
              <a className="intro-link" href="http://iiitsonepat.ac.in/">
                Indian Institute of Information Technology, Sonepat
              </a>
              <br />
              <span>Email :</span> Yashsachan321@gmail.com
            </p>
            <button class="button">
              <span class="button_lg">
                <span class="button_sl"></span>
                <span class="button_text">Resume</span>
              </span>
            </button>
          </div>
          <h2 className="head-text size">
            Educ
            <span>ation </span>
          </h2>
          <div className="app__profiles">
            {abouts.map((about, index) => (
              <motion.div
                whileInView={{ scale: [0.5, 1] }}
                transition={{ duration: 0.5, type: "tween" }}
                className="app__profile-item"
              >
                <div
                  whileInView={{ rotate: 360 }}
                  transition={{ duration: 1.5, type: "tween" }}
                  className="icon"
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
      <h1 className="stat">Current Stats</h1>
      <div className="stats">
        <img
          className="leetcode"
          src="https://leetcode.card.workers.dev/cyberlordyash?theme=default&font=baloo&extension=null"
          alt="Error! failed to load stats"
          loading="lazy"
        ></img>
        <img
          className="leetcode"
          src="https://github-readme-stats.vercel.app/api?username=CyberlordYash&theme=light&hide_border=false&include_all_commits=true&count_private=true"
          alt="Error! failed to load stats"
          loading="lazy"
        ></img>
      </div>
    </>
  );
};
export default MotionWrap(AppWrap(About, "about"), "");
