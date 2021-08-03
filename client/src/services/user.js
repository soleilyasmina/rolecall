import api from "./api";
import { clearToken, getToken, setToken } from "utils";

const setAuthHeader = (token) => {
  if (token) {
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    api.defaults.headers.common["Authorization"] = null;
  }
};

export const login = async (payload) => {
  const resp = await api.post("/api/login", payload);
  setToken(resp.data.token);
  setAuthHeader(resp.data.token);
  return resp.data.user;
};

export const register = async (payload) => {
  const resp = await api.post("/api/register", payload);
  setToken(resp.data.token);
  setAuthHeader(resp.data.token);
  return resp.data.user;
};

export const verify = async () => {
  const token = getToken();
  if (!token) {
    return;
  }
  setAuthHeader(token);
  const resp = await api.get("/api/verify");
  return resp.data.user;
};

export const logout = async () => {
  clearToken();
  setAuthHeader(null);
};

export const updateProfile = async (action, option) => {
  // action can be add / remove
  // option is a type of filter
  const resp = await api.put("/api/profile", { action, option });
  return resp.data.user;
}
