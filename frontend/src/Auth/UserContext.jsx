import React, { createContext, useState } from "react";

// Create the UserContext
const UserContext = createContext();

// Create a Provider component
const UserProvider = ({ children }) => {
  const [email, setEmail] = useState("");

  return (
    <UserContext.Provider value={{ email, setEmail }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
