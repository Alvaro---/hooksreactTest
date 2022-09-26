export const todoReducer = (initialState, action) => {

    switch (action.type) {
        case 'ADD_TODO':
            return [...initialState, action.payload]

        // return initialState
        // throw new Error('Accion no implmentada')
        // break;

        case 'REMOVE_TODO':
            return initialState.filter(todo => todo.id !== action.payload)
        //Enaviar solo el ID o todo el payload y sacarlo
        // return initialState.filter(todo => todo.id !== action.payload.id)

        case 'TOGGLE_TODO':
            return initialState.map(todo => {
                if (todo.id === action.payload) {
                    return {
                        ...todo,
                        done: !todo.done
                    }
                }
                return todo
            })

        default:
            return initialState;
    }

}