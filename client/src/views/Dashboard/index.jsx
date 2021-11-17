import { useContext } from 'react';
import { Context } from 'context';
import { getRolesFromProfiles } from 'utils';
import Section from 'components/Section';
import Filter from 'components/Filter';
import { Box } from 'grommet';

const Dashboard = ({ role }) => {
  const { roles, user, toggleCheck } = useContext(Context);
  if (!user) {
    return null;
  }

  const rolesFromProfiles = getRolesFromProfiles(user, roles);
  const filterType = (e) => {
    toggleCheck();
  };

  return (
    <Box direction="column" pad="small">
      <Filter filterType={filterType} />
      {rolesFromProfiles.map((profileRoles, i) => (
        <div>
          <Section
            key={`section-${i}`}
            roles={profileRoles}
            profile={user.profile[i]}
          />
        </div>
      ))}
    </Box>
  );
};

export default Dashboard;
