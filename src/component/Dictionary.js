import React, { useState, useEffect } from "react";

const ReqDictionary = () => {
  const [word, setWord] = useState("");
  const [counter, setCounter] = useState(0);
  const [status, setStatus] = useState(true);
  const [fetchedData, setFetchedData] = useState("");
  const w = word;
  const lang = "en-US";
  const url =
    "https://api.dictionaryapi.dev/api/v2/entries/" + lang + "/" + word;

  const fetchData = async () => {
    try {
      const resp = await fetch(url);
      if (resp.status != 404) {
        const data = await resp.json();
        setFetchedData(data[0]);
        setStatus(true);
        setCounter(counter + 1);
        // console.log(status);
      } else {
        setStatus(false);
        // console.log(status);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData();
  };

  return (
    <div>
      <form className="searchbar" onSubmit={handleSubmit}>
        <input
          type="text"
          id="search"
          maxLength="24"
          placeholder="Something..."
          value={word}
          onChange={(e) => setWord(e.target.value)}
          required
        ></input>
        <input
          className="submit-btn"
          type="submit"
          placeholder="Submit"
          value="I'm feeling lucky"
        ></input>
      </form>

      <div className="dictionary">
        {w.toLowerCase() === "zenochka" ? (
          <div className="res">
          <h2>Zenochka Uma Zivanka</h2>
          <em>/ Zenochka, Enok /</em>
          <p>Born on 1st of July 2002. Graduated from Al-Azhar 3 Kebayoran Baru in 2019. Student of Architecture at Diponogero University, expected to graduate in 2023</p>
        </div>
        ) : (
          <>
            {!status && counter === 0 ? <em>No such word! :(</em> :status && counter > 0 ? (
              <div className="res">
                <h2>{fetchedData.word}</h2>
                <em>/ {fetchedData.phonetics[0].text} /</em>
                <p>{fetchedData.meanings[0].definitions[0].definition}</p>
              </div>
            ) : counter === 0 ? (
              <></>
            ) : (
              <em>No such word! :(</em>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default ReqDictionary;
