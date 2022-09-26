import { useTodo } from "../hooks";
import { AddTodo } from "./AddTodo";
import { TodoList } from "./TodoList";

const initialState = [
  //   {
  //     id: new Date().getTime(),
  //     description: "tarea numero 1",
  //     done: false,
  //   },
];

// const init = () => {
//   return JSON.parse(localStorage.getItem("todos")) || [];
//   //Si no existe se vuelve null
//   //parse es el opuesto de stringify
// };

export const TodoApp = () => {
  //   //   const [state, dispatch] = useReducer(reducer, initialState);
  //   const [todos, dispatchTodoAction] = useReducer(
  //     todoReducer,
  //     initialState,
  //     init
  //   );
  //   //La funcion todoReducer no se ejecuta con () si no que se da la referencia para que use el reducer

  //   useEffect(() => {
  //     localStorage.setItem("todos", JSON.stringify(todos)); //windows.addevent listener, fetch, etc
  //     //En local storage solo se puede grabar strings. Un objeto se veria como [object Object]
  //     //Por eso se usa json.stringify
  //   }, [todos]);

  //   const handleNewTodo = (todo) => {
  //     const action = {
  //       type: "ADD_TODO",
  //       payload: todo,
  //     };

  //     dispatchTodoAction(action);
  //   };

  //   const handleDeleteTodo = (id) => {
  //     // console.log(id);
  //     dispatchTodoAction({
  //       type: "REMOVE_TODO",
  //       payload: id,
  //     });
  //   };

  //   const onToggleTodo = (id) => {
  //     dispatchTodoAction({
  //       type: "TOGGLE_TODO",
  //       payload: id,
  //     });
  //   };

  const {
    todos,
    todosCount,
    pendingTodosCount,
    handleNewTodo,
    handleDeleteTodo,
    onToggleTodo,
  } = useTodo();

  return (
    <>
      <h1>
        Todo: {todosCount}, <small>Pendinetes: {pendingTodosCount}</small>
      </h1>
      <hr />

      <div className="row">
        <div className="col-7">
          <TodoList
            todos={todos}
            onDeleteTodo={handleDeleteTodo}
            onToggleTodo={onToggleTodo}
          />
        </div>
        <div className="col-5">
          <h4>Add Todo</h4>
          <hr />
          <AddTodo onNewTodo={handleNewTodo} />
        </div>
      </div>
    </>
  );
};
