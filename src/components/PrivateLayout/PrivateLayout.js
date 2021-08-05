import React from 'react';
import { Box, CircularProgress } from '@material-ui/core';
import { useTheme } from '@material-ui/styles';
import useUser from 'hooks/useUser';
import Topbar from './Topbar';

const PrivateLayout = (props) => {
  const { children } = props;
  const theme = useTheme();
  const { user } = useUser();

  if (user.data) {
    return (
      <Box height="100%" width="100%" bgcolor={theme.palette.background.paper}>
        <Topbar />
        <Box width="100%" paddingBottom={1}>
          {children}
        </Box>
      </Box>
    );
  }

  return <CircularProgress height="100vh" />;
};

export default PrivateLayout;
