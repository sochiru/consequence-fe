import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import PAGES from 'constants/pages';

const Nav = () => (
  <Box display="flex" alignItems="center">
    <Link to={PAGES.DASHBOARD}><Typography variant="h6">Dashboard</Typography></Link>
    <Link to={PAGES.CARDS}><Typography variant="h6">Accounts</Typography></Link>
    <Link to={PAGES.ACCOUNTS}><Typography variant="h6">Cards</Typography></Link>
  </Box>
);

export default Nav;
