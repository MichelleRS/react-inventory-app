import { createContext, useState } from "react";
import { getUser } from "../services/auth.js";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const currentUser = getUser();
  // initialize user with default set to currently signed in user
  const [user, setUser] = useState(currentUser);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider, UserContext };
