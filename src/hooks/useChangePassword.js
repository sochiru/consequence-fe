import { changePassword as changePasswordAction } from 'actions/user';
import PAGES from 'constants/pages';
import { useState } from 'react';
import { useMutation } from 'react-query';
import { useHistory } from 'react-router-dom';
import useAuth from './useAuth';

const useChangePassword = () => {
  const [form, setForm] = useState({ password: '', newPassword: '', confirmPassword: '' });
  const { clearClient } = useAuth();
  const history = useHistory();

  const changePassword = useMutation(changePasswordAction, {
    onSuccess: () => {
      setForm({ password: '', newPassword: '', confirmPassword: '' });
      clearClient();
      history.push(PAGES.SIGN_IN);
    }
  });

  const changePasswordSubmit = (e) => {
    e.preventDefault();

    const payload = {
      password: form.password,
      new_password: form.newPassword,
      confirm_password: form.confirmPassword
    };

    changePassword.mutate({ ...payload });
  };

  return {
    form,
    setForm,
    changePassword,
    changePasswordSubmit
  };
};

export default useChangePassword;
