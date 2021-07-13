import {
  Card as CardContainer,
  CardBody,
  CardFooter,
  CardHeader,
  Select,
  Text,
  Button,
} from 'grommet';
import { Map, Location, Clock, Link, Organization } from 'grommet-icons';
import { useContext } from 'react';
import { Context } from 'context';

const Detail = ({ role }) => {
  const { user, roles, fetchRoles } = useContext(Context);
  // const { _id, company, position, timeline, updatedAt } = role;

  if (!user) {
    return null;
  }

  return (
    <CardContainer
      height=":wcsmall"
      width="1/4"
      justify="between"
      margin="small"
      flex={false}
    >
      <CardHeader
        pad="small"
        direction="column"
        align="start"
        width="small"
        justify="center"
      >
        <Text>
          <strong>position{/* {position} */}</strong>
          <br />
          <Organization></Organization> company
          {/* {company} */}
        </Text>
      </CardHeader>
      <CardBody pad="small">
        <Text>
          <Clock></Clock>
          {/* <em>{new Date(updatedAt).toLocaleString()}</em> */} updatedAt
        </Text>
        <Text>
          <Link></Link>Link
        </Text>
        <hr />
        <Text>
          <Map></Map>
          <Location></Location>Location:
        </Text>
        <Text></Text>
      </CardBody>

      <CardFooter pad="small" direction="row">
        <Text>Current Status</Text>

        {/* <Select
            // options={statuses}
            // value={currentStatus?.status}
            // fill="horizontal"
            // onChange={handleChange}
          /> */}
      </CardFooter>
    </CardContainer>
  );
};

export default Detail;
