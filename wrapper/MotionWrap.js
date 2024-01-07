import React from "react";
import { motion } from "framer-motion";

const MotionWrap = (Component, classNames) =>
  function HOC() {
    return (
      <div>
        <Component></Component>
      </div>
    );
  };

export default MotionWrap;
