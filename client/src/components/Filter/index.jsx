import { useContext } from 'react';
import { Context } from 'context';
import { Box, CheckBox, Heading } from 'grommet';
import { useState } from 'react';

const Filter = () => {
  const { roles, user } = useContext(Context);
  console.log(user);
  const [checked, setChecked] = useState(false);

  return (
    <Box>
      <Box
        border={{ color: 'black', size: 'medium' }}
        direction="column"
        pad="medium"
        // margin="small"
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
              setChecked={checked}
              label={type}
              onChange={(e) => setChecked(e.target.value)}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Filter;
