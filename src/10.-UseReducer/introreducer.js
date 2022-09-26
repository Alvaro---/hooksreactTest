// console.log("Hola")

const initialState = [{
    id: 1,
    todo: "recolectar piedra 1",
    done: false,
}]

//Un reducer es un funcion pura
//El estado inicial y la accion que dice como quiero que cambie el estado
const todoReducer = (state = initialState, action = {}) => {

    if (action.type === '[TODO] add todo') {
        return [...state, action.payload]
        //Con el operador spread se esparce todo el arreglo, se crea una copia del estado anterior para mutarlo.
        //push esta prohibido en react
    }

    //Si no llega una accion se retorna el mismo estado. React no hace nada en esos casos.
    return state
}
//Siempre debe devolver un estado
//El estado no se manipula, solo se cambia.

let todos = todoReducer();
console.log(todos)

// hacer un push para agregar un objeto es una mutacion del estado. No se debe hacer.

const newTodo = {
    id: 2,
    todo: "recolectar piedra 2",
    donde: false,
}

const addTodoAction = {
    type: '[TODO] add todo',
    payload: newTodo
    //No se necesita un payload. Si es borrar todo, no se usaria por ejemplos
}

todos = todoReducer(todos, addTodoAction)
console.log(todos)