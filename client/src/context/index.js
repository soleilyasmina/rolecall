import { createContext, useEffect, useState } from "react";
import { verify } from "services";
import { getToken } from "utils";

export const Context = createContext();
Context.displayName = "RoleCallContext";

export const Provider = ({ children }) => {
  const [roles, setRoles] = useState([]);
  const [user, setUser] = useState(null);

  const contextValue = {
    roles,
    setRoles,
    setUser,
    user
  };

  useEffect(() => {
    const token = getToken();
    if (token) {
      (async () => {
        setUser(await verify(token));
      })()
    } 
  }, [])

  return (
    <Context.Provider value={contextValue}>
      {children}
    </Context.Provider>
  );
};
