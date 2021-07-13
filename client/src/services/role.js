import api from "./api";

export const createRole = async (role) => {
  const resp = await api.post("/api/roles", role);
  return resp.data;
};

export const getRoles = async () => {
  const resp = await api.get("/api/roles");
  return resp.data;
};

export const updateStatus = async (id, status) => {
  const resp = await api.put(`/api/roles/${id}/status`, { status });
  return resp.data;
};
