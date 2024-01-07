import React, { useState } from "react";
import "./Chatbot.scss";
import { motion } from "framer-motion";
import { BsFillChatRightFill, BsRobot } from "react-icons/bs";
import { TbMoonStars } from "react-icons/tb";
import Modal from "../Modal/Modal";

import { MdOutlineWbSunny } from "react-icons/md";
const Chatbot = (props) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      {showModal && (
        <Modal
          lightMode={props.lightMode}
          setLightModeHandler={props.setLightModeHandler}
        />
      )}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ ease: "linear", duration: 2, repeat: Infinity }}
        className="chatbot__icon"
      ></motion.div>
      <div
        className="chatbot"
        onClick={() => {
          if (props.lightMode === ("light" || "")) {
            props.setLightModeHandler("dark");
          } else {
            props.setLightModeHandler("light");
          }
        }}
      >
        {props.lightMode === ("light" || "") && (
          <TbMoonStars className="icon"></TbMoonStars>
        )}
        {props.lightMode === "dark" && (
          <MdOutlineWbSunny className="icon"></MdOutlineWbSunny>
        )}
      </div>
    </div>
  );
};

export default Chatbot;
