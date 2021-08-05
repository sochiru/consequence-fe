import { getCardTransactions, getCardTransactionsPending } from 'actions/cards';
import { useState } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';

const useCardDetail = () => {
  const { id } = useParams();
  const [value, setValue] = useState('transactions');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const cardTransactions = useQuery([`card-${id}-transactions`, id], getCardTransactions);
  const cardTransactionsPending = useQuery([`card-${id}-transactions-pending`, id],
    getCardTransactionsPending);

  return {
    cardTransactions,
    cardTransactionsPending,
    value,
    handleChange
  };
};

export default useCardDetail;
