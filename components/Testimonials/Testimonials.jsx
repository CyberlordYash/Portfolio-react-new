import React, { useState } from "react";
import { motion } from "framer-motion";
import AppWrap from "../../wrapper/AppWrap";
import "./Testimonials.scss";
import About05 from "../../assets/about05.jpg";
import test03 from "../../assets/iiit.png";
import test04 from "../../assets/school.png";
import test05 from "../../assets/bda.jpeg";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
const Testimonials = () => {
  const brands = [
    {
      name: "AMAZON",
      company: "Netflix",
      feedback: "Yash is awesome",
      imgUrl: test04,
    },
    {
      name: "Yash",
      company: "Netflix",
      feedback: "Yash is awesome",
      imgUrl: test05,
    },
    {
      name: "AMAZON",
      company: "Netflix",
      feedback: "Yash is awesome",
      imgUrl: test03,
    },
  ];
  const testimonials = [
    {
      name: "Yash",
      company: "Netflix",
      feedback: "Yash is awesome",
      imgUrl: About05,
    },
    {
      name: "Sachan",
      company: "Netflix",
      feedback: "Yash is awesome",
      imgUrl: About05,
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleClick = (index) => {
    setCurrentIndex(index);
  };

  return (
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
                currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1
              )
            }
          >
            <HiChevronLeft></HiChevronLeft>
          </div>
          <div
            className="app__flex"
            onClick={() =>
              handleClick(
                currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1
              )
            }
          >
            <HiChevronRight></HiChevronRight>
          </div>
        </div>
      </div>
      <div className="app__testimonials-brands app__flex">
        {brands.map((brand) => (
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, type: "tween" }}
          >
            <img src={brand.imgUrl}></img>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AppWrap(Testimonials, "testimonials");
