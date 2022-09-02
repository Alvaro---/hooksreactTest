import { useState } from "react";

export const useForm = (initialForm = {}) => {
    const [formState, setformState] = useState(initialForm);

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setformState({ ...formState, [name]: value }); // Por esto el name del objeto en form debe ser el mismo que el del estado
    };

    const onResetForm = () => {
        setformState(initialForm)
    }

    return {
        ...formState, // Con el operador, se enviaran las propiedades sueltas ya sin el objeto
        formState,
        onInputChange,
        onResetForm
    }
}
