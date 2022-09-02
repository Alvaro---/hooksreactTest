import { useState } from "react";

export const CounterApp = () => {
  const [state, setCounter] = useState({
    //   const [{ counter1, counter2, counter3 }, setCounter] = useState({
    //   const [counter, setCounter] = useState({
    counter1: 10,
    counter2: 20,
    counter3: 30,
  });
  const { counter1, counter2, counter3 } = state;

  return (
    <>
      {/* <h1>Counter {counter.counter1}</h1> */}
      <h1>Counter {counter1}</h1>
      <h1>Counter {counter2}</h1>
      <h1>Counter {counter3}</h1>
      <hr />
      <button
        className="btn"
        onClick={() => setCounter({ ...state, counter1: counter1 + 1 })}
        // ...state debe estar al inicio.
      >
        +1
      </button>
      <button>-1</button>
    </>
  );
};
