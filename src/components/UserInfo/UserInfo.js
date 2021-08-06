import React from 'react';
import {
  Box, Button, Card, CardContent, CardHeader, CircularProgress, TextField, Typography,
} from '@material-ui/core';
import useUser from 'hooks/useUser';

const UserInfo = () => {
  const {
    user, update: updateMutation, updateUser, form, setForm
  } = useUser();

  if (user.data) {
    return (
      <Card>
        <CardHeader title="User info" />
        <CardContent>
          <Box mt={3} width="400px">
            <TextField
              label="Username"
              fullWidth
              required
              disabled
              value={form.username || ''}
            />
            <Box mt={1} />
            <form onSubmit={updateUser}>
              <TextField
                label="Email"
                fullWidth
                required
                disabled={updateMutation.isLoading}
                value={form.email}
                onChange={(e) => setForm((prev) => ({ ...prev, email: e.target.value }))}
              />
              <Box mt={1} />
              <Box mt={2}>
                {updateMutation.isError
              && (
              <Typography variant="body2" color="error">
                {updateMutation.error.response.data.detail}
              </Typography>
              )}
              </Box>
              <Box mt={2}>
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
        </CardContent>
      </Card>
    );
  }

  return <CircularProgress />;
};

export default UserInfo;
