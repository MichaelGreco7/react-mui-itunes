import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Input } from '@material-ui/core';

function App() {
  const [songs, setSongs] = useState([]);
  const [toggle, setToggle] = useState(true);
  const [query, setQuery] = useState(['drake']);

  useEffect(() => {
    async function getData() {
      const response = await axios.get(
        'https://itunes.apple.com/search?term=drake'
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
        <Input onChange={(event) => setQuery(event.target.value)}></Input>
        <Button onClick={() => setToggle(!toggle)}>Search</Button>

        <div>
          {songs.map((el) => (
            <div key={el.trackId}>{el.trackName}</div>
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;
