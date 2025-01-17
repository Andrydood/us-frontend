import NavigationWrapper from '~components/NavigationWrapper';
import useAuthentication from '~hooks/useAuthentication';

const Help = () => {
  useAuthentication({ redirectOnFail: true });

  return (
    <NavigationWrapper>
      <div />
    </NavigationWrapper>
  );
};

export default Help;
