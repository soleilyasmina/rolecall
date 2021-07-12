import axios from "axios";
import { getToken } from "utils";

const baseURL =
  process.env.NODE_ENV === "production"
    ? process.env.BASE_URL
    : "http://localhost:3001";

const token = getToken();

const config = token ? { headers: { Authorization: `Bearer ${token}` } } : {};

const api = axios.create({
  baseURL,
  ...config,
});

export default api;
