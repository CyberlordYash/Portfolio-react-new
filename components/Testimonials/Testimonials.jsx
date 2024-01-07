import React, { useState } from "react";
import { motion } from "framer-motion";
import AppWrap from "../../wrapper/AppWrap";
import "./Testimonials.scss";
import About05 from "../../assets/testimonial.svg";
import test03 from "../../assets/iiit.png";
import test04 from "../../assets/school.png";
import { SiLeetcode } from "react-icons/si";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
const Testimonials = () => {
  const brands = [
    {
      name: "AMAZON",
      company: "IIIT",
      feedback: "Yash is awesome",
      imgUrl: test04,
    },

    {
      name: "AMAZON",
      company: "IIIT sonepat",
      feedback: "Yash is awesome",
      imgUrl: test03,
    },
  ];
  const testimonials = [
    {
      name: "Got Recommendation letter from Indian Army Officer Entry NDA after clearing 5day long SSB process with AIR: 193",
      company: "IIIT",
      feedback: "NDA",
      imgUrl: test04,
    },
    {
      name: "Solved 750+ problems mastering DSA",
      company: "IIIT sonepat",
      feedback: "LeetCode",
      imgUrl: test03,
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <>
      <h2 className="head-text"> Achievements</h2>
      <div className="bgc">
        <div>
          <div className="app__testimonial-item app__flex">
            <img src={testimonials[currentIndex].imgUrl}></img>
            <div className="app__testimonial-content">
              <p className="p-text">{testimonials[currentIndex].feedback}</p>
              <div>
                <h4 className="bold-text">{testimonials[currentIndex].name}</h4>
                <h5 className="p-text">{testimonials[currentIndex].company}</h5>
              </div>
            </div>
          </div>
          <div className="app__testimonial-btns app__flex">
            <div
              className="app__flex"
              onClick={() =>
                handleClick(
                  currentIndex === 0
                    ? testimonials.length - 1
                    : currentIndex - 1
                )
              }
            >
              <HiChevronLeft></HiChevronLeft>
            </div>
            <div
              className="app__flex"
              onClick={() =>
                handleClick(
                  currentIndex === testimonials.length - 1
                    ? 0
                    : currentIndex + 1
                )
              }
            >
              <HiChevronRight></HiChevronRight>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppWrap(Testimonials, "testimonials");
