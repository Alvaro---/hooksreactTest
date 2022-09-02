import { useRef } from "react";

export const FocusScreen = () => {
  const inputRef = useRef();

  const onClick = () => {
    // document.querySelector("input").focus();
    // document.querySelector("input").select();
    //Query Selctor busca en el documento el input
    //Un id no funcionaria correctamente ya que podria agarrar cualquier cosa.
    console.log(inputRef);

    inputRef.current.select();
  };
  return (
    <>
      <h1>FocusScreen</h1>
      <hr />
      <input
        ref={inputRef}
        type="text"
        placeholder="Ingrese su nombre"
        className="form-control"
      />
      <button className="btn btn-primary mt-2" onClick={onClick}>
        Set Focus
      </button>
    </>
  );
};
