import React from "react";
import { color, easeInOut, motion } from "framer-motion";
import Profile from "../../assets/profile.png";
import Circle from "../../assets/circle.svg";
import { TypeAnimation } from "react-type-animation";
import "./Header.scss";
import { FaReact } from "react-icons/fa";
import { SiCplusplus } from "react-icons/si";
import { TbBrandFlutter } from "react-icons/tb";
import AppWrap from "../../wrapper/AppWrap";
import MotionWrap from "../../wrapper/MotionWrap";
const Header = () => {
  return (
    <div className="app__header app__flex">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <span>👋</span>
            <div style={{ marginLeft: 20 }}>
              <p className="p-text">Hi There, I am</p>
              <h1 className="head-text">Yash </h1>
            </div>
          </div>
          <div className="tag-cmp app__flex">
            <p className="p-text">I Am Into</p>
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Web Development",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "App Development",
                1000,
                "Blockchain",
                1000,
                "Tech Communities",
                1000,
              ]}
              wrapper="span"
              speed={50}
              style={{
                fontSize: "1.4em",
                display: "inline-block",
                color: "#313bac",
                fontWeight: "800",
              }}
              repeat={Infinity}
            />
          </div>
        </div>
      </motion.div>
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__header-img"
      >
        <motion.div
          initial={{ y: -10 }}
          animate={{ y: 10 }}
          transition={{
            type: "smooth",
            repeatType: "mirror",
            duration: 2,
            repeat: Infinity,
          }}
        >
          <img src={Profile} alt="profile-bg"></img>
        </motion.div>
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: "easeInOut" }}
          src={Circle}
          className="overlay_circle"
        ></motion.img>
      </motion.div>
      <motion.div
        whileInView={{ scale: [0, 1], opacity: [0, 1] }}
        transition={{
          duration: 1,
          ease: easeInOut,
          type: "spring",
        }}
        className="app__header-circles"
      >
        {[
          <TbBrandFlutter></TbBrandFlutter>,
          <FaReact></FaReact>,
          <SiCplusplus></SiCplusplus>,
        ].map((circle, index) => (
          <motion.div
            animate={{
              rotate: [10, 0, 10],
              scale: [1, 1.05, 1],
            }}
            transition={{ ease: "easeInOut", duration: 4, repeat: Infinity }}
            className="circle-cmp app__flex"
            key={`circle-${index}`}
          >
            {circle}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};
export default MotionWrap(AppWrap(Header, "home"), "");
