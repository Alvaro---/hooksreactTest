import { act, renderHook } from '@testing-library/react'
import { useForm } from '../../src/hooks/useForm'

describe('pruebas en UseForm', () => {

    const initialForm = {
        name: 'Alvaro',
        email: 'alvaro@gmail.com'
    }

    test('should return default values', () => {
        const { result } = renderHook(() => useForm(initialForm));
        console.log(result)
        expect(result.current).toEqual({
            name: initialForm.name,
            email: initialForm.email,
            formState: initialForm,
            onInputChange: expect.any(Function),
            onResetForm: expect.any(Function)
        })
    })

    test('should change name form', () => {
        const newValue = "Juan"
        const { result } = renderHook(() => useForm(initialForm));
        const { name, onInputChange } = result.current
        act(() => {
            onInputChange({ target: { name: 'name', value: newValue } })
        })
        expect(result.current.name).toEqual(newValue)
        expect(result.current.formState.name).toEqual(newValue)
    })

    test('should reset form', () => {
        const newValue = "Juan"
        const { result } = renderHook(() => useForm(initialForm));
        const { name, onInputChange, onResetForm } = result.current
        act(() => {
            onInputChange({ target: { name: 'name', value: newValue } })
            onResetForm()
        })
        expect(result.current.name).toEqual(initialForm.name)
        expect(result.current.formState.name).toEqual(initialForm.name)
    })


})