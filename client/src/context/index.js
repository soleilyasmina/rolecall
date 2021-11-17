import { createContext, useEffect, useState } from 'react';
import { getRoles, verify } from 'services';
import { getToken } from 'utils';

export const Context = createContext();
Context.displayName = 'RoleCallContext';

export const Provider = ({ children }) => {
  const [roles, setRoles] = useState([]);
  const [user, setUser] = useState(null);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    const token = getToken();
    if (token) {
      (async () => {
        setUser(await verify(token));
        await fetchRoles();
      })();
    }
  }, []);

  const fetchRoles = async () => {
    setRoles(await getRoles());
  };

  const toggleCheck = (e) => {
    setChecked(e.target.value);
  };

  const contextValue = {
    toggleCheck,
    fetchRoles,
    roles,
    setRoles,
    setUser,
    user,
  };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};
