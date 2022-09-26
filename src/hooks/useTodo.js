import { useEffect, useReducer } from "react";
import { todoReducer } from "../10.-UseReducer/todoReducer";

const init = () => {
    return JSON.parse(localStorage.getItem("todos")) || [];
};

export const useTodo = () => {
    const [todos, dispatchTodoAction] = useReducer(
        todoReducer,
        [],
        init
    );

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    const handleNewTodo = (todo) => {
        const action = {
            type: "ADD_TODO",
            payload: todo,
        };

        dispatchTodoAction(action);
    };

    const handleDeleteTodo = (id) => {
        // console.log(id);
        dispatchTodoAction({
            type: "REMOVE_TODO",
            payload: id,
        });
    };

    const onToggleTodo = (id) => {
        dispatchTodoAction({
            type: "TOGGLE_TODO",
            payload: id,
        });
    };

    return {
        todos,
        todosCount: todos.length,
        pendingTodosCount: todos.filter((todo) => !todo.done).length,
        handleNewTodo,
        handleDeleteTodo,
        onToggleTodo
    }
}
