import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Input } from '@material-ui/core';

function App() {
  const [songs, setSongs] = useState([]);
  const [toggle, setToggle] = useState(true);
  const [query, setQuery] = useState(['nickleback']);

  useEffect(() => {
    async function getData() {
      const response = await axios.get(
        'https://itunes.apple.com/search?term=nickleback'
      );
      setSongs(response.data.results);
      console.log(songs);
    }
    getData();
  }, [toggle]);

  return (
    <div className="App">
      <header className="App-header">
        <Input onChange={(event) => setQuery(event.target.value)}></Input>
        <Button onClick={() => setToggle(!toggle)}>Search</Button>
      </header>
    </div>
  );
}

export default App;
