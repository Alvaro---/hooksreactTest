export const TodoItem = ({ todo, onDeleteTodo, onToggleTodo }) => {
  return (
    <li className="list-group-item d-flex justify-content-between">
      <span
        aria-label="span" // Para el test
        onClick={() => onToggleTodo(todo.id)}
        className={`align-self-center ${
          todo.done && "text-decoration-line-through"
        }`}
        // usar el && creara una clase false si es que no es verdad. Es mejr el operador ternario ?
      >
        {todo.description}
      </span>{" "}
      <button className="btn btn-danger" onClick={() => onDeleteTodo(todo.id)}>
        Borrar
      </button>
    </li>
  );
};
