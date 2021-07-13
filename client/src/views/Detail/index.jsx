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
import { useParams } from 'react-router-dom';
import { Context } from 'context';
import { getColorFromStatus, lastInArray, statuses } from 'utils';

const Detail = ({ user }) => {
  const { roles } = useContext(Context);
  const params = useParams();
  console.log(roles);
  const role = roles.find((role) => role._id === params.id);
  console.log(role);

  if (!roles) {
    return null;
  }

  const currentStatus = lastInArray(role.timeline);

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
          <strong>{role.position}</strong>
          <br />
          <Organization></Organization>
          {role.company}
        </Text>
      </CardHeader>
      <CardBody pad="small">
        <Text>
          <Clock margin="medium" />
          <em>{new Date(role.updatedAt).toLocaleString()}</em>
        </Text>
        <Text>
          <Link />
          Link
        </Text>
        <hr />
        <Text>
          <Map />
          <Location />
          Location:
        </Text>
        <Text></Text>
      </CardBody>

      <CardFooter pad="small" direction="row">
        <Text>Current Status</Text>

        <Select
          style={{
            color: getColorFromStatus(currentStatus.status),
          }}
          options={statuses}
          value={currentStatus?.status}
          fill="horizontal"
        />
      </CardFooter>
    </CardContainer>
  );
};

export default Detail;
