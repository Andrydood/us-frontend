import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authenticateFromToken, redirectOnIncompleteSetup } from '~store/authentication/actions';

const useAuthentication = (settings = {}) => {
  const { redirectOnFail = false, redirectToSetup = true } = settings;
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(state => state.authentication.isAuthenticated);

  useEffect(() => {
    dispatch(authenticateFromToken(redirectOnFail));
  }, []);

  useEffect(() => {
    if (isAuthenticated && redirectToSetup) {
      dispatch(redirectOnIncompleteSetup());
    }
  }, [isAuthenticated]);
};

export default useAuthentication;
