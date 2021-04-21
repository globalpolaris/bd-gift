import React from "react";
import Timer from "../Countdown";
import Patient from "./patient.png";
const Gift = () => {
  return (
      <div className="gift-wrap">
      {/* <img src={Patient} className="img-patient" /> */}
      {/* <div className="timer-gift"> */}
      <h1>Not yet...<br/></h1>
        <Timer />
      {/* </div> */}
    </div>
  );
};

export default Gift;
