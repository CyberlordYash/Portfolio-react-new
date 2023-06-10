import React from "react";
import "./About.scss";
import About01 from "../../assets/web.jpg";
import About02 from "../../assets/app.jpg";
import About03 from "../../assets/about03.jpg";
import About04 from "../../assets/about04.jpg";
import { motion } from "framer-motion";
import AppWrap from "../../wrapper/AppWrap";
import Lottie from "lottie-react";
import Laptop from "../../assets/laptop.json";
const abouts = [
  {
    title: "Web Development",
    description: "I am a excellent Web Developer",
    imgURL: About01,
  },
  {
    title: "App Developer",
    description: "I am a excellent App Developer",
    imgURL: About02,
  },
  {
    title: "Data Structure and Algorithms",
    description: "",
    imgURL: About03,
  },
  {
    title: "Blockchain Enthusiast",
    description: "",
    imgURL: About04,
  },
];
const About = () => {
  return (
    <div className="bg">
      <h2 className="head-text">
        Intro<span>duction</span>
      </h2>
      <div className="introduction">
        <Lottie animationData={Laptop} className="laptop"></Lottie>

        <p className="p-texts">
          I am<span> Yash Sachan</span> pursuing BTech in <span>CSE</span> from
          IIIT Sonepat. I'm a frontend focused <span>full stack developer</span>{" "}
          with experience in front end web development, backend debugging and UI
          UX designing. I'm a <span>quick learner</span> and{" "}
          <span>good team player</span>, can collaborate with clients
          efficiently and work on developing scalable, user-friendly solutions.
          Please feel free to find out more.
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
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.25 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={about.imgURL}></img>
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
export default AppWrap(About, "about");
