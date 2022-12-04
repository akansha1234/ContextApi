import React, { createContext, useState } from "react";
export const UserContext = createContext();
const UserContextFun = ({ children }) => {
  const [user, setUser] = useState("hello");
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
export default UserContextFun;
