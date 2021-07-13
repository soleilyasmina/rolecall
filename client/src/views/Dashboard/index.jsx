import Card from 'components/Card';
import Section from 'components/Section';
import { Box } from 'grommet';

const Dashboard = ({ role }) => {
  //getAllRoles
  //map through roles to display cards
  //
  return (
    <>
      <Box
        direction="column"
        border={{ color: 'neutral-3', size: 'large' }}
        pad="small"
      >
        <Section />
      </Box>
    </>
  );
};

export default Dashboard;
