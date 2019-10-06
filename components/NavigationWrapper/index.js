import { Fragment } from 'react';
import PropTypes from 'prop-types';
import Header from '~components/Header/Container';
import NavBar from '~components/NavBar';

const NavigationWrapper = ({ children }) => (
  <Fragment>
    <Header />
    { children }
    <NavBar />
  </Fragment>
);

NavigationWrapper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default NavigationWrapper;
