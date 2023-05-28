import React, { useState } from "react";
import "./Work.scss";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";
import AppWrap from "../../wrapper/AppWrap";
import Work01 from "../../assets/about01.png";
import Work02 from "../../assets/about02.png";
import Work04 from "../../assets/about04.png";
import Gym from "../../assets/gym.jpg";
const Work = () => {
  const works = [
    {
      title: "Gym Shark",
      description: "Modern Portfolio Website ",
      imgURL: Gym,
      tags: "UIEvent/Ux",
    },
    {
      title: "App Developer",
      description: "I am a excellent App Developer",
      imgURL: Work01,
    },
    {
      title: "Web Developer",
      description: "I am a excellent Web Developer",
      imgURL: Work02,
    },
    {
      title: "Web Developer",
      description: "I am a excellent Web Developer",
      imgURL: Work04,
    },
  ];
  const filterWork = [
    {
      title: "Gym Shark",
      description:
        "A React website made to help individual focus on their health goals  ",
      imgURL: Gym,
      tags: "React+Typescript+RapidAPIs",
    },
    {
      title: "App Developer",
      description: "I am a excellent App Developer",
      imgURL: Work01,
    },
    {
      title: "Web Developer",
      description: "I am a excellent Web Developer",
      imgURL: Work02,
    },
    {
      title: "Web Developer",
      description: "I am a excellent Web Developer",
      imgURL: Work04,
    },
  ];
  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);
    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);
      if (item === "All") {
        //incomplete
      }
    }, 500);
  };
  return (
    <div className="app__work">
      <h2 className="head-text">
        My Creative
        <br />
        <span>Portfolio </span>
        Section
      </h2>
      <div className="app__work-filter">
        {["Web App", "Mobile App", "React JS", "All"].map((item, index) => (
          <div
            key={index}
            onClick={() => handleWorkFilter(item)}
            className={`app__work-filter-item app__flex p-text ${
              activeFilter === item ? "item-active" : ""
            }`}
          >
            {item}
          </div>
        ))}
      </div>
      <motion.div
        animate={animateCard}
        transition={{ duration: 0.7, delayChildren: 0.7 }}
        className="app__work-portfolio"
      >
        {filterWork.map((work, index) => (
          <div className="app__work-item app__flex" key={index}>
            <div className="app__work-img app__flex">
              <img src={work.imgURL} alt={work.name}></img>
              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{
                  duration: 0.35,
                  ease: "easeInOut",
                  staggeredChildren: 0.5,
                }}
                className="app__work-hover app__flex"
              >
                <a href={work.projectLink}>
                  <motion.div
                    whileHover={{ scale: [1, 0.9] }}
                    whileInView={{ scale: [0, 1] }}
                    transition={{
                      duration: 0.25,
                    }}
                    className="app__flex"
                  >
                    <AiFillEye></AiFillEye>
                  </motion.div>
                </a>
                <a href={work.codeLink}>
                  <motion.div
                    whileHover={{ scale: [1, 0.9] }}
                    whileInView={{ scale: [0, 1] }}
                    transition={{
                      duration: 0.25,
                    }}
                    className="app__flex"
                  >
                    <AiFillGithub></AiFillGithub>
                  </motion.div>
                </a>
              </motion.div>
            </div>
            <div className="app__work-content app__flex">
              <h4 className="bold-text">{work.title}</h4>
              <p className="p-text" style={{ marginTop: 10 }}>
                {work.description}
              </p>
              <div className="app__work-tag app__flex">
                <p className="p-text">{work.tags}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default AppWrap(Work, "work");
