import { getAuthLink } from 'actions/auth';
import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import useUser from './useUser';

const useAuthorizeBank = () => {
  const [enable, setEnable] = useState(false);
  const { user } = useUser();

  const authLink = useQuery('authLink', getAuthLink, {
    enabled: enable,
    onSuccess: () => {
      setEnable(false);
    },
    onError: () => {
      setEnable(false);
    }
  });

  useEffect(() => {
    if (!user.data?.authorized) {
      setEnable(true);
    } else {
      setEnable(false);
    }
  }, [user.data]);

  return {
    authLink,
  };
};

export default useAuthorizeBank;
