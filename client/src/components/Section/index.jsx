import { Box, Heading } from 'grommet';
import Card from "components/Card";

const Section = (props) => {
  const { profile, roles } = props;
  return (
    <Box>
      <Heading textAlign="center">{profile}</Heading>
      <Box
        border={{ color: 'light-5', size: 'medium' }}
        direction="row"
        pad="medium"
        margin="small"
        overflow="scroll"
      >
        {roles.map((role) => <Card key={`${profile}-${role._id}`} role={role} />)}
      </Box>
    </Box>
  );
};

export default Section;
