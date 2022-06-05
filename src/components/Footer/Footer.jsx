import React from "react";
import "./Footer.css";
import { MdOutlineArrowRight } from "react-icons/md";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-text">
          <span>Call us now</span>
          <p>Office telephone:</p>
          <p>Mobile number:</p>
        </div>
        <div className="footer-text">
          <span>Come visit us</span>
          <p>Address</p>
          <p>State</p>
        </div>
      </div>

      <div className="row2">
        <div className="left">
          <h4>LOGO</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="right">
          <div className="subscribe">
            <MdOutlineArrowRight /> <span>Subscribe now</span>
          </div>
          <input type="email" placeholder="enter your email" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
