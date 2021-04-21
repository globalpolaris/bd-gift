import React, { useState, useEffect } from "react";
import sorry from "./sorry.png";

const How = () => {
  const [number, setNumber] = useState("");
  const [fetchedData, setFetchedData] = useState("");
  const url = "http://numbersapi.com/" + number + "?json";

  const fetchData = async () => {
    try {
      const resp = await fetch(url);
      if (resp.status !== 404) {
        const data = await resp.json();
        setFetchedData(data);
        //   console.log(fetchedData)
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchData();
    return () => {
      setFetchedData({})
    };
  }, [number]);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData();
  };
  return (
    <div className="contain">
      <img
        className="sorry-img"
        src={sorry}
        alt="sorry"
      />
      <div className="context">
        <h1>Hmm..</h1>
        <h3>I think I'm not finished with this page.</h3>
        <h3>In the meantime try typing any number inside the box!</h3>
        <input className="number-box" onChange={(e) => setNumber(e.target.value)}></input>
        <br/><em>{fetchedData.text}</em>
      </div>
    </div>
  );
};

export default How;
