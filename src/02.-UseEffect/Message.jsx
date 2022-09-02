import { useState } from "react";
import { useEffect } from "react";

export const Message = () => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  //   useEffect(() => {
  //     // console.log("message Mounted");
  //     window.addEventListener("mousemove", (e) => {
  //       //   console.log(e);
  //       //   console.log(":)");
  //       console.log(e.x, e.y);
  //     });

  //     return () => {
  //       console.log("message Unmounted");
  //     };
  //   }, []);
  // ***************************************************** //
  //   useEffect(() => {
  //     const onMouseMove = ({ x, y }) => {
  //       const coords = { x, y };
  //       console.log(coords);
  //     };

  //     window.addEventListener("mousemove", onMouseMove);

  //     return () => {
  //       window.removeEventListener("mousemove", onMouseMove);
  //     };

  //     //El removeEventListener solo sirve si el addEventListener se hace conuna funcion con referencia
  //     // Si la funcion es anonima no sirve por que se crea un espacio de memoria que no puede acceder de nuevo
  //   }, []);

  useEffect(() => {
    const onMouseMove = ({ x, y }) => {
      setCoords({ x, y });
    };

    window.addEventListener("mousemove", onMouseMove);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };

    //El removeEventListener solo sirve si el addEventListener se hace conuna funcion con referencia
    // Si la funcion es anonima no sirve por que se crea un espacio de memoria que no puede acceder de nuevo
  }, []);

  return (
    <>
      <h3>Usuario ya existe</h3>
      {JSON.stringify(coords)}
    </>
  );
};
