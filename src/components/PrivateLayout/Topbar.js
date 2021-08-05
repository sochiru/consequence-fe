import React from 'react';
import {
  AppBar, Box, Button, Toolbar, Typography
} from '@material-ui/core';
import useAuth from 'hooks/useAuth';
import { useHistory } from 'react-router-dom';
import PAGES from 'constants/pages';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';

const Topbar = () => {
  const { clearClient } = useAuth();
  const history = useHistory();

  return (
    <AppBar position="static">
      <Toolbar style={{ display: 'flex', }}>
        <Typography variant="h6">
          Consequence
        </Typography>
        <Box mr={5} />
        <Typography component={NavLink} variant="button" to={PAGES.DASHBOARD} color="inherit">
          Dashboard
        </Typography>
        <Box mr={2} />
        <Typography component={NavLink} variant="button" to={PAGES.ACCOUNTS} color="inherit">
          Accounts
        </Typography>
        <Box mr={2} />
        <Typography component={NavLink} variant="button" to={PAGES.CARDS} color="inherit">
          Cards
        </Typography>
        <span style={{ flex: 1 }} />
        <Button
          variant="contained"
          color="secondary"
          onClick={() => {
            clearClient();
            history.push(PAGES.SIGN_IN);
          }}
        >
          Sign out
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Topbar;
