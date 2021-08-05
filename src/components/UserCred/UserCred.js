import React from 'react';
import {
  Box, Button, CircularProgress, TextField, Typography,
} from '@material-ui/core';
import useUserCred from 'hooks/useUserCred';

const UserCred = () => {
  const {
    update: updateMutation, updateCreds, form, setForm
  } = useUserCred();

  return (
    <Box mt={3} width="400px">
      <form onSubmit={updateCreds}>
        <TextField
          label="Client ID"
          fullWidth
          required
          disabled={updateMutation.isLoading}
          value={form.clientId}
          onChange={(e) => setForm((prev) => ({ ...prev, clientId: e.target.value }))}
        />
        <Box mt={1} />
        <TextField
          type="password"
          label="Client secret"
          fullWidth
          required
          disabled={updateMutation.isLoading}
          value={form.secret}
          onChange={(e) => setForm((prev) => ({ ...prev, secret: e.target.value }))}
        />
        <Box mt={2}>
          {updateMutation.isError
            && (
            <Typography variant="body2" color="error">
              {updateMutation.error.response.data.detail}
            </Typography>
            )}
        </Box>
        <Box p={2}>
          <Button
            variant="contained"
            color="primary"
            disabled={updateMutation.isLoading}
            endIcon={updateMutation.isLoading && <CircularProgress size={22} />}
            type="submit"
          >
            Update
          </Button>
        </Box>
      </form>

    </Box>

  );
};

export default UserCred;
