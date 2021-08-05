import { getCards } from 'actions/cards';
import { useQuery } from 'react-query';

const usecards = () => {
  const cards = useQuery('cards', getCards);

  return {
    cards,
  };
};

export default usecards;
