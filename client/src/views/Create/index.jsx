import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { Context } from "context";
import RoleForm from "components/RoleForm";
import { createRole } from "services";

const Create = () => {
  const { setRoles } = useContext(Context);
  const history = useHistory();

  const handleSubmit = async (form) => {
    const roleToCreate = {
      ...form,
      timeline: [{ status: form.timeline, when: new Date() }],
    };
    const newRole = await createRole(roleToCreate);
    setRoles((curr) => [...curr, newRole]);
    history.push("/dashboard");
  };

  return (
    <RoleForm handleSubmit={handleSubmit}/>
  )
};

export default Create;
