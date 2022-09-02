import React from "react";
import { useCounter, useFetch } from "../hooks";
import { LoadingQuote, Quote } from "./";

export const MultipleCostomHooks = () => {
  const { counter, increment, decrement } = useCounter(1);
  const { data, isLoading, hasError } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );
  console.log(data, "!", !data);
  console.log(data, "!!", !!data);
  const { author, quote } = !!data && (data[0] ? data[0] : []);
  // data si es null, al negar una vez es true, y la segunda negacion es false
  // Transforma el undefined en verdad y en false.

  //   if (isLoading) {
  //     return <h1>Cargando...</h1>;
  //   } //No deben ir hooks de manera condicional.

  return (
    <>
      <h3>Breaking bad quotes</h3>
      <hr />

      {isLoading ? <LoadingQuote /> : <Quote author={author} quote={quote} />}

      <button
        onClick={() => decrement()}
        className="btn btn-primary"
        disabled={isLoading || counter <= 1}
      >
        Prev Quote
      </button>
      <button
        onClick={() => increment()}
        className="btn btn-primary"
        disabled={isLoading}
      >
        Next Quote
      </button>
    </>
  );
};
