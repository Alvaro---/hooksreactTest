import { todoReducer } from "../../src/10.-UseReducer/todoReducer"

describe('test todoReducer', () => {

    const initialState = [
        {
            id: 1,
            description: 'DemoTodo',
            done: false
        }
    ]

    test('should return initual state', () => {
        const newState = todoReducer(initialState, {})
        //El Tobe verifica que qpunte al mismo objeto. En este caso el objeto pasa por referencia
        //Si se destructura no funciona por que no pasa por referencia
        expect(newState).toBe(initialState)
    })

    test('should add Todo', () => {
        const action = {
            type: 'ADD_TODO',
            payload: {
                id: 2,
                description: 'nuevo todo',
                done: false
            }
        }
        const newState = todoReducer(initialState, action);
        expect(newState.length).toBe(2);
        expect(newState).toContain(action.payload);
        //toContain evalue el contenido, no el espacio de memoria
    })

    test('should remove Todo', () => {
        const action = {
            type: 'REMOVE_TODO',
            payload: 1
        }
        const newState = todoReducer(initialState, action);
        expect(newState.length).toBe(0);
    })
    test('should toggle Todo', () => {
        const action = {
            type: 'TOGGLE_TODO',
            payload: 1
        }
        const newState = todoReducer(initialState, action);
        expect(newState.length).toBe(1);
        expect(newState[0].done).toBe(true);

        const newState2 = todoReducer(newState, action);
        expect(newState2[0].done).toBe(false);
    })
})