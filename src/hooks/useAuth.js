import { signIn } from 'actions/auth';
import PAGES from 'constants/pages';
import moment from 'moment';
import { useMutation } from 'react-query';
import { useHistory } from 'react-router-dom';

const useAuth = () => {
  const history = useHistory();

  const parseJwt = (token) => {
    try {
      return JSON.parse(atob(token.split('.')[1]));
    } catch (e) {
      return null;
    }
  };

  const isAuthenticated = () => {
    const tokenPayload = parseJwt(localStorage.getItem('access'));
    if (tokenPayload) {
      const expireOn = moment
        .unix(tokenPayload.exp)
        .utc();
      return new Date().getTime() < expireOn;
    }
    return false;
  };

  const clearClient = () => localStorage.clear();

  const login = useMutation(signIn, {
    onSuccess: (resData) => {
      localStorage.setItem('access', resData.access);
      localStorage.setItem('refresh', resData.refresh);
      history.push(PAGES.DASHBOARD);
    }
  });

  return { isAuthenticated, clearClient, login };
};

export default useAuth;
