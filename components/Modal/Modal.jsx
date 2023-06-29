import React, { useState } from "react";
import "./Modal.scss";
import { useScroll } from "framer-motion";
import { MdDarkMode } from "react-icons/md";
import { BsSunFill } from "react-icons/bs";
import { AiOutlineFileDone } from "react-icons/ai";
import { motion } from "framer-motion";
function Modal(props) {
  return (
    <div className="Modal__back">
      <motion.div
        whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
        transition={{ duration: 0.5 }}
        className="Modal"
      >
        <div className="Modes">
          <div
            className="Modal__text darkmode"
            onClick={() => {
              if (props.lightMode === "light") {
                props.setLightModeHandler("");
              }
            }}
          >
            <MdDarkMode></MdDarkMode>
            <div>Dark Mode</div>
          </div>
          <div
            className="Modal__text light__mode"
            onClick={() => {
              if (props.lightMode === "") {
                props.setLightModeHandler("light");
              }
            }}
          >
            <BsSunFill></BsSunFill>
            <div>Light Mode</div>
          </div>
        </div>
        <div className="Modes">
          <a href="" className="Modal__text">
            <div>
              {" "}
              <AiOutlineFileDone></AiOutlineFileDone>
            </div>
            Resume
          </a>
        </div>
      </motion.div>
    </div>
  );
}

export default Modal;
