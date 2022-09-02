import { useCounter } from "../hooks/useCounter";

export const CounterwithCustomHook = () => {
  const { counter, increment, decrement, reset } = useCounter(2);

  return (
    <>
      <h1>Counter with hooks {counter}</h1>
      <hr />
      <button className="btn btn-primary" onClick={() => increment()}>
        {/* <button className="btn btn-primary" onClick={increment}> */}
        {/* en este caso por defecto enviara el valor del evento, que es un objeto. En la funcion final lo vera como un evento y no podra hacer nada */}
        {/* La funcion vacia o con un valor indicara el valor que esperara la funcion */}
        +1
      </button>
      <button className="btn btn-primary" onClick={reset}>
        reset
      </button>
      <button className="btn btn-primary" onClick={() => decrement(2)}>
        -1
      </button>
    </>
  );
};
