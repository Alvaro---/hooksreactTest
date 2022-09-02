import { useEffect } from "react";
import { useState } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {
  const [formState, setformState] = useState({
    username: "strider",
    email: "strider@gmail.com",
  });
  const { username, email } = formState;

  const onInputChange = ({ target }) => {
    // console.log(event.target.name); //Saber que elemento cambio
    const { name, value } = target;
    // console.log(name, value);
    setformState({ ...formState, [name]: value }); // Por esto el name del objeto en form debe ser el mismo que el del estado
  };

  useEffect(() => {
    // console.log("useEffectCall");
  }, []);

  //Sin parametros se llama cada vez que se re renderiza. Cambios en state llama el re render
  //No se recomienda sin dependencias. El segundo argumento despues edl callback esta el arreglo
  //Las dependencias son las condiciones de disparo
  //[] Solo dispara la primera vez.
  //Siempre se recomienda un nuevo effecto por cada cambio

  useEffect(() => {
    // console.log("UseEffect Change");
  }, [formState]);
  //Con un valor se llama siempre que hay un cambio en ese valor

  useEffect(() => {
    // console.log("Email change");
  }, [email]);

  return (
    <>
      <h1>SimpleForm</h1>
      <hr />

      <input
        type="text"
        className="form-control"
        placeholder="User Name"
        name="username"
        value={username}
        onChange={onInputChange}
      />
      <input
        type="email"
        className="form-control mt-2"
        placeholder="Email"
        name="email"
        value={email}
        onChange={onInputChange}
      />

      {username === "strider2" && <Message />}
    </>
  );
};
