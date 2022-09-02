import { useCallback } from "react";
import { useState } from "react";
import { ShowIncrement } from "./ShowIncrement";

export const CallbackHook = () => {
  const [counter, setCounter] = useState(10);

  //En estecaso se usa el usecallback con el memo en la segunda funcion
  //La funcion del callback es la que se llama
  const incrementFather = useCallback((incremento) => {
    // setCounter(counter + 1);
    //Si se memoriza asi siempre sera el mismo valor. Siempre sera 10+1
    //Si se pone como dependencia el counter se re renderea igual
    setCounter((value) => value + incremento);
    //Se usa de esta forma por que toma el valor anterior y ya no el valor de counter que esta memorizado
  }, []);

  //   const incrementFather = () => {
  //     setCounter(counter + 1);
  //   };

  return (
    <>
      <h1>UseCallback {counter}</h1>
      <hr />
      <ShowIncrement increment={incrementFather} />
    </>
  );
};
