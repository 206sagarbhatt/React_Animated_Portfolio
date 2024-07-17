import React from "react";
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Contact = () => {
  return (
    <>
      <div className="container contact" id="contact">
        <h1>CONTACT ME</h1>
        <div
          className="contact-icon"
          data-aos="zoom-in-up"
          data-aos-duration="1000"
        >
          <a href="https://www.instagram.com/sagar_bhatt._?igsh=MzRlODBiNWFlZA==" target="_blank" className="items">
            <FaInstagram className="icons" />
          </a>
          <a href="https://www.facebook.com/206sagarbhatt?mibextid=ZbWKwL" target="_blank" className="items">
            <CiFacebook className="icons" />
          </a>
          <a href="https://www.linkedin.com/in/sagar-bhatt-096097284?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" className="items">
            <CiLinkedin className="icons" />
          </a>
          <a href="https://x.com/SagarBh61854287?t=GevGEYBPPf3srpGDlhjAxw&s=09" target="_blank" className="items">
            <FaSquareXTwitter className="icons" />
          </a>
          <a href="https://github.com/206sagarbhatt" target="_blank" className="items">
            <FaGithubSquare className="icons" />
          </a>
          <a href="206sagarbhatt@gmail.com" target="_blank" className="items">
            <SiGmail className="icons" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Contact;