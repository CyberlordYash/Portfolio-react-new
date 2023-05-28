import React from "react";
import { useState } from "react";
import { Tooltip } from "react-tooltip";
import "./Skills.scss";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";
import AppWrap from "../../wrapper/AppWrap";
import Skill01 from "../../assets/react.png";
import Skill02 from "../../assets/cpp.png";
import Skill03 from "../../assets/flutter.png";
import Skill04 from "../../assets/node.png";
import Skill05 from "../../assets/javascript.png";
import Skill06 from "../../assets/typescript.png";
import Skill07 from "../../assets/git.png";
import Skill08 from "../../assets/css.png";
import Skill09 from "../../assets/redux.png";
import Skill10 from "../../assets/html.png";
import Skill11 from "../../assets/github.png";
import Skill12 from "../../assets/sql.png";
import Skill13 from "../../assets/mongo.png";
import Skill14 from "../../assets/express.png";
import Skill15 from "../../assets/dart.png";
import Skill16 from "../../assets/firebase.png";
import Skill17 from "../../assets/aws.png";
const Skills = () => {
  const skills = [
    {
      name: "React",
      description: "Modern Portfolio Website ",
      imgURL: Skill01,
      tags: "UIEvent/Ux",
      bgColor: "white",
    },
    {
      name: "C++",
      description: "Modern Portfolio Website ",
      imgURL: Skill02,
      tags: "UIEvent/Ux",
      bgColor: "white",
    },
    {
      name: "Flutter",
      description: "Modern Portfolio Website ",
      imgURL: Skill03,
      tags: "UIEvent/Ux",
      bgColor: "white",
    },
    {
      name: "Node JS",
      description: "Modern Portfolio Website ",
      imgURL: Skill04,
      tags: "UIEvent/Ux",
      bgColor: "white",
    },
    {
      name: "Mongo DB",
      description: "Modern Portfolio Website ",
      imgURL: Skill13,
      tags: "UIEvent/Ux",
      bgColor: "white",
    },
    {
      name: "Express JS",
      description: "Modern Portfolio Website ",
      imgURL: Skill14,
      tags: "UIEvent/Ux",
      bgColor: "white",
    },
    {
      name: "AWS",
      description: "Modern Portfolio Website ",
      imgURL: Skill17,
      tags: "UIEvent/Ux",
      bgColor: "white",
    },
    {
      name: "Javascript",
      description: "Modern Portfolio Website ",
      imgURL: Skill05,
      tags: "UIEvent/Ux",
      bgColor: "white",
    },
    {
      name: "Typescript",
      description: "Modern Portfolio Website ",
      imgURL: Skill06,
      tags: "UIEvent/Ux",
      bgColor: "white",
    },
    {
      name: "Dart",
      description: "Modern Portfolio Website ",
      imgURL: Skill15,
      tags: "UIEvent/Ux",
      bgColor: "white",
    },
    {
      name: "GitHub",
      description: "Modern Portfolio Website ",
      imgURL: Skill11,
      tags: "UIEvent/Ux",
      bgColor: "white",
    },
    {
      name: "Git",
      description: "Modern Portfolio Website ",
      imgURL: Skill07,
      tags: "UIEvent/Ux",
      bgColor: "white",
    },
    {
      name: "Firebase",
      description: "Modern Portfolio Website ",
      imgURL: Skill16,
      tags: "UIEvent/Ux",
      bgColor: "white",
    },
    {
      name: "CSS",
      description: "I am a excellent App Developer",
      imgURL: Skill08,
    },
    {
      name: "Redux",
      description: "I am a excellent Web Developer",
      imgURL: Skill09,
    },
    {
      name: "HTML",
      description: "I am a excellent Web Developer",
      imgURL: Skill10,
    },
    {
      name: "SQL",
      description: "I am a excellent Web Developer",
      imgURL: Skill12,
    },
  ];
  const experience = [
    {
      name: "Frontend Developer",
      company: "IIIT",
      desc: "worked as a frontend developer at IIIT",
      year: "2023",
    },
    {
      name: "Backend Developer",
      company: "IIIT",
      desc: "worked as a backend developer at IIIT",
      year: "2023",
    },
  ];
  return (
    <div className="bg">
      <h2 className="head-text"> Skills and Experience</h2>
      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill.name}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={skill.imgURL}></img>
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div className="app__skills-exp">
          {experience.map((work) => (
            <div>
              <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.5 }}
                className="app__skills-exp-work"
                data-tip
                data-for={work.name}
                key={work.name}
              >
                <h4 className="bold-text">{work.name}</h4>
                <p className="p-text">{work.company}</p>
              </motion.div>
              <Tooltip
                id={work.name}
                effect="solid"
                arrowColor="#fff"
                className="skills-tooltip"
              >
                {work.desc}
              </Tooltip>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default AppWrap(Skills);
