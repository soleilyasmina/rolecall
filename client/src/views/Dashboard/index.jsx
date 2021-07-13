import Card from 'components/Card';
import { Box } from 'grommet';

const Dashboard = ({ role }) => {
  return (
    <>
      <Box
        direction="column"
        border={{ color: 'neutral-3', size: 'large' }}
        pad="small"
      >
        <Box
          direction="row"
          border={{ color: 'accent-2', size: 'medium' }}
          pad="medium"
          margin="small"
          // overflow="scroll"
        ></Box>
        <Box
          direction="row"
          border={{ color: 'accent-4', size: 'medium' }}
          pad="medium"
          margin="small"
          // overflow="scroll"
        ></Box>
        <Box
          direction="row"
          border={{ color: 'accent-3', size: 'medium' }}
          pad="medium"
          margin="small"
          // overflow="scroll"
        ></Box>
      </Box>
    </>
  );
};

export default Dashboard;
