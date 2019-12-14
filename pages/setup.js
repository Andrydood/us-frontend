import { Fragment } from 'react';
import SetupForm from '~components/SetupForm/Container';
import usePageType from '~hooks/usePageType';
import useAuthentication from '~hooks/useAuthentication';
import useData from '~hooks/useData';
import { getAttributes } from '~store/attributes/actions';
import pageTypes from '~lib/pageTypes';

const SetUp = () => {
  usePageType(pageTypes.setup);
  useAuthentication({
    redirectOnFail: true,
    redirectToSetup: false,
  });
  useData({
    getData: getAttributes,
  });

  return (
    <Fragment>
      <SetupForm />
    </Fragment>
  );
};

export default SetUp;
