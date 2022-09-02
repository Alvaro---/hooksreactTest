import React from "react";
import { useCounter, useFetch } from "../hooks";
import { LoadingQuote, Quote } from "../03.-MultipleHooks";

export const Layout = () => {
  const { counter, increment, decrement } = useCounter(1);
  const { data, isLoading, hasError } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );
  const { author, quote } = !!data && (data[0] ? data[0] : []);

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
