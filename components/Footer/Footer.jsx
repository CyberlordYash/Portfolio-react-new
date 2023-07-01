import React, { useState } from "react";
import "./Footer.scss";
import AppWrap from "../../wrapper/AppWrap";
import Contact from "../../assets/contact.svg";
import { CiMobile3 } from "react-icons/ci";
import { HiMail } from "react-icons/hi";
const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isFormSUbmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const { email, name, message } = formData;
  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = () => {
    setLoading(true);
    const contact = {
      type: "contact",
      name: name,
      email: email,
      message: message,
    };
  };
  return (
    <>
      <h2 className="head-text">Take a coffee & chat with me</h2>

      <div className="app__footer">
        <div className="app__footer-cards">
          <div className="app__footer-card">
            <HiMail className="logos"></HiMail>
            <a href="mailto:yashsachan321@gmail.com" className="p-text">
              Yashsachan321@gmail.com
            </a>
          </div>

          <div className="app__footer-card">
            <CiMobile3 className="logos mobile"></CiMobile3>
            <a href="tel:+91 1234567890" className="p-text">
              Yashsachan321@gmail.com
            </a>
          </div>
        </div>
        {!isFormSUbmitted ? (
          <div className="app__footer-form app__flex">
            <img className="contact" src={Contact}></img>
            <div className="app__flex">
              <input
                className="p-text"
                type="text"
                placeholder="Your Name"
                name="name"
                value={name}
                onChange={handleChangeInput}
              ></input>
            </div>
            <div className="app__flex">
              <input
                className="p-text"
                type="email"
                placeholder="Your Email"
                name="email"
                value={email}
                onChange={handleChangeInput}
              ></input>
            </div>
            <div>
              <textarea
                className="p-text"
                placeholder="Your Message"
                value={message}
                name="message"
                onChange={handleChangeInput}
              ></textarea>
            </div>
            <button type="button" className="p-text" onClick={handleSubmit}>
              {loading ? "Sending" : "Send Message"}
            </button>
          </div>
        ) : (
          <div>
            <h3 className="head-text">Thank you for getting in touch</h3>
          </div>
        )}
      </div>
    </>
  );
};

export default AppWrap(Footer, "contact");
