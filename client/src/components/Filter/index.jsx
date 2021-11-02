import { useContext } from 'react';
import { Context } from 'context';
import { Box, CheckBox, Heading } from 'grommet';
import { useState } from 'react';
import { getRolesFromProfiles } from 'utils';

const Filter = () => {
  const { roles, user } = useContext(Context);
  console.log(user);
  const [checked, setChecked] = useState(false);

  return (
    <Box>
      <Box
        border={{ color: 'black', size: 'medium' }}
        direction="row"
        pad="medium"
        margin="small"
        overflow="scroll"
      >
        <Heading textAlign="center">Filter by:</Heading>
        {user.profile.map((type, i) => (
          <CheckBox
            key={`type-${i}`}
            setChecked={checked}
            label={type}
            onChange={(e) => setChecked(e.target.value)}
          />
        ))}
      </Box>
    </Box>
  );
};

export default Filter;
