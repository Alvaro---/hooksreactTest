import { useState } from "react";
import { UserContext } from "./UserContext";

// const user = {
//   id: 123,
//   name: "Alvaro",
//   email: "alvaro@correo.com",
// };

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState();

  return (
    <UserContext.Provider value={{ hola: "mundo", user: user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
