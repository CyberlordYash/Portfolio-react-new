import React from "react";
import { BsTwitter, BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
const SocialMedia = () => {
  return (
    <div className="app__social">
      <a href="https://twitter.com/cyberlordyash?t=ctKn3D5kvlO6CunzNKopHg&s=08">
        <div>
          <BsTwitter></BsTwitter>
        </div>
      </a>
      <div>
        <FaFacebookF></FaFacebookF>
      </div>
      <a href="https://instagram.com/isthat_yash__?igshid=MzNlNGNkZWQ4Mg==">
        <div>
          <BsInstagram></BsInstagram>
        </div>
      </a>
    </div>
  );
};

export default SocialMedia;
