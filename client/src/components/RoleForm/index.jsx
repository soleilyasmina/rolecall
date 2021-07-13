import { useContext, useEffect, useMemo, useState } from "react";
import { Button, Form, Tab, Tabs }from "grommet";
import EssentialForm from "./EssentialForm";
import LocationForm from "./LocationForm";
import NotesForm from "./NotesForm";
import { Context } from "context";
import { scrubFalsyPairs } from "utils";

const RoleForm = ({ handleSubmit, initialForm = null }) => {
  const { roles } = useContext(Context);

  const [form, setForm] = useState(initialForm || {
    position: "",
    company: "",
    link: "",
    timeline: "",
    minSalary: 0,
    maxSalary: 0,
    location: "",
    remote: "",
    source: "",
    contact: "",
    notes: "",
    referral: "",
  });

  useEffect(() => {
    setForm(initialForm);
  }, [initialForm]);

  const suggestions = useMemo(() => {
    const roleObj = roles.reduce((suggestions, role) => {
      const entries = Object.entries(role);
      entries.forEach(([key, value]) => {
        if (!["createdAt", "updatedAt", "user_id", "notes",
          "__v", "_id", "timeline"].includes(key)) {
          if (!suggestions[key]) {
            suggestions[key] = [];
          }
          suggestions[key].push(value);
        }
      });
      return suggestions;
    }, {});
    return Object.fromEntries(Object.entries(roleObj).map(([key, val]) => [key, [...new Set(val)].slice(0, 3)]));
  }, [roles]);

  return (
    <>
      <Form
        value={form}
        onChange={(newValue) => setForm(newValue)}
        onSubmit={() => handleSubmit(scrubFalsyPairs(form))}
      >
        <Tabs alignControls="start">
          <Tab title="basic">
            <EssentialForm form={form} suggestions={suggestions} />
          </Tab>
          <Tab title="location & salary">
            <LocationForm form={form} suggestions={suggestions} setForm={setForm} />
          </Tab>
          <Tab title="contact & notes">
            <NotesForm form={form} suggestions={suggestions} />
          </Tab>
        </Tabs>
        <Button type="submit" pad="small" label="Submit"></Button>
      </Form>
    </>
  );
};

export default RoleForm;
