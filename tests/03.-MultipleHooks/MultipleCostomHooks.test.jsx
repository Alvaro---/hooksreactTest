import { fireEvent, render, screen } from "@testing-library/react";
import { MultipleCostomHooks } from "../../src/03.-MultipleHooks/MultipleCostomHooks";

//Para el segundo test
import { useFetch } from "../../src/hooks/useFetch"; //Apuntar al archivo y no al de barril para no necesitar hacerle un mock al siguiente
jest.mock("../../src/hooks/useFetch");
import { useCounter } from "../../src/hooks/useCounter";
jest.mock("../../src/hooks/useCounter");

describe("test in component", () => {
  const mockIncrement = jest.fn(); //La funcion de jest
  useCounter.mockReturnValue({
    counter: 1,
    increment: mockIncrement,
  });

  //Antes que cada prueba
  beforeEach(() => {
    jest.clearAllMocks(); // Asegurarse de que en cada prueba se resetee el counter
  });

  test("should show default component", () => {
    useFetch.mockReturnValue({
      data: null,
      isLoading: true,
      hasError: null,
    });
    render(<MultipleCostomHooks />);
    screen.debug();

    //Lo primero es ver que este asi como en  screen. Se puede hacer un snapshow pero hay otra forma:
    expect(screen.getByText("loading..."));
    expect(screen.getByText("Breaking bad quotes"));

    //Boton desabilitado
    // const nextByButton = screen.getByRole("button", { name: "ABC" }); // Te da los elementos y sus nombres para corregisrlo
    const nextButton = screen.getByRole("button", { name: "Next Quote" });
    console.log(nextButton.disabled);
    expect(nextButton.disabled).toBe(true);
  });

  test("should show quoete", () => {
    useFetch.mockReturnValue({
      data: [{ author: "Alvaro", quote: "Hola" }],
      isLoading: false,
      hasError: null,
    });

    render(<MultipleCostomHooks />);
    //Antes de hacer el screen, se debe completar el fetch Para eso se hace el jest.mock
    screen.debug();
    expect(screen.getByText("Hola")).toBeTruthy();
    expect(screen.getByText("Alvaro")).toBeTruthy();

    const nextButton = screen.getByRole("button", { name: "Next Quote" });
    expect(nextButton.disabled).toBe(false);
  });

  test("should call increment function", () => {
    useFetch.mockReturnValue({
      data: [{ author: "Alvaro", quote: "Hola" }],
      isLoading: false,
      hasError: null,
    });

    render(<MultipleCostomHooks />);
    const nextButton = screen.getByRole("button", { name: "Next Quote" });
    fireEvent.click(nextButton); // Al llamar al evento, se debe llamar al increment de setCoutner

    expect(mockIncrement).toHaveBeenCalled();
  });
});
