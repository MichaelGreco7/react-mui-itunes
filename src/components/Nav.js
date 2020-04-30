import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Input } from '@material-ui/core';

const Nav = ({ toggle, setToggle, setQuery }) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6">Songs</Typography>
        <Input onChange={(event) => setQuery(event.target.value)}></Input>
        <Button onClick={() => setToggle(!toggle)} color="inherit">
          Search
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Nav;
