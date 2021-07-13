import { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Context } from 'context';
import { getRoles } from 'services';
import { newestFound } from 'utils';
import Card from 'components/Card';
import Section from 'components/Section';
import { Box } from 'grommet';

const Dashboard = ({ role }) => {
  const { roles, user } = useContext(Context);
  console.log(roles);
  console.log(user);

  // login / verify -- conditional to guard or guard routes to prevent non-users from viewing pages
  // pull user id
  // access user profile
  // filter through to sort roles for respective space
  // map through roles from user profile to display cards
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
