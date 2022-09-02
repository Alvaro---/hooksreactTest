import { useState } from "react";
import { useRef } from "react";
import { useLayoutEffect } from "react";

export const Quote = ({ quote, author }) => {
  const pRef = useRef();
  const [boxSize, setBoxSize] = useState({ width: 0, height: 0 });

  useLayoutEffect(() => {
    const { width, height } = pRef.current.getBoundingClientRect();
    setBoxSize({ width, height });
  }, [quote]);
  //No es necesaria la dependencia por que se destruye y se vuelve a crear. Pero para asegurar por si hay otro componente que lo usa

  return (
    <>
      <blockquote
        className="blockquote text-end"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <p ref={pRef} className="mb-3">
          {quote}
        </p>
        <footer className="blockquote-footer">{author}</footer>
      </blockquote>
      <code>{JSON.stringify(boxSize)}</code>
    </>
  );
};
