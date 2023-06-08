import React, { useState } from "react";
import "../app.scss";
import NavigationDots from "../components/NavigationDots";
import SocialMedia from "../components/SocialMedia";
const AppWrap = (Component, idName, classNames) =>
  function HOC() {
    const [bg, setbg] = useState("");
    return (
      <div id={idName} className={` app__container  ${classNames}`}>
        <SocialMedia></SocialMedia>
        <div className="app__wrapper app__flex">
          <Component></Component>

          <div className=" copyright">
            <p className="p-text">©2023 Yash</p>
            <p className="p-text">All rights reserved</p>
          </div>
        </div>

        <NavigationDots active={idName}></NavigationDots>
      </div>
    );
  };

export default AppWrap;
