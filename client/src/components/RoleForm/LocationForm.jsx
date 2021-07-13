import { CheckBox, FormField, Heading, TextInput } from "grommet";

const LocationForm = ({ form, setForm, suggestions }) => {
  return (
    <>
      <Heading margin="small" color="dark-1" level="4">optional</Heading>
      <FormField
        name="minSalary-label"
        htmlFor="minSalary"
        label={form.minSalary && "min. salary"}
      >
        <TextInput type="number" name="minSalary" placeholder="min. salary" onChange={(e) => setForm({ ...form, minSalary: e.target.valueAsNumber || 0 })} />
      </FormField>
      <FormField
        name="maxSalary-label"
        htmlFor="maxSalary"
        label={form.maxSalary && "max. salary"}
      >
        <TextInput type="number" name="maxSalary" placeholder="max. salary" onChange={(e) => setForm({ ...form, maxSalary: e.target.valueAsNumber || 0 })} />
      </FormField>
      <FormField
        name="location-label"
        htmlFor="location"
        label={form.location && "location"}
      >
        <TextInput type="text" name="location" placeholder="location" />
      </FormField>
      <FormField
        name="remote-label"
        htmlFor="remote"
        label={"remote?"}
        direction="row"
        justify="between"
      >
        <CheckBox name="remote" />
      </FormField>
    </>
  )
};

export default LocationForm;
