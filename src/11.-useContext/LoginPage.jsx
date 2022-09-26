import React from "react";
import { useContext } from "react";
import { UserContext } from "./context/UserContext";

export const LoginPage = () => {
  const { hola, user, setUser } = useContext(UserContext);
  console.log(hola, user, setUser);

  return (
    <>
      <h1>Login Page</h1>
      <hr />
      <pre aria-label="pre">{JSON.stringify(user, null, 3)}</pre>
      <button
        className="btn btn-primary"
        onClick={() => setUser({ id: 123, name: "Al", email: "a@a.com" })}
      >
        Establecer Usuario
      </button>
    </>
  );
};
