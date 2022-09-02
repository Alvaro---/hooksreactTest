import { memo } from "react";
// El memo engloba todo el componente.
// Por lo general se usa React.memo si se trabaja con create react app, ya que por defecto tiene la referencia a React de manera global
// En general con Vite debertia hacer un import React from 'react'
export const Small = memo(({ value }) => {
  //No deberia haber nada fuera de funciones. Es para la prueba.
  console.log("Re render SMALL :)");
  return <small>{value}</small>;
});
