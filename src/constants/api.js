import ENV from 'constants/env';

const { API_VERSION } = ENV;

/**
 * Enum for API endpoint constants
 */
const API = {
  /* USERS */
  USER_INFO: `${API_VERSION}/me`,
  SIGN_IN: `${API_VERSION}/jwt`,
  SIGN_UP: `${API_VERSION}/users/register`,
  AUTH_LINK: `${API_VERSION}/auth/link`,
  CHANGE_PASSWORD: `${API_VERSION}/change-password`,

  CARDS: `${API_VERSION}/cards`,
  CARD_DETAIL: (cardId) => `${API_VERSION}/cards/${cardId}`,
  CARD_TRANSACTIONS: (cardId) => `${API_VERSION}/cards/${cardId}/transactions`,
  CARD_TRANSACTIONS_PENDING: (cardId) => `${API_VERSION}/cards/${cardId}/transactions/pending`,
  ACCOUNTS: `${API_VERSION}/accounts`,
  ACCOUNT_DETAIL: (accountId) => `${API_VERSION}/accounts/${accountId}`,
  ACCOUNT_TRANSACTIONS: (accountId) => `${API_VERSION}/accounts/${accountId}/transactions`,
  ACCOUNT_TRANSACTIONS_PENDING: (accountId) => `${API_VERSION}/accounts/${accountId}/transactions/pending`,
};

export default API;
