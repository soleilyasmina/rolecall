import { FormField, Heading, Select, TextInput } from "grommet";
import { statuses } from "utils";

const EssentialForm = ({ form, suggestions }) => {
  return (
    <>
      <Heading margin="small" color="red" level="4">required</Heading>
      <FormField
        name="position-label"
        htmlFor="position"
        label={form.position && "position"}
        required={!form.position}
      >
        <TextInput type="text" name="position" placeholder="position" suggestions={suggestions.position} />
      </FormField>
      <FormField
        name="company-label"
        htmlFor="company"
        label={form.company && "company"}
        required={!form.company}
      >
        <TextInput type="text" name="company" placeholder="company" suggestions={suggestions.company} />
      </FormField>
      <FormField
        name="link-label"
        htmlFor="link"
        label={form.link && "link"}
        required={!form.link}
      >
        <TextInput type="url" name="link" placeholder="link" />
      </FormField>
      <FormField
        name="timeline-label"
        htmlFor="timeline"
        label={form.timeline && "status"}
        required={!form.timeline}
      >
        <Select
          name="timeline"
          placeholder="current status"
          options={statuses}
        />
      </FormField>
    </>
  )
};

export default EssentialForm;
