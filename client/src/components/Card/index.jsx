import { Card as CardContainer, CardBody, CardFooter, CardHeader, Select, Text } from "grommet";
import { useContext } from "react";
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
    <CardContainer height=":wcsmall" width="1/4" border={{ color: getColorFromStatus(currentStatus.status), size: "large", style: "solid" }} justify="between" margin="small" flex={false}>
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
        <Select options={statuses} value={currentStatus?.status} fill="horizontal" onChange={handleChange}/>
      </CardFooter>
    </CardContainer>
  )
}

export default Card;
