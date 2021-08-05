/* eslint-disable react/no-danger */
import React from 'react';
import {
  Box, Button, CircularProgress, Typography, Link
} from '@material-ui/core';
import useAuthorizeBank from 'hooks/useAuthorizeBank';
import useUser from 'hooks/useUser';

const Dashboard = () => {
  const { user } = useUser();
  const { authLink } = useAuthorizeBank();

  return (
    <Box p={2}>
      <Typography variant="h4">Hello {user.data.username}</Typography>
      <Box mt={3}>
        {
          !authLink.isLoading && authLink.data ? (
            <Button
              color="primary"
              variant="contained"
              component={Link}
              href={authLink.data}
              target="_blank"
            >
              Authorize bank
            </Button>

          ) : (
            <CircularProgress />
          )
        }
      </Box>
    </Box>
  );
};

export default Dashboard;
