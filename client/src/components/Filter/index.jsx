import { useContext } from 'react';
import { Context } from 'context';
import { Box, CheckBox, Heading } from 'grommet';

const Filter = (props) => {
  const { user, toggleCheck } = useContext(Context);
  const { filterType } = props;
  console.log(user);
  return (
    <Box>
      <Box
        border={{ color: 'black', size: 'medium' }}
        direction="column"
        pad="medium"
        overflow="scroll"
      >
        <Heading textAlign="left" level="3">
          Filter by:
        </Heading>
        <Box direction="row" pad="small" margin="small" overflow="scroll">
          {user.profile.map((type, i) => (
            <CheckBox
              pad="small"
              key={`type-${i}`}
              setChecked={toggleCheck}
              label={type}
              onChange={filterType}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Filter;
