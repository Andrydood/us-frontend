import NavigationWrapper from '~components/NavigationWrapper';
import NewProjectForm from '~components/NewProjectForm/Container';
import usePageType from '~hooks/usePageType';
import useAuthentication from '~hooks/useAuthentication';
import useData from '~hooks/useData';
import { getAttributes } from '~store/attributes/actions';
import pageTypes from '~lib/pageTypes';

const NewProject = () => {
  usePageType(pageTypes.newProject);
  useAuthentication({ redirectOnFail: true });
  useData({
    getData: getAttributes,
  });

  return (
    <NavigationWrapper>
      <NewProjectForm />
    </NavigationWrapper>
  );
};

export default NewProject;
