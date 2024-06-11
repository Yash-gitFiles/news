import React, { createContext, useState } from "react";

export const UserContext = createContext(null);
function UserProvider({ children }) {
  const initialState = JSON.parse(localStorage.getItem("user"));

  const [user, setuser] = useState(initialState);
  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
}

export default UserProvider;
