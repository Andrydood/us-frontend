import AuthenticationWrapper from '~components/AuthenticationWrapper/Container';
import DataWrapper from '~components/DataWrapper/AttributesContainer';
import NavigationWrapper from '~components/NavigationWrapper';
import NewProjectForm from '~components/NewProjectForm/Container';

const NewProject = () => (
  <AuthenticationWrapper redirectOnFail>
    <DataWrapper>
      <NavigationWrapper>
        <NewProjectForm />
      </NavigationWrapper>
    </DataWrapper>
  </AuthenticationWrapper>
);

export default NewProject;
