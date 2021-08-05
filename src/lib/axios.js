import axios from 'axios';
import ENV from 'constants/env';
import PAGES from 'constants/pages';

export default (history = null) => {
  const baseURL = ENV.API_BASE_URL;
  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };

  if (localStorage.access) {
    headers.Authorization = `Bearer ${localStorage.access}`;
  }

  const axiosInstance = axios.create({
    baseURL,
    headers,
  });

  axiosInstance.interceptors.response.use(
    (response) => new Promise((resolve) => {
      resolve(response);
    }),
    (error) => {
      if (error.response) {
        switch (error.response.status) {
          case 401:
          case 403:
            // eslint-disable-next-line no-console
            console.log(`Error: ${error.response.status}`);
            if (history) {
              history.push(`${PAGES.SIGN_OUT}`);
            }
            break;
          default:
            // Do nothing
        }
      }

      return Promise.reject(error);
    }
  );

  return axiosInstance;
};
