import React from "react";
import "./Footerend.scss";
import { FaCity } from "react-icons/fa";
import { BiSolidUpArrowCircle } from "react-icons/bi";
import { AiOutlineArrowUp } from "react-icons/ai";
const Footerend = () => {
  return (
    <div className="top-text footer-end">
      Thanks for visiting my Portfolio
      <div className="footer-mid">
        <div className="box">
          <div className=" end-text">Yash Portfolio</div>
        </div>
        <div>
          <a href="#home" className="box p-text mover">
            <AiOutlineArrowUp className="up-logo"></AiOutlineArrowUp>
          </a>
        </div>
        <div className="box end-text">
          <div>
            <FaCity className=" city-logo"></FaCity>
          </div>
          <div>Noida, India</div>
        </div>
      </div>
      <hr></hr>
      <div className="end-text">Designed with ❤️ by Yash Sachan </div>
    </div>
  );
};

export default Footerend;
