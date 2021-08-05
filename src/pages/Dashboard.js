/* eslint-disable react/no-danger */
import React from 'react';
import {
  Box, Button, CircularProgress, Dialog, Typography, Link
} from '@material-ui/core';
import useAuthorizeBank from 'hooks/useAuthorizeBank';
import useUser from 'hooks/useUser';

const Dashboard = () => {
  const { user } = useUser();
  const {
    authLink, authorize, open, handleClose
  } = useAuthorizeBank();

  return (
    <Box p={2}>
      <Typography variant="h4">Hello {user.data.username}</Typography>
      <Box mt={3}>
        <Button
          color="primary"
          variant="contained"
          onClick={() => authorize()}
        >
          Authorize bank
        </Button>
        <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
          {authLink.data
            ? <Link href={authLink.data} target="_blank">Authorize bank</Link>
            : <CircularProgress />}
        </Dialog>
      </Box>
    </Box>
  );
};

export default Dashboard;
