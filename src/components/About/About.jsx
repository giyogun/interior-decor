import React from "react";
import images from "../../constants/images";
import AppWrap from "../../wrap/AppWrap";
import MotionHandle from "../../wrap/MotionHandle";

import "./About.css";

const About = () => {
  return (
    <div className="about">
      <div className="about-section">
        <div className="hr"></div>
        <div className="about-section-text">
          <h1>About Us</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
          <br />
          <p>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="img-container">
          <img src={images.about} alt="" />
        </div>
      </div>
    </div>
  );
};

export default AppWrap(MotionHandle(About), "about");

