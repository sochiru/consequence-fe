import { getUserInfo } from 'actions/user';
import { useQuery } from 'react-query';

const useUser = () => {
  const user = useQuery('user', getUserInfo, { refetchOnMount: 'always' });

  return {
    user,
  };
};

export default useUser;
