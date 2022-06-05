import React from "react";
import AppWrap from "../../wrap/AppWrap";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-text">
        <h1>Make Your Interior More Minimalistic & Modern</h1>
        <p>
          Bringing interiors to life, understanding the person or people living
          in a home is far greater need in design.
        </p>
      </div>
    </div>
  );
};

export default AppWrap(Header, "home");
