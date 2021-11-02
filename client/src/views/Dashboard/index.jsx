import { useContext } from 'react';
import { Context } from 'context';
import { getRolesFromProfiles } from 'utils';
import Section from 'components/Section';
import Filter from 'components/Filter';
import { Box } from 'grommet';

const Dashboard = ({ role }) => {
  const { roles, user } = useContext(Context);
  if (!user) {
    return null;
  }

  const rolesFromProfiles = getRolesFromProfiles(user, roles);

  return (
    <Box direction="column" pad="small">
      {rolesFromProfiles.map((profileRoles, i) => (
        <div>
          <Filter />
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
