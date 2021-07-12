export const getToken = () => {
  localStorage.getItem("token");
}

export const setToken = (token) => {
  localStorage.setItem("token", token);
}

export const clearToken = () => {
  localStorage.clearItem("token");
}

export const newestFound = (items) => {
  return items.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
} 
