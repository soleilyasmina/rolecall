import api from "./api";

export const createRole = async (role) => {
  const resp = await api.post("/api/roles", role);
  return resp.data;
};

export const getRoles = async () => {
  const resp = await api.get("/api/roles");
  return resp.data;
};

export const updateRole = async (id, role) => {
  const resp = await api.put(`/api/roles/${id}`, role);
  return resp.data;
};
