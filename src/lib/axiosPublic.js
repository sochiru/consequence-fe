import axios from 'axios';
import ENV from 'constants/env';

export default () => {
  const baseURL = ENV.API_BASE_URL;
  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };

  const axiosInstance = axios.create({
    baseURL,
    headers,
  });

  return axiosInstance;
};
