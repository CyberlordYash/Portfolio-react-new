import React, { useState } from "react";
import "./Modal.scss";
import { useScroll } from "framer-motion";
function Modal(props) {
  const [text, setText] = useState("Light Mode");
  return (
    <div className="Modal__back">
      <div className="Modal">
        <div
          className="Modal__text"
          onClick={() => {
            if (props.lightMode === "light") {
              props.setLightModeHandler("");
              setText("Light Mode");
            } else {
              props.setLightModeHandler("light");
              setText("Dark Mode");
            }
          }}
        >
          {text}
        </div>
        <div className="Modal__text">Resume</div>
      </div>
    </div>
  );
}

export default Modal;
