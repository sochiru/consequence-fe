import { getAccountTransactions, getAccountTransactionsPending } from 'actions/accounts';
import { useState } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';

const useAccountDetail = () => {
  const { id } = useParams();
  const [value, setValue] = useState('transactions');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const accountTransactions = useQuery([`account-${id}-transactions`, id], getAccountTransactions);
  const accountTransactionsPending = useQuery([`account-${id}-transactions-pending`, id],
    getAccountTransactionsPending);

  return {
    accountTransactions,
    accountTransactionsPending,
    value,
    handleChange
  };
};

export default useAccountDetail;
