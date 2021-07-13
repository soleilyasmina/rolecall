import { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { Form, FormField, Select, TextInput, Button } from "grommet";
import { Context } from "context";
import { createRole } from "services";
import { statuses } from "utils";

const Create = () => {
  const { setRoles } = useContext(Context);
  const history = useHistory();

  const [form, setForm] = useState({
    position: "",
    company: "",
    timeline: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    const roleToCreate = { 
      ...form, 
      timeline: [{ status: form.timeline, when: new Date() }] 
    };
    const newRole = await createRole(roleToCreate);
    setRoles((curr) => [...curr, newRole]);
    history.push("/dashboard");
  };

  return (
    <>
      <Form value={form} onSubmit={handleSubmit}>
        <FormField
          name="position-label"
          htmlFor="position"
          label={form.position && "position"}
        >
          <TextInput
            type="text"
            name="position"
            placeholder="position"
            value={form.position}
            onChange={handleChange}
          />
        </FormField>
        <FormField
          name="company-label"
          htmlFor="company"
          label={form.company && "company"}
        >
          <TextInput
            type="text"
            name="company"
            placeholder="company"
            value={form.company}
            onChange={handleChange}
          />
        </FormField>
        <FormField
          name="link-label"
          htmlFor="link"
          label={form.link && "link"}
        >
          <TextInput
            type="text"
            name="link"
            placeholder="link"
            value={form.link}
            onChange={handleChange}
          />
        </FormField>
        <FormField
          name="timeline-label"
          htmlFor="timeline"
          label={form.timeline && "status"}
        >
          <Select
            name="timeline"
            placeholder="current status"
            value={form.timeline}
            options={statuses}
            onChange={({ option }) => setForm({ ...form, timeline: option })}
          />
        </FormField>
        <Button type="submit" pad="small" label="Submit"></Button>
      </Form>
    </>
  );
};

export default Create;
