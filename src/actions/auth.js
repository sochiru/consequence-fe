import API from 'constants/api';
import { CancelToken } from 'axios';
import axios from 'lib/axios';
import axiosPublic from 'lib/axiosPublic';

export const getAuthLink = () => {
  const source = CancelToken.source();

  const promise = axios()
    .get(API.AUTH_LINK, { cancelToken: source.token })
    .then((res) => res.data);

  promise.cancel = () => {
    source.cancel('query canceled.');
  };

  return promise;
};

export const signIn = (context) => axiosPublic()
  .post(API.SIGN_IN, { ...context })
  .then((res) => res.data);

export default { getAuthLink, signIn };
