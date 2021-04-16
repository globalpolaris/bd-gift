import React, { useState, useEffect } from "react";

const ReqDictionary = () => {
  const [word, setWord] = useState("");
  const [counter, setCounter] = useState(0);
  const [status, setStatus] = useState(false);
  const [fetchedData, setFetchedData] = useState("");
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
      }
    } catch (error) {
      console.error(error);
    }
    setCounter(counter + 1);
    console.log(counter);
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
        {status ? (
          <div className="res">
            <h2>{fetchedData.word}</h2>
            <em>/ {fetchedData.phonetics[0].text} /</em>
            <p>{fetchedData.meanings[0].definitions[0].definition}</p>
          </div>
        ) : counter > 0 ? (
          <em className="res">No such word! :(</em>
        ) : (
          <>AWAWAW</>
        )}
      </div>
    </div>
  );
};

export default ReqDictionary;
