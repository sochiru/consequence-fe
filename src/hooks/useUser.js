import { getUserInfo, updateUserInfo } from 'actions/user';
import { useEffect, useState } from 'react';
import { useMutation, useQuery } from 'react-query';

const useUser = () => {
  const [form, setForm] = useState({ email: '' });

  const update = useMutation(updateUserInfo, {
    onSuccess: () => {
      setForm({ clientId: '', secret: '' });
    }
  });

  const updateUser = (e) => {
    e.preventDefault();

    update.mutate({ ...form }, {
      onSuccess: (resData) => {
        setForm((prev) => ({ ...prev, username: resData.username, email: resData.email }));
      }
    });
  };

  const user = useQuery('user', getUserInfo, { refetchOnMount: 'always' });

  useEffect(() => {
    if (user.data) {
      setForm((prev) => ({ ...prev, username: user.data.username, email: user.data.email }));
    }
  }, [user.data]);

  return {
    user,
    update,
    updateUser,
    form,
    setForm
  };
};

export default useUser;
