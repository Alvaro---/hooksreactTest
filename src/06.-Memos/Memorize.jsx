import { useState } from "react";
import { useCounter } from "../hooks";
import { Small } from "./Small";

export const Memorize = () => {
  const { counter, increment } = useCounter(10);
  const [show, setShow] = useState(true);
  return (
    <>
      <h1>
        Counter: <Small value={counter} />
      </h1>
      <hr />
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
