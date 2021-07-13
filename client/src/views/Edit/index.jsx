import { useContext } from "react";
import { useHistory, useParams } from "react-router-dom";
import RoleForm from "components/RoleForm";
import { Context } from "context";
import { updateRole } from "services";

const Edit = () => {
  const { roles, setRoles } = useContext(Context);
  const history = useHistory();
  const params = useParams();

  const role = roles.find((role) => role._id === params.id);

  const handleSubmit = async (form) => {
    const newRole = await updateRole(role._id, form);
    setRoles((curr) => curr.map((role) => role._id === params.id ? newRole : role));
    history.push("/dashboard");
  };

  return (
    <RoleForm handleSubmit={handleSubmit} initialForm={role} /> 
  )
};

export default Edit;
