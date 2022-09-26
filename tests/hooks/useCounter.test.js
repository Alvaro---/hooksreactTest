import { renderHook } from '@testing-library/react'
import { act } from 'react-dom/test-utils';
import { useCounter } from '../../src/hooks/useCounter'

describe('Pruebas useCounter', () => {
    test('should return default value', () => {
        //renderHook nos permite renderizar un hook. 
        const { result, rerender, unmount } = renderHook(() => useCounter());
        console.log(result)
        const { counter, decrement, increment, reset } = result.current;
        expect(counter).toBe(10)
        expect(decrement).toEqual(expect.any(Function));
        expect(increment).toEqual(expect.any(Function));
        expect(reset).toEqual(expect.any(Function));
        // expect(reset).toEqual(String);
    })

    test('Should  have counter 100 value', () => {
        const { result } = renderHook(() => useCounter(100));
        const { counter } = result.current;
        expect(counter).toBe(100)
    })

    test('should increment counter', () => {
        const { result } = renderHook(() => useCounter(100));
        const { counter, increment } = result.current;
        act(() => {
            increment();
            increment(2);
        })
        // expect(counter).toBe(103); // No obtiene el valora ctualizado. ya que se descompuso en una constante. 
        //Se debe volver a estraer. Esto no seria asi en un objeto ya que alli se pasa por referencia.
        expect(result.current.counter).toBe(103);
    })

    test('should decrement counter', () => {
        const { result } = renderHook(() => useCounter(100));
        const { counter, decrement } = result.current;
        act(() => {
            decrement();
            decrement(2);
        })
        // expect(counter).toBe(103); // No obtiene el valora ctualizado. ya que se descompuso en una constante. 
        //Se debe volver a estraer. Esto no seria asi en un objeto ya que alli se pasa por referencia.
        expect(result.current.counter).toBe(97);
    })

    test('should resent counter', () => {
        const { result } = renderHook(() => useCounter(100));
        const { counter, reset, decrement } = result.current;
        act(() => {
            decrement();
            decrement(2);
            reset();
        })
        // expect(counter).toBe(103); // No obtiene el valora ctualizado. ya que se descompuso en una constante. 
        //Se debe volver a estraer. Esto no seria asi en un objeto ya que alli se pasa por referencia.
        expect(result.current.counter).toBe(counter);
    })
})