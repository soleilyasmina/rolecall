import {
  Card as CardContainer,
  CardBody,
  CardFooter,
  CardHeader,
  Select,
  Text,
  Anchor,
  Paragraph,
  Heading,
} from 'grommet';
import { Location, Clock, Link, Organization } from 'grommet-icons';
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
        <Heading margin="xsmall" level="2">
          {role.position}
        </Heading>
      </CardHeader>
      <CardBody pad="small">
        <Paragraph margin="xxsmall">
          <Organization />
          <Text margin="xsmall">{role.company}</Text>
        </Paragraph>

        <Paragraph margin="xxsmall">
          <Link />
          <Text margin="xsmall">
            <Anchor href={role.link} label="Role"></Anchor>
          </Text>
        </Paragraph>

        <Paragraph margin="xxsmall">
          <Location />
          <Text margin="xsmall">
            Location:
            <Text margin="small">
              {role.location ? role.location : <em>no location available</em>}
            </Text>
          </Text>
        </Paragraph>

        <Paragraph margin="xxsmall">
          <Clock />
          <Text margin="xsmall">
            <em>{new Date(role.updatedAt).toLocaleString()}</em>
          </Text>
        </Paragraph>
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
