import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { MainApp } from "../../src/11.-useContext/mainApp";

describe("mainApp Routes", () => {
  test("should show Home Page", () => {
    // El memory reouter proporciona los providers del browserRoute
    render(
      <MemoryRouter>
        <MainApp />
      </MemoryRouter>
    );

    expect(screen.getByText("Home page")).toBeTruthy();
  });

  test("should show Login Page", () => {
    // El memory reouter proporciona los providers del browserRoute
    render(
      <MemoryRouter initialEntries={["/login"]}>
        <MainApp />
      </MemoryRouter>
    );

    expect(screen.getByText("Login Page")).toBeTruthy();
  });
});
