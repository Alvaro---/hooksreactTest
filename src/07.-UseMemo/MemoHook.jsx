import { useMemo } from "react";
import { useState } from "react";
import { useCounter } from "../hooks";

const heavyStuff = (iterationsNumber = 100) => {
  //Al re renderearse se volvera a ejecutar, por mas que no tenga que ver con el cambio del valor.
  //Para estos e utiliza el useMemo
  for (let i = 0; i < iterationsNumber; i++) {
    console.log("Ahi vamos...");
  }
  return `${iterationsNumber} iteraciones realizadas`;
};

export const MemoHook = () => {
  const { counter, increment } = useCounter(400);
  const [show, setShow] = useState(true);

  const memorizeValue = useMemo(() => {
    //Si no se retorna nada el valor memorizado es undefine
    //Un arreglo vacio lo memoriza la primera vez.
    return heavyStuff(counter);
  }, [counter]);

  return (
    <>
      <h1>
        Counter: <small>{counter}</small>
      </h1>
      <hr />
      <h4>{memorizeValue}</h4>
      <button className="btn btn-primary" onClick={() => increment()}>
        +1
      </button>

      {/* El segundo boton, no tiene nada que ver con el counter, pero igual al re renderizar, 
    se vuelven a cargar los componentes hijos. Si el hijo tiene un proceso pesado en el componente, se volver a ejecutar. 
    Por esto se deberia memorizar esos componentes si hay qun proceso pesado que haya que modificar solo cuando cambie sus props cambien.
    */}
      {/* Se memoriza el hijo. */}
      <button
        className="btn btn-outline-primary"
        onClick={() => setShow(!show)}
      >
        Show/Hide{JSON.stringify(show)}
        {/* Stringyfy por que un boleano no se muestra en la pantalla */}
      </button>
    </>
  );
};
