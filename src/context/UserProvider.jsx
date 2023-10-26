import { createContext, useState } from 'react';

const UserContext = createContext({});
export default UserContext;

export function UserProvider({ children }) {
  const [user, setUser] = useState({ username: '', token: '' });

  const value = {
    user,
    setUser,
  };

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
}
