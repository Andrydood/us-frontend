import { useDispatch } from 'react-redux';
import { authenticateFromToken } from '~store/authentication/actions';

const useAuthentication = (settings = {}) => {
  const { redirectOnFail = false } = settings;
  const dispatch = useDispatch();

  dispatch(authenticateFromToken(redirectOnFail));
};

export default useAuthentication;
