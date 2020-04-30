import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Input } from '@material-ui/core';
import Nav from './components/Nav';

function App() {
  const [songs, setSongs] = useState([]);
  const [toggle, setToggle] = useState(true);
  const [query, setQuery] = useState(['drake']);

  useEffect(() => {
    async function getData() {
      const response = await axios.get(
        `https://itunes.apple.com/search?term=${query}`
      );
      setSongs(response.data.results);
      console.log(songs);
    }
    getData();
  }, [toggle]);
  console.log(songs);
  return (
    <div className="App">
      <header className="App-header">
        <Nav toggle={toggle} setToggle={setToggle} setQuery={setQuery} />

        <div>
          {songs.map((el) => (
            <>
              <div>{el.collectionName}</div>
              <div key={el.trackId}>{el.trackName}</div>
              <img src={el.artworkUrl100}></img>
            </>
          ))}
        </div>
        <br />
      </header>
    </div>
  );
}

export default App;
