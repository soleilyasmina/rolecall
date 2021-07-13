import { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Form, FormField, Select, TextInput, Button } from 'grommet';
import { Context } from 'context';
import { createRole } from 'services';
import { statuses } from 'utils';

const Create = () => {
  const { setRoles } = useContext(Context);
  const history = useHistory();

  const [form, setForm] = useState({
    position: '',
    company: '',
    timeline: '',
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
      timeline: [{ status: form.timeline, when: new Date() }],
    };
    const newRole = await createRole(roleToCreate);
    setRoles((curr) => [...curr, newRole]);
    history.push('/dashboard');
  };

  return (
    <>
      <Form
        value={form}
        onChange={(newValue) => setForm(newValue)}
        onSubmit={handleSubmit}
      >
        <FormField
          name="position-label"
          htmlFor="position"
          label={form.position && 'position'}
          required={!form.position}
        >
          <TextInput type="text" name="position" placeholder="position" />
        </FormField>
        <FormField
          name="company-label"
          htmlFor="company"
          label={form.company && 'company'}
          required={!form.company}
        >
          <TextInput type="text" name="company" placeholder="company" />
        </FormField>
        <FormField
          name="link-label"
          htmlFor="link"
          label={form.link && 'link'}
          required={!form.link}
        >
          <TextInput type="url" name="link" placeholder="link" />
        </FormField>
        <FormField
          name="timeline-label"
          htmlFor="timeline"
          label={form.timeline && 'status'}
          required={!form.timeline}
        >
          <Select
            name="timeline"
            placeholder="current status"
            options={statuses}
          />
        </FormField>
        <Button type="submit" pad="small" label="Submit"></Button>
      </Form>
    </>
  );
};

export default Create;
