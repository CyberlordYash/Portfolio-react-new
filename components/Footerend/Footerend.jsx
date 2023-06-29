import React from "react";
import "./Footerend.scss";
import { FaCity } from "react-icons/fa";
import { BiSolidUpArrowCircle } from "react-icons/bi";
import { AiOutlineArrowUp } from "react-icons/ai";
const Footerend = () => {
  return (
    <div className="footer-end">
      <div className="footer-mid">
        <div>
          <div className="box end-text">Yash Portfolio</div>
        </div>
        <div>
          <a href="#home" className="box p-text mover">
            <AiOutlineArrowUp className="up-logo"></AiOutlineArrowUp>
          </a>
        </div>
        <div className=" end-text">
          <div>
            <FaCity className="box city-logo"></FaCity>
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
