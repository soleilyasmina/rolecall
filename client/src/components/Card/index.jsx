import { Card as CardContainer, CardFooter, CardHeader, Select, Text } from "grommet";
import { getColorFromStatus, lastInArray, statuses } from "utils";

const Card = ({ role }) => {
  const { company, position, timeline } = role;

  const currentStatus = lastInArray(timeline);

  return (
    <CardContainer height="small" width="medium" border={{ color: getColorFromStatus(currentStatus.status), size: "large", style: "solid" }} justify="between">
      <CardHeader pad="small" direction="column" align="start" width="small">
        <Text>
          <strong>{position}</strong>
          <br />
          {company}
        </Text>
      </CardHeader>
      <CardFooter pad="small">
        <Select options={statuses} value={currentStatus?.status} fill="horizontal"/>
      </CardFooter>
    </CardContainer>
  )
}

export default Card;
