import { Fragment } from 'react';
import SignupForm from '~components/SignupForm/Container';
import UnauthenticatedHeader from '~components/UnauthenticatedHeader';
import usePageType from '~hooks/usePageType';
import useAuthentication from '~hooks/useAuthentication';
import useData from '~hooks/useData';
import { getAttributes } from '~store/attributes/actions';
import pageTypes from '~lib/pageTypes';

const SignUp = () => {
  usePageType(pageTypes.signUp);
  useAuthentication();
  useData({
    getData: getAttributes,
  });

  return (
    <Fragment>
      <UnauthenticatedHeader />
      <SignupForm />
    </Fragment>
  );
};

export default SignUp;
