import { registerUser } from 'actions/user';
import { useMutation } from 'react-query';

const useRegister = () => {
  const register = useMutation(registerUser);

  return {
    register
  };
};

export default useRegister;
