import React from "react";

export const ShowIncrement = React.memo(({ increment }) => {
  //Por mas que se memorize, se vuelve a re renderear.
  //Los objetos siempre apuntan a memoria diferente. Cada vez que se re renderea tiene una nueva posicion
  //Por esto no sirve el memo.
  console.log("Me volvi a generar");
  //El componente, no deberia redibujarse.
  return (
    <button
      className="btn btn-primary"
      onClick={() => {
        increment(5);
      }}
    >
      Incrementar
    </button>
  );
});
