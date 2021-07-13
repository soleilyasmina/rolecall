import { Box } from 'grommet';
const Section = () => {
  return (
    <>
      <Box
        direction="row"
        border={{ color: 'accent-2', size: 'medium' }}
        pad="medium"
        margin="small"
        // overflow="scroll"
      >
        <h1>filter order: featured</h1>
        <h2>role Map</h2>
      </Box>
    </>
  );
};

export default Section;
