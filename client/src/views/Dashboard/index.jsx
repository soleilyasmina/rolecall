import Card from 'components/Card';
import Section from 'components/Section';
import { getRoles } from 'services';
import { Box } from 'grommet';

const Dashboard = ({ role }) => {
  //getAllRoles

  const getAllRoles = () => {
    await getRoles();
  };
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
