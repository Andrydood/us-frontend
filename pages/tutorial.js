import NavigationWrapper from '~components/NavigationWrapper';
import useAuthentication from '~hooks/useAuthentication';

const Tutorial = () => {
  useAuthentication({ redirectOnFail: true });

  return (
    <NavigationWrapper>
      <div />
    </NavigationWrapper>
  );
};

export default Tutorial;
