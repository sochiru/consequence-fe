import React from 'react';
import {
  AppBar, Toolbar, Typography
} from '@material-ui/core';

const Topbar = () => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="h6">
        Consequence
      </Typography>
    </Toolbar>
  </AppBar>
);

export default Topbar;
