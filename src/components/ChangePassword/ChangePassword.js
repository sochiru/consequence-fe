import React from 'react';
import {
  Box, Button, Card, CardContent, CardHeader, CircularProgress, TextField, Typography,
} from '@material-ui/core';
import useChangePassword from 'hooks/useChangePassword';

const ChangePassword = () => {
  const {
    changePassword, changePasswordSubmit, form, setForm
  } = useChangePassword();

  return (
    <Card>
      <CardHeader title="Change Password" />
      <CardContent>
        <Box mt={3} width="400px">
          <form onSubmit={changePasswordSubmit}>
            <TextField
              type="password"
              label="Password"
              fullWidth
              required
              disabled={changePassword.isLoading}
              value={form.password}
              onChange={(e) => setForm((prev) => ({ ...prev, password: e.target.value }))}
              error={changePassword.isError}
              helperText={changePassword?.error?.response?.data?.password
                && changePassword?.error?.response?.data?.password[0]}
            />
            <Box mt={1} />
            <TextField
              type="password"
              label="New Password"
              fullWidth
              required
              disabled={changePassword.isLoading}
              value={form.newPassword}
              onChange={(e) => setForm((prev) => ({ ...prev, newPassword: e.target.value }))}
              error={changePassword.isError}
              helperText={changePassword?.error?.response?.data?.new_password
                && changePassword?.error?.response?.data?.new_password[0]}
            />
            <Box mt={1} />
            <TextField
              type="password"
              label="Confirm Password"
              fullWidth
              required
              disabled={changePassword.isLoading}
              value={form.confirmPassword}
              onChange={(e) => setForm((prev) => ({ ...prev, confirmPassword: e.target.value }))}
              helperText={changePassword?.error?.response?.data?.confirm_password
                && changePassword?.error?.response?.data?.confirm_password.data[0]}
            />
            <Box mt={1} />
            <Box mt={2}>
              {changePassword.isError
                && (
                <Typography variant="body2" color="error">
                  {changePassword.error.response.data.detail}
                </Typography>
                )}
            </Box>
            <Box mt={2}>
              <Button
                variant="contained"
                color="primary"
                disabled={changePassword.isLoading}
                endIcon={changePassword.isLoading && <CircularProgress size={22} />}
                type="submit"
              >
                Change password
              </Button>
            </Box>
          </form>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ChangePassword;
