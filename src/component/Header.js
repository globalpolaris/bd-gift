import React, { useState } from "react";
import { Link } from "react-router-dom";
import App from "../App";

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
              <Link to="/home">Home</Link>
            </li>
          <li>
            <Link to="/how-it-started">How it started</Link>
          </li>
          <li>
            <Link to="/your-gift">
              <span>Your Gift</span>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
