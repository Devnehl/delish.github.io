import React from "react";
import "./StyleComponents/nav.css";
function Nav() {
  return (
    <div className="nav">
      <div className="navBtn">
        <button>
          <div className="line1 navLine"></div>
          <div className="line2 navLine"></div>
        </button>
      </div>
      <div className="logoContainer">
        <h1>Delish</h1>
      </div>
      <div className="lang">
        <div className="searchIcon">
          <h4>icon</h4>
        </div>
        <div className="lang">
          <h4>lang</h4>
        </div>
      </div>
    </div>
  );
}

export default Nav;
