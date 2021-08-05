import { getAuthLink } from 'actions/auth';
import { useState } from 'react';
import { useQuery } from 'react-query';

const useAuthorizeBank = () => {
  const [enable, setEnable] = useState(false);
  const [open, setOpen] = useState(false);

  const authLink = useQuery('authLink', getAuthLink, {
    enabled: enable,
    onSuccess: () => {
      setEnable(false);
    },
    onError: () => {
      setEnable(false);
    }
  });

  const authorize = () => {
    setEnable(true);
    setOpen(true);
  };

  const handleClose = (e) => {
    e.preventDefault();
    setOpen(false);
  };

  return {
    authLink,
    authorize,
    open,
    handleClose
  };
};

export default useAuthorizeBank;
