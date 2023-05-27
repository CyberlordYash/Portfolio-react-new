import React from "react";
import "./About.scss";
import About01 from "../../assets/web.jpg";
import About02 from "../../assets/app.jpg";
import About03 from "../../assets/about03.png";
import About04 from "../../assets/about04.png";
import { motion } from "framer-motion";
import AppWrap from "../../wrapper/AppWrap";
const abouts = [
  {
    title: "Web Developer",
    description: "I am a excellent Web Developer",
    imgURL: About01,
  },
  {
    title: "App Developer",
    description: "I am a excellent App Developer",
    imgURL: About02,
  },
  {
    title: "Web Developer",
    description: "I am a excellent Web Developer",
    imgURL: About03,
  },
  {
    title: "Web Developer",
    description: "I am a excellent Web Developer",
    imgURL: About04,
  },
];
const About = () => {
  return (
    <div className="bg">
      <h2 className="head-text">
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
            whileHover={{ scale: 1.35 }}
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
