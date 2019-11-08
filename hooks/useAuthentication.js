import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { authenticateFromToken } from '~store/authentication/actions';

const useAuthentication = (settings = {}) => {
  const { redirectOnFail = false } = settings;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authenticateFromToken(redirectOnFail));
  }, []);
};

export default useAuthentication;
