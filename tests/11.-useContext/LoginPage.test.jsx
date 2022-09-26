import { fireEvent, render, screen } from "@testing-library/react";
import { UserContext } from "../../src/11.-useContext/context/UserContext";
import { LoginPage } from "../../src/11.-useContext/LoginPage";

describe("test LoginPage", () => {
  const user = {
    id: 1,
    name: "Alvaro",
  };

  test("should show component without user", () => {
    render(
      <UserContext.Provider value={{ user: null }}>
        <LoginPage />
      </UserContext.Provider>
    );
    const preTag = screen.getByLabelText("pre");
    expect(preTag.innerHTML).toBe("null");
  });

  test("should call show user onClick", () => {
    const setUserMock = jest.fn();
    render(
      <UserContext.Provider value={{ user: null, setUser: setUserMock }}>
        <LoginPage />
      </UserContext.Provider>
    );
    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(setUserMock).toHaveBeenCalledWith({
      email: "a@a.com",
      id: 123,
      name: "Al",
    });
  });
});
