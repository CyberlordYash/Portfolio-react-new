import React, { useState } from "react";
import "./Work.scss";
import Market from "../../assets/ebazaar.jpg";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";
import AppWrap from "../../wrapper/AppWrap";

import Summary from "../../assets/summarise.jpg";
import Gympic from "../../assets/gym.jpg";

import Portfolio from "../../assets/portfolio.jpg";
import pent from "../../assets/penta.svg";
const Work = () => {
  const filterWork = [
    {
      title: "Ebazaar",
      description:
        "A robust CRUD e-commerce website,browse products, add items to their cart, and complete purchases  ",
      imgURL: Market,
      tags: "React+Next+Sanity",
      projectLink: "https://dev-yash-ebazaar.netlify.app/",
      codeLink: "https://github.com/CyberlordYash/ebazaar",
      bgColor: "#ffc2c87b",
    },
    {
      title: "Gym Shark",
      description:
        "A React website made to help individual focus on their health goals  ",
      imgURL: Gympic,
      tags: "React+Typescript+RapidAPIs+MUI",
      projectLink: "https://dev-yash-gymshark.netlify.app/",
      codeLink: "https://github.com/CyberlordYash/Gym-shark",
      bgColor: "#ff638a7e",
    },
    {
      title: "SummarizeIt",
      description: "Summarize any sites with openAI GPT4",
      imgURL: Summary,
      tags: "React+RapidAPIs+TailwindCSS",
      projectLink: "https://dev-yash-summarizeit.netlify.app/",
      codeLink: "https://github.com/CyberlordYash/summarizeit",
      bgColor: "#db63ff7e",
    },
    {
      title: "My Portfolio",
      description: "A simple modern Portfolio  ",
      imgURL: Portfolio,
      tags: "React+framerMotion",
      projectLink: "https://dev-yash-carworld.netlify.app/",
      codeLink: "https://github.com/CyberlordYash/CarWorld",
      bgColor: "#313bacb3",
    },

    // {
    //   title: "JarvisGPT",
    //   description: "--",
    //   imgURL: Jarvis,
    //   tags: "React+OpenAI",
    //   description:
    //     "A simple ChatGPT clone that answers all of your daily questions  ",
    //   projectLink: "https://dev-yash-jarvisgpt.netlify.app/",
    //   codeLink: "https://github.com/CyberlordYash/JarvisGPT",
    //   bgColor: "#7f7f7f7e",
    // },
    // {
    //   title: "ToDo app",
    //   description: "A simple Flutter app for balancing power and simplicity  ",
    //   imgURL: Todo,
    //   tags: "Flutter+Firebase",
    //   projectLink: "https://github.com/CyberlordYash/ToDo-Android",
    //   codeLink: "https://github.com/CyberlordYash/ToDo-Android",
    //   bgColor: "#7a71fa7e",
    // },
  ];
  const [activeFilter, setActiveFilter] = useState("All");

  return (
    <div className="app__work">
      <div className="pent-work">
        <img src={pent}></img>
      </div>
      <div className="pent-work2">
        <img src={pent}></img>
      </div>
      <h2 className="head-text">
        My
        <span> Projects </span>
        Section
      </h2>
      <div className="app__work-filter">
        {["Web App", "Mobile App", "React JS", "All"].map((item, index) => (
          <div
            key={index}
            className={`app__work-filter-item app__flex p-text ${
              activeFilter === item ? "item-active" : ""
            }`}
          >
            {item}
          </div>
        ))}
      </div>
      <motion.div className="app__work-portfolio">
        {filterWork.map((work, index) => (
          <motion.div
            whileInView={{ scale: [0.6, 1] }}
            style={{ backgroundColor: work.bgColor }}
            className="app__work-item app__flex"
            key={index}
          >
            <div className="app__work-img app__flex">
              <img src={work.imgURL} alt={work.name}></img>
              <motion.div
                whileHover={{ y: [10, 0], opacity: [0, 1] }}
                transition={{
                  duration: 0.35,
                  ease: "easeInOut",
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
              <p className="p-text1" style={{ marginTop: 10 }}>
                {work.description}
              </p>
              <div className="app__work-tag app__flex">
                <p className="p-text">{work.tags}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default AppWrap(Work, "work");
