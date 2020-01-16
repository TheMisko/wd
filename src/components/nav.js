import React from "react";

const Nav = () => {
  return (
    <div className="nav-container">
      <div className="nav-logo">
        <h2>Matthew&Maricel</h2>
      </div>
      <div className="nav-btns">
        {" "}
        <div className="nav-btn">
          <h4>HOME</h4>
        </div>
        <div className="nav-btn">
          <h4>PROFILE</h4>
        </div>
        <div className="nav-btn">
          <h4>PROJECTS</h4>
        </div>
        <div className="nav-btn">
          <h4>NEWS</h4>
        </div>
        <div className="nav-btn">
          <h4>CONTACT</h4>
        </div>
      </div>
    </div>
  );
};

export default Nav;
