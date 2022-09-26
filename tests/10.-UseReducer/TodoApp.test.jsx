import { render, screen } from "@testing-library/react";
import { TodoApp } from "../../src/10.-UseReducer/TodoApp";
import { useTodo } from "../../src/hooks/useTodo";

jest.mock("../../src/hooks/useTodo");

describe("todoApp", () => {
  useTodo.mockReturnValue({
    todos: [
      {
        id: 1,
        description: "a",
        done: false,
      },
      {
        id: 2,
        description: "b",
        done: false,
      },
    ],
    todosCount: 2,
    pendingTodosCount: 1,
    handleNewTodo: jest.fn(),
    handleDeleteTodo: jest.fn(),
    onToggleTodo: jest.fn(),
  });

  test("should show copmonent", () => {
    render(<TodoApp />);
    screen.debug();
    expect(screen.getByText("a")).toBeTruthy();
    expect(screen.getByText("b")).toBeTruthy();
    expect(screen.getByRole("textbox")).toBeTruthy();
  });
});
