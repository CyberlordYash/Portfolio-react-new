import React, { useState } from "react";
import "./Footer.scss";
import AppWrap from "../../wrapper/AppWrap";
import Email from "../../assets/email.png";
import Mobile from "../../assets/mobile.png";
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
      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={Email}></img>
          <a href="mailto:yashsachan321@gmail.com" className="p-text">
            Yashsachan321@gmail.com
          </a>
        </div>

        <div className="app__footer-card">
          <img src={Mobile}></img>
          <a href="tel:+91 1234567890" className="p-text">
            Yashsachan321@gmail.com
          </a>
        </div>
      </div>
      {!isFormSUbmitted ? (
        <div className="app__footer-form app__flex">
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
    </>
  );
};

export default AppWrap(Footer, "contact");
