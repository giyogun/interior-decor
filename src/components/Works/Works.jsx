import React from "react";
import images from "../../constants/images";
import AppWrap from "../../wrap/AppWrap";
import MotionHandle from "../../wrap/MotionHandle";
import "./Works.css";

const Works = () => {
  return (
    <div className="works">
      <h1>OUR PROJECTS</h1>
      <div className="projects">
        <div className="projects-item">
          <img src={images.projects} alt="" />
          <h4>Project 1</h4>
          <img src={images.arrow} alt="" className="arrow" />
        </div>
        <div className="projects-item">
          <img src={images.projects1} alt="" />
          <h4>Project 2</h4>
          <img src={images.arrow} alt="" className="arrow" />
        </div>
        <div className="projects-item">
          <img src={images.projects2} alt="" />
          <h4>Project 3</h4>
          <img src={images.arrow} alt="" className="arrow" />
        </div>
      </div>
    </div>
  );
};

export default AppWrap(MotionHandle(Works), "projects");
