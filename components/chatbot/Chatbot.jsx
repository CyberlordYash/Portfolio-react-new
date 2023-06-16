import React, { useState } from "react";
import "./Chatbot.scss";
import { motion } from "framer-motion";
import { BsFillChatRightFill, BsRobot } from "react-icons/bs";
import Modal from "../Modal/Modal";
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
          if (showModal === false) {
            setShowModal(true);
          } else setShowModal(false);
        }}
      >
        <BsRobot className="icon"></BsRobot>
      </div>
    </div>
  );
};

export default Chatbot;
