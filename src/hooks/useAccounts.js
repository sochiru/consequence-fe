import { getAccounts } from 'actions/accounts';
import { useQuery } from 'react-query';

const useAccounts = () => {
  const accounts = useQuery('accounts', getAccounts);

  return {
    accounts,
  };
};

export default useAccounts;
