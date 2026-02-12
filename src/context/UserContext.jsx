import { Children, createContext, useState } from "react";

export const UserContext = createContext();

const UserProvider = ({ Children }) => {
  const [user, setUser] = useState(null);

  // Function to update user data
  const updateUser = (userData) => {
    setUser(userData);
  };

  // Function to clear user data (eg., on logout)
  const clearUser = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, updateUser, clearUser }}>
      {Children}
    </UserContext.Provider>
  );
};

export default UserProvider;
