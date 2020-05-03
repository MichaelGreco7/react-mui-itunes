import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Input } from '@material-ui/core';
import Nav from './components/Nav';
import Card from './components/Card';
import Popover from './components/Popover';

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
              <Card key={el.trackId} el={el}></Card>
            </>
          ))}
        </div>
        <br />
      </header>
    </div>
  );
}

export default App;
