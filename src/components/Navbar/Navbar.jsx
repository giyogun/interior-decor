import React, { useState } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";

import "./Navbar.css";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="navbar">
      <ul>
        <div className="navbar-container">
          {[
            "logo",
            "about us",
            "services",
            "projects",
            "testimonials",
            "blog",
          ].map((item) => (
            <li className={`nav-item ${item === "logo" ? "logo" : ""}`}>
              <a
                href={`#${
                  item === "about us"
                    ? "about"
                    : item === "logo"
                    ? "home"
                    : item
                }`}
              >
                {item}
              </a>
            </li>
          ))}
        </div>
      </ul>

      <div className="hamburger">
        <div className="nav-item logo">LOGO</div>
        <div className="menu-container">
          <HiMenuAlt4 onClick={() => setToggle(true)} />
        </div>
        {toggle && (
          <div className="menu">
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {[
                "home",
                "about us",
                "services",
                "projects",
                "testimonials",
                "blog",
              ].map((item) => (
                <li
                  key={item}
                  className="nav-item"
                  onClick={() => setToggle(false)}
                >
                  <a href={`#${item === "about us" ? "about" : item}`}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
