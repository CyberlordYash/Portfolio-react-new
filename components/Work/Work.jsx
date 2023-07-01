import React, { useState } from "react";
import "./Work.scss";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";
import AppWrap from "../../wrapper/AppWrap";
import Bazaar from "../../assets/bazaar.jpg";
import Todo from "../../assets/todo.png";
import Jarvis from "../../assets/jarivs.jpg";
import Summary from "../../assets/Checklist.jpg";
import Gym from "../../assets/p.jpg";
import News from "../../assets/news.jpg";
const Work = () => {
  const filterWork = [
    {
      title: "Ebazaar",
      description:
        "A robust CRUD e-commerce website, where users can browse products, add items to their cart, and complete purchases  ",
      imgURL: Bazaar,
      tags: "React+Next+Sanity",
      projectLink: "https://dev-yash-ebazaar.netlify.app/",
      codeLink: "https://github.com/CyberlordYash/ebazaar",
    },
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
      title: "SummarizeIt",
      description: "Summarize any sites with openAI GPT4",
      imgURL: Summary,
      tags: "React+RapidAPIs+TailwindCSS",
      projectLink: "https://dev-yash-summarizeit.netlify.app/",
      codeLink: "https://github.com/CyberlordYash/summarizeit",
    },
    {
      title: "News Express",
      description:
        "Stay informed and up-to-date with the latest news from around the world  ",
      imgURL: News,
      tags: "Not yet deployed",
      projectLink: "https://dev-yash-newsexpress.netlify.app/",
      codeLink: "https://github.com/CyberlordYash/News-express",
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
  ];
  const [activeFilter, setActiveFilter] = useState("All");

  return (
    <div className="app__work">
      <h2 className="head-text">
        My Creative
        <br />
        <span>Projects </span>
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
          <div className="app__work-item app__flex" key={index}>
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
