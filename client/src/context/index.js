import { createContext, useState } from "react";

export const Context = createContext();
Context.displayName = "RoleCallContext";

export const Provider = ({ children }) => {
  const [user, setUser] = useState(null);

  const contextValue = {
    setUser,
    user
  };

  return (
    <Context.Provider value={contextValue}>
      {children}
    </Context.Provider>
  );
};
