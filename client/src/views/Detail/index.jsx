import {
  Card as CardContainer,
  CardBody,
  CardFooter,
  CardHeader,
  Select,
  Text,
} from 'grommet';
import { useContext } from 'react';
import { Context } from 'context';
import Card from 'components/Card';

const Detail = () => {
  const { user, roles } = useContext(Context);
  const { _id, company, position, timeline, updatedAt } = roles;
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
      <CardHeader pad="small" direction="column" align="start" width="small">
        <Text>
          <strong>{position}</strong>
          <br />
          {company}
        </Text>
      </CardHeader>
      <CardBody pad="small">
        <Text>
          <em>{new Date(updatedAt).toLocaleString()}</em>
        </Text>
      </CardBody>
      <CardFooter pad="small" direction="column">
        {/* <Select
          options={statuses}
          value={currentStatus?.status}
          fill="horizontal"
          onChange={handleChange}
        /> */}
      </CardFooter>
    </CardContainer>
  );
};

export default Detail;
