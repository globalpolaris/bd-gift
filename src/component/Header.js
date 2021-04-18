import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import App from '../App'

const Header = () => {
  const [toggle, setToggled] = useState(false);
  return (
      <header>
        <h2 className="title">P R O J E C T - Z</h2>
        <div className="options">
          <div className="hamburger">
            <input
              className="chck"
              type="checkbox"
              onChange={() => setToggled((toggle) => !toggle)}
            />
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
          <ul className={toggle ? "nav slide" : "nav"}>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="#">How it started</a>
            </li>
            <li>
              <a href="#">
                <span>Your Gift</span>
              </a>
            </li>
          </ul>
        </div>
      </header>

  );
};

export default Header;
