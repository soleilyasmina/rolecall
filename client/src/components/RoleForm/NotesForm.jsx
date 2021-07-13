import { CheckBox, FormField, Heading, TextArea, TextInput } from "grommet";

const NotesForm = ({ form, suggestions }) => {
  return (
    <>
      <Heading margin="small" color="dark-1" level="4">optional</Heading>
      <FormField
        name="source-label"
        htmlFor="source"
        label={form.source && "source"}
      >
        <TextInput type="text" name="source" placeholder="source" suggestions={suggestions.source} />
      </FormField>
      <FormField
        name="contact-label"
        htmlFor="contact"
        label={form.contact && "contact"}
      >
        <TextInput type="text" name="contact" placeholder="contact" suggestions={suggestions.contact} />
      </FormField>
      <FormField
        name="notes-label"
        htmlFor="notes"
        label={form.notes && "notes"}
      >
        <TextArea type="text" name="notes" placeholder="notes" />
      </FormField>
      <FormField
        name="referral-label"
        htmlFor="referral"
        label={"referral?"}
        direction="row"
        justify="between"
      >
        <CheckBox name="referral" />
      </FormField>
    </>
  )
};

export default NotesForm;
