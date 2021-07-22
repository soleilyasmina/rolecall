import {
  Card as CardContainer,
  CardBody,
  CardFooter,
  CardHeader,
  Select,
  Text,
} from 'grommet';
import { Map, Location, Clock, Link, Organization } from 'grommet-icons';
import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Context } from 'context';
import { getColorFromStatus, lastInArray, statuses } from 'utils';

const Detail = () => {
  const { roles } = useContext(Context);
  const params = useParams();
  const role = roles.find((role) => role._id === params.id);
  if (!role) {
    return null;
  }
  const currentStatus = lastInArray(role.timeline);

  return (
    <CardContainer width="1/4" justify="between" margin="small" flex={false}>
      <CardHeader
        pad="small"
        direction="column"
        align="start"
        width="small"
        justify="center"
      >
        <Text margin="xsmall">
          <strong>{role.position}</strong>
        </Text>
      </CardHeader>
      <CardBody pad="small">
        <Text margin="xsmall">
          <Organization />
          {role.company}
        </Text>

        <Text margin="xsmall">
          <Link />
          <a href={role.link}>Role</a>
        </Text>
        <Text margin="xsmall">
          <Location />
          Location:
        </Text>
        <Text margin="xsmall">
          <Clock />
          <em>{new Date(role.updatedAt).toLocaleString()}</em>
        </Text>
      </CardBody>

      <CardFooter margin="medium" direction="row">
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
