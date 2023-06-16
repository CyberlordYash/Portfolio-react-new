import React, { useState } from "react";
import "./Work.scss";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";
import AppWrap from "../../wrapper/AppWrap";

import Work04 from "../../assets/about04.png";
import Gym from "../../assets/gym.jpg";
import Todo from "../../assets/todo.png";
import Jarvis from "../../assets/jarivs.jpg";
const Work = () => {
  const works = [
    {
      title: "Gym Shark",
      description: "Modern Portfolio Website ",
      imgURL: Gym,
      tags: "UIEvent/Ux",
      projectLink: "https://mega.nz/folder/xVBinJoC#IQ0QzdSLL-lb7VVTY7XbSQ",
    },
    {
      title: "App Developer",
      description: "I am a excellent App Developer",
      imgURL: "",
    },
    {
      title: "Web Developer",
      description: "I am a excellent Web Developer",
      imgURL: "",
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
      tags: "React+Typescript+RapidAPIs+MUI",
      projectLink: "https://dev-yash-gymshark.netlify.app/",
      codeLink: "https://github.com/CyberlordYash/Gym-shark",
    },
    {
      title: "JarvisGPT",
      description: "--",
      imgURL: Jarvis,
      tags: "React+OpenAI",
      description:
        "A simple ChatGPT clone that answers all of your daily questions  ",
      projectLink: "https://dev-yash-jarvisgpt.netlify.app/",
      codeLink: "https://github.com/CyberlordYash/JarvisGPT",
    },
    {
      title: "ToDo app",
      description: "A simple Flutter app for balancing power and simplicity  ",
      imgURL: Todo,
      tags: "Flutter+Firebase",
      projectLink: "https://github.com/CyberlordYash/ToDo-Android",
      codeLink: "https://github.com/CyberlordYash/ToDo-Android",
    },

    {
      title: "Under Development",
      description: "--",
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
                className="blur app__work-hover app__flex"
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
