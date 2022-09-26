import { fireEvent, render, screen } from "@testing-library/react";
import { TodoItem } from "../../src/10.-UseReducer/TodoItem";

describe("test in tidiItem", () => {
  const todo = {
    id: 1,
    description: "DemoTodo",
    done: false,
  };

  const onDeletetodoMock = jest.fn();
  const onToggleTodoMock = jest.fn();

  beforeEach(() => jest.clearAllMocks());
  test("should show component todoItem no complete", () => {
    render(
      <TodoItem
        todo={todo}
        onToggleTodo={onToggleTodoMock}
        onDeleteTodo={onDeletetodoMock}
      />
    );

    const liElement = screen.getByRole("listitem");
    console.log(liElement.innerHTML);
    expect(liElement.className).toBe(
      "list-group-item d-flex justify-content-between"
    );

    // const spanElement = screen.getByRole("span"); //No se puede buscar por span
    const spanElement = screen.getByLabelText("span");
    console.log(spanElement.className);
    expect(spanElement.className).toContain("align-self-center");
    expect(spanElement.className).not.toContain("text-decoration-line-through");

    screen.debug();
  });

  test("should show component todoItem complete", () => {
    todo.done = true;
    render(
      <TodoItem
        todo={todo}
        onToggleTodo={onToggleTodoMock}
        onDeleteTodo={onDeletetodoMock}
      />
    );

    // const spanElement = screen.getByRole("span"); //No se puede buscar por span
    const spanElement = screen.getByLabelText("span");
    expect(spanElement.className).toContain("text-decoration-line-through");
  });

  test("should call toggle Todo on click", () => {
    render(
      <TodoItem
        todo={todo}
        onToggleTodo={onToggleTodoMock}
        onDeleteTodo={onDeletetodoMock}
      />
    );
    const spanElement = screen.getByLabelText("span");
    fireEvent.click(spanElement);
    expect(onToggleTodoMock).toHaveBeenCalledWith(todo.id);
  });

  test("should call delete todo", () => {
    render(
      <TodoItem
        todo={todo}
        onToggleTodo={onToggleTodoMock}
        onDeleteTodo={onDeletetodoMock}
      />
    );
    const deleteButton = screen.getByRole("button");
    fireEvent.click(deleteButton);
    expect(onDeletetodoMock).toHaveBeenCalledWith(todo.id);
  });
});
