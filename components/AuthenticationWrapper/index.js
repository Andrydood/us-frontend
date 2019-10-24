import { useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';

const AuthenticationWrapper = ({
  authenticationFunction,
  children,
}) => {
  useEffect(() => {
    authenticationFunction();
  }, []);

  return (
    <Fragment>
      { children }
    </Fragment>
  );
};

AuthenticationWrapper.propTypes = {
  authenticationFunction: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default AuthenticationWrapper;
