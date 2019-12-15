import { useEffect } from 'react';
import { useSelector } from 'react-redux';

const useRedirectToBrowseOnAuthentication = () => {
  const isAuthenticated = useSelector(state => state.authentication.isAuthenticated);
  const initialSetupIsComplete = useSelector(state => state.authentication.initialSetupIsComplete);

  useEffect(() => {
    if (isAuthenticated && initialSetupIsComplete) {
      window.location.href = '/browse';
    }
  }, [isAuthenticated, initialSetupIsComplete]);
};

export default useRedirectToBrowseOnAuthentication;
