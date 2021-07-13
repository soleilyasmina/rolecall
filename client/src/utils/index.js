export const getToken = () => {
  localStorage.getItem("token");
};

export const setToken = (token) => {
  localStorage.setItem("token", token);
};

export const clearToken = () => {
  localStorage.clearItem("token");
};

export const newestFound = (items) => {
  return items.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
};

export const statuses = [
  "Found",
  "Applied",
  "Phone Screen",
  "Technical Assessment",
  "Behavioral Interview",
  "Misc",
  "Rejected",
  "Offered",
];

const colors = [
  "#4169e1",
  "#cb5fce",
  "#ff65a3",
  "#ff8e77",
  "#ffc45d",
  "#f9f871",
  "#454555",
  "#1fc198",
];

export const getColorFromStatus = (status) => colors[statuses.indexOf(status)];

export const lastInArray = (arr) => arr[arr.length - 1];
