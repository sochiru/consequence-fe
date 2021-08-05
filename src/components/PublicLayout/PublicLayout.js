import React from 'react';
import { Box } from '@material-ui/core';
import Topbar from './Topbar';

const PublicLayout = (props) => {
  const { children } = props;

  return (
    <Box>
      <Topbar />
      <Box height="100%" width="100%" display="flex" justifyContent="center">
        {children}
      </Box>
    </Box>
  );
};

export default PublicLayout;
