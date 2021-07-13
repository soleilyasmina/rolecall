import { Button, Box, Card as CardContainer, CardFooter, CardHeader, Select, Text } from "grommet";
import { Edit, More } from "grommet-icons";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "context";
import { updateStatus } from "services";
import { getColorFromStatus, lastInArray, statuses } from "utils";

const Card = ({ role }) => {
  const { fetchRoles } =  useContext(Context);
  const { _id, company, position, timeline, updatedAt } = role;

  const currentStatus = lastInArray(timeline);

  const handleChange = async (e) => {
    await updateStatus(_id, e.target.value);
    await fetchRoles();
  }

  return (
    <CardContainer height="medium" width="1/4" border={{ color: getColorFromStatus(currentStatus.status), size: "large", style: "solid" }} justify="between" margin="small" flex={false} position="relative">
      <CardHeader pad="small" direction="column" align="start" width="small">
        <Text>
          <strong>{position}</strong>
          <br />
          {company}
        </Text>
      </CardHeader>
      <CardFooter pad="small" direction="column">
        <Text alignSelf="start">
          <em>{new Date(updatedAt).toLocaleString()}</em>
        </Text>
        <Select options={statuses} value={currentStatus?.status} fill="horizontal" onChange={handleChange}/>
        <Box direction="row" background="light-2" fill pad="xxsmall" justify="around">
          <Link to={`/role/${_id}`}>
            <Button icon={<More color="plain" />} hoverIndicator />
          </Link>
          <Link to={`/edit/${_id}`}>
            <Button icon={<Edit color="plain" />} hoverIndicator />
          </Link>
        </Box>
      </CardFooter>
    </CardContainer>
  )
}

export default Card;
