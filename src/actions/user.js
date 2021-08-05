import API from 'constants/api';
import { CancelToken } from 'axios';
import axios from 'lib/axios';
import axiosPublic from 'lib/axiosPublic';

export const getUserInfo = () => {
  const source = CancelToken.source();

  const promise = axios()
    .get(API.USER_INFO, { cancelToken: source.token })
    .then((res) => res.data);

  promise.cancel = () => {
    source.cancel('query canceled.');
  };

  return promise;
};

export const registerUser = (context) => axiosPublic()
  .post(API.SIGN_UP, { ...context })
  .then((res) => res.data);

export default { getUserInfo, registerUser };
