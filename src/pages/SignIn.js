import {
  Box, Button, Card, CardActions, CardContent, CardHeader, CircularProgress, TextField, Typography
} from '@material-ui/core';
import PAGES from 'constants/pages';
import useAuth from 'hooks/useAuth';
import React, { useState } from 'react';
import { Link, Redirect, useLocation } from 'react-router-dom';

const SignIn = () => {
  const location = useLocation();
  const [form, setForm] = useState({ username: '', password: '' });
  const { isAuthenticated, login: loginMutation } = useAuth();

  const { from } = location.state || { from: { pathname: '/' } };

  const login = (e) => {
    e.preventDefault();
    loginMutation.mutate(form);
  };

  if (isAuthenticated()) {
    return <Redirect to={from} />;
  }

  return (
    <Box mt={10}>
      <Box>
        <form onSubmit={login}>
          <Card style={{ width: 400 }}>
            <CardHeader title="Sign in" />
            <CardContent>
              <TextField
                label="Username"
                fullWidth
                required
                disabled={loginMutation.isLoading}
                value={form.username}
                onChange={(e) => setForm((prev) => ({ ...prev, username: e.target.value }))}
              />
              <Box mt={1} />
              <TextField
                type="password"
                label="Password"
                fullWidth
                required
                disabled={loginMutation.isLoading}
                value={form.password}
                onChange={(e) => setForm((prev) => ({ ...prev, password: e.target.value }))}
              />

              <Box mt={2}>
                {loginMutation.isError
                && (
                <Typography variant="body2" color="error">
                  {loginMutation.error.response.data.detail}
                </Typography>
                )}
              </Box>
            </CardContent>
            <Box p={2}>
              <Button
                variant="contained"
                color="primary"
                disabled={loginMutation.isLoading}
                endIcon={loginMutation.isLoading && <CircularProgress size={22} />}
                type="submit"
              >
                Login
              </Button>
            </Box>
            <CardActions>
              <Typography component={Link} to={PAGES.SIGN_UP} color="inherit">
                Register
              </Typography>
            </CardActions>
          </Card>
        </form>
      </Box>
    </Box>
  );
};

export default SignIn;
