import API from 'constants/api';
import { CancelToken } from 'axios';
import axios from 'lib/axios';

export const getCards = () => {
  const source = CancelToken.source();

  const promise = axios()
    .get(API.CARDS, { cancelToken: source.token })
    .then((res) => res.data);

  promise.cancel = () => {
    source.cancel('query canceled.');
  };

  return promise;
};

export const getCardTransactions = (context) => {
  const id = context?.queryKey[1];
  const source = CancelToken.source();

  const promise = axios()
    .get(API.CARD_TRANSACTIONS(id), { cancelToken: source.token })
    .then((res) => res.data);

  promise.cancel = () => {
    source.cancel('query canceled.');
  };

  return promise;
};

export const getCardTransactionsPending = (context) => {
  const id = context?.queryKey[1];
  const source = CancelToken.source();

  const promise = axios()
    .get(API.CARD_TRANSACTIONS_PENDING(id), { cancelToken: source.token })
    .then((res) => res.data);

  promise.cancel = () => {
    source.cancel('query canceled.');
  };

  return promise;
};

export default { getCards, getCardTransactions, getCardTransactionsPending };
