import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
const Night = () => {
  const [icon, setIcon] = useState(true);
  const sun = <FontAwesomeIcon icon={faSun} size="1x" />;
  const moon = <FontAwesomeIcon icon={faMoon} size="1x" />;
  console.log(icon);
  return (
    <div className="switch">

    <label className="switch-icon">
      <p>{icon}</p>
      <input type="checkbox" value={icon} onChange={() => setIcon(icon => !icon)}/>

      <span className="slider"  >
        <div className="moon-icon">{icon ? (
        <>
          {moon}
          {document.documentElement.setAttribute('data-theme', 'dark')}
        </>
        ) : (
        <>
          {sun}
          {document.documentElement.setAttribute('data-theme', 'light')}
        </>
        )}</div>
      </span>
    </label>
    {icon ? <em className="txt-switch">Switch to light mode!</em> : <></>}
    </div>
  );
};

export default Night;
