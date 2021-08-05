import { updateCred } from 'actions/user';
import { useState } from 'react';
import { useMutation } from 'react-query';

const useUserCred = () => {
  const [form, setForm] = useState({ clientId: '', secret: '' });

  const update = useMutation(updateCred, {
    onSuccess: () => {
      setForm({ clientId: '', secret: '' });
    }
  });

  const updateCreds = (e) => {
    e.preventDefault();

    update.mutate({ ...form });
  };

  return {
    update,
    updateCreds,
    form,
    setForm
  };
};

export default useUserCred;
