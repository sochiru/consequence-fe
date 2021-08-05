import {
  Box, Button, Card, CardActions, CardContent, CardHeader, TextField, Typography
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
    <Box mt={10} width="400px" display="flex" justifyContent="center">
      <Box>
        <form onSubmit={login}>
          <Card>
            <CardHeader title="Sign in" />
            <CardContent>
              <TextField
                label="Username"
                fullWidth
                required
                value={form.username}
                onChange={(e) => setForm((prev) => ({ ...prev, username: e.target.value }))}
              />
              <TextField
                type="password"
                label="Password"
                fullWidth
                required
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
              <Button variant="contained" color="primary" type="submit">
                Login
              </Button>
            </Box>
            <CardActions>
              <Link to={PAGES.SIGN_UP}>
                <Typography>
                  Register
                </Typography>
              </Link>
            </CardActions>
          </Card>
        </form>
      </Box>
    </Box>
  );
};

export default SignIn;
