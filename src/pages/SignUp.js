import {
  Box, Button, Card, CardActions, CardContent, CardHeader, CircularProgress, TextField, Typography
} from '@material-ui/core';
import PAGES from 'constants/pages';
import useRegister from 'hooks/useRegister';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';

const SignUp = () => {
  const [form, setForm] = useState({ username: '', password: '', email: '' });
  const { register } = useRegister();

  const signup = (e) => {
    e.preventDefault();
    register.mutate(form);
  };

  if (register.isSuccess) {
    return <Redirect to={PAGES.SIGN_IN} />;
  }

  return (
    <Box mt={10} width="400px" display="flex" justifyContent="center">
      <Box>
        <form onSubmit={signup}>
          <Card>
            <CardHeader title="Sign up" />
            <CardContent>
              <TextField
                type="email"
                label="Email"
                fullWidth
                required
                disabled={register.isLoading}
                value={form.email}
                onChange={(e) => setForm((prev) => ({ ...prev, email: e.target.value }))}
              />
              <TextField
                label="Username"
                fullWidth
                required
                disabled={register.isLoading}
                value={form.username}
                onChange={(e) => setForm((prev) => ({ ...prev, username: e.target.value }))}
              />
              <TextField
                type="password"
                label="Password"
                fullWidth
                required
                disabled={register.isLoading}
                value={form.password}
                onChange={(e) => setForm((prev) => ({ ...prev, password: e.target.value }))}
              />
            </CardContent>
            <Box p={2}>
              <Button
                variant="contained"
                color="primary"
                disabled={register.isLoading}
                type="submit"
                endIcon={register.isLoading && <CircularProgress size={22} />}
              >
                Register
              </Button>
            </Box>
            <CardActions>
              <Link to={PAGES.SIGN_IN}>
                <Typography>
                  Login
                </Typography>
              </Link>
            </CardActions>
          </Card>
        </form>
      </Box>
    </Box>
  );
};

export default SignUp;
