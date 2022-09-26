import { render, screen } from "@testing-library/react";
import { UserContext } from "../../src/11.-useContext/context/UserContext";
import { HomePage } from "../../src/11.-useContext/HomePage";

describe("test useContext home page", () => {
  const user = {
    id: 1,
    name: "Alvaro",
  };

  test("should show component without user", () => {
    render(
      <UserContext.Provider value={{ user: null }}>
        <HomePage />
      </UserContext.Provider>
    );
    const preTag = screen.getByLabelText("pre");
    console.log(preTag.innerHTML);
    expect(preTag.innerHTML).toBe("null");
    // screen.debug();
  });

  test("should show component with user", () => {
    render(
      <UserContext.Provider value={{ user }}>
        <HomePage />
      </UserContext.Provider>
    );
    const preTag = screen.getByLabelText("pre");
    console.log(preTag.innerHTML);
    expect(preTag.innerHTML).toContain(user.name);
    expect(preTag.innerHTML).toContain(user.id.toString());
    expect(preTag.innerHTML).toContain(`${user.id}`);
    // screen.debug();
  });
});
