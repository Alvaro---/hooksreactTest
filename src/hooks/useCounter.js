import { useState } from "react"

export const useCounter = (initialValue = 10) => {

    const [counter, setCounter] = useState(initialValue)

    const increment = (value = 1) => {
        // console.log(value)
        // setCounter(counter + value)//Para el test deberia hacer 2 act ya que no tomara el valor actual
        setCounter((current) => current + value);
    }

    const decrement = (value = 1) => {
        // if (counter === 0) return
        // setCounter(counter - value)
        setCounter((current) => current - value)
    }

    const reset = () => {
        setCounter(initialValue)
    }

    return {
        counter,
        increment,
        decrement,
        reset

    }
    //Se puede retornar un objeto o un arreglo
}