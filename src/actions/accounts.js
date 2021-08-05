import API from 'constants/api';
import { CancelToken } from 'axios';
import axios from 'lib/axios';

export const getAccounts = () => {
  const source = CancelToken.source();

  const promise = axios()
    .get(API.ACCOUNTS, { cancelToken: source.token })
    .then((res) => res.data);

  promise.cancel = () => {
    source.cancel('query canceled.');
  };

  return promise;
};

export const getAccountTransactions = (context) => {
  const id = context?.queryKey[1];
  const source = CancelToken.source();

  const promise = axios()
    .get(API.ACCOUNT_TRANSACTIONS(id), { cancelToken: source.token })
    .then((res) => res.data);

  promise.cancel = () => {
    source.cancel('query canceled.');
  };

  return promise;
};

export const getAccountTransactionsPending = (context) => {
  const id = context?.queryKey[1];
  const source = CancelToken.source();

  const promise = axios()
    .get(API.ACCOUNT_TRANSACTIONS_PENDING(id), { cancelToken: source.token })
    .then((res) => res.data);

  promise.cancel = () => {
    source.cancel('query canceled.');
  };

  return promise;
};

export default { getAccounts };
