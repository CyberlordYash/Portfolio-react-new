import React from "react";
import { FaReact, FaNodeJs, FaAws, FaGit } from "react-icons/fa";
import MotionWrap from "../../wrapper/MotionWrap";
import {
  TbBrandCpp,
  TbBrandFlutter,
  TbBrandMongodb,
  TbBrandJavascript,
  TbBrandTypescript,
  TbBrandGithub,
  TbBrandCss3,
  TbBrandRedux,
  TbSql,
} from "react-icons/tb";

import { SiExpress, SiDart, SiFirebase, SiHtml5 } from "react-icons/si";
import pent from "../../assets/pent.svg";
import "./Skills.scss";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";
import AppWrap from "../../wrapper/AppWrap";

const Skills = () => {
  const skills = [
    {
      name: "React",
      description: "Modern Portfolio Website ",
      imgURL: <FaReact></FaReact>,
      tags: "UIEvent/Ux",
      bgColor: "white",
    },
    {
      name: "C++",
      description: "Modern Portfolio Website ",
      imgURL: <TbBrandCpp></TbBrandCpp>,
      tags: "UIEvent/Ux",
      bgColor: "white",
    },
    {
      name: "Flutter",
      description: "Modern Portfolio Website ",
      imgURL: <TbBrandFlutter></TbBrandFlutter>,
      tags: "UIEvent/Ux",
      bgColor: "white",
    },
    {
      name: "Node JS",
      description: "Modern Portfolio Website ",
      imgURL: <FaNodeJs></FaNodeJs>,
      tags: "UIEvent/Ux",
      bgColor: "white",
    },
    {
      name: "Mongo DB",
      description: "Modern Portfolio Website ",
      imgURL: <TbBrandMongodb></TbBrandMongodb>,
      tags: "UIEvent/Ux",
      bgColor: "white",
    },
    {
      name: "Express JS",
      description: "Modern Portfolio Website ",
      imgURL: <SiExpress></SiExpress>,
      tags: "UIEvent/Ux",
      bgColor: "white",
    },
    {
      name: "AWS",
      description: "Modern Portfolio Website ",
      imgURL: <FaAws></FaAws>,
      tags: "UIEvent/Ux",
      bgColor: "white",
    },
    {
      name: "Javascript",
      description: "Modern Portfolio Website ",
      imgURL: <TbBrandJavascript></TbBrandJavascript>,
      tags: "UIEvent/Ux",
      bgColor: "white",
    },
    {
      name: "Typescript",
      description: "Modern Portfolio Website ",
      imgURL: <TbBrandTypescript></TbBrandTypescript>,
      tags: "UIEvent/Ux",
      bgColor: "white",
    },
    {
      name: "Dart",
      description: "Modern Portfolio Website ",
      imgURL: <SiDart></SiDart>,
      tags: "UIEvent/Ux",
      bgColor: "white",
    },
    {
      name: "GitHub",
      description: "Modern Portfolio Website ",
      imgURL: <TbBrandGithub></TbBrandGithub>,
      tags: "UIEvent/Ux",
      bgColor: "white",
    },
    {
      name: "Git",
      description: "Modern Portfolio Website ",
      imgURL: <FaGit></FaGit>,
      tags: "UIEvent/Ux",
      bgColor: "white",
    },
    {
      name: "Firebase",
      description: "Modern Portfolio Website ",
      imgURL: <SiFirebase></SiFirebase>,
      tags: "UIEvent/Ux",
      bgColor: "white",
    },
    {
      name: "CSS",
      description: "I am a excellent App Developer",
      imgURL: <TbBrandCss3></TbBrandCss3>,
      bgColor: "white",
    },
    {
      name: "Redux",
      description: "I am a excellent Web Developer",
      imgURL: <TbBrandRedux></TbBrandRedux>,
      bgColor: "white",
    },
    {
      name: "HTML",
      description: "I am a excellent Web Developer",
      imgURL: <SiHtml5></SiHtml5>,
      bgColor: "white",
    },
    {
      name: "SQL",
      description: "I am a excellent Web Developer",
      imgURL: <TbSql></TbSql>,
      bgColor: "white",
    },
  ];
  const experience = [
    {
      name: "Frontend Developer",
      company: "IIIT S",
      desc: "worked as a frontend developer at IIIT",
      year: "2023",
    },
    {
      name: "Backend Developer",
      company: "IIIT ",
      desc: "worked as a backend developer at IIIT",
      year: "2023",
    },
    {
      name: "--Section incomplete--",
      company: "IIIT ",
      desc: "worked as a backend developer at IIIT",
      year: "2023",
      bgColor: "red",
    },
  ];
  return (
    <>
      <div className="app__skills">
        <div className="pent-about">
          <img src={pent}></img>
        </div>
        <h2 className="head-text"> Skills</h2>
        <div className="app__skills-container">
          <div className="app__skills-list">
            {skills.map((skill) => (
              <div
                className="app__skills-item app__flex"
                key={skill.name}
                style={{ backgroundColor: skill.bgColor }}
              >
                <motion.div
                  whileInView={{ scale: [0.6, 1] }}
                  transition={{ duration: 1.5, type: "tween" }}
                  className="app__flex"
                >
                  {skill.imgURL}
                </motion.div>
                <p className="p">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MotionWrap(AppWrap(Skills, "skills"), "");
