import React from "react";
import images from "../../constants/images";
import AppWrap from "../../wrap/AppWrap";
import MotionHandle from "../../wrap/MotionHandle";
import "./Services.css";

const Services = () => {
  return (
    <div className="services">
      <h1>OUR SERVICES</h1>
      <div className="services-container">
        <div className="services-container-item">
          <img src={images.service} alt="" />
          <h4>Service 1</h4>
          <p>Lorem ipsum dolor sit amet, consectetur</p>
          <button>view</button>
        </div>
        <div className="services-container-item">
          <img src={images.service1} alt="" />
          <h4>Service 2</h4>
          <p>Lorem ipsum dolor sit amet, consectetur</p>
          <button>view</button>
        </div>
        <div className="services-container-item">
          <img src={images.service2} alt="" />
          <h4>Service 3</h4>
          <p>Lorem ipsum dolor sit amet, consectetur</p>
          <button>view</button>
        </div>
      </div>
    </div>
  );
};

export default AppWrap(MotionHandle(Services), "services");


