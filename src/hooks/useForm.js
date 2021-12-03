// write your custom hook here to control your checkout form
import { useState } from "react"

const useForm = (initialValues) => {
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [values, setValues] = useState(initialValues);

    const handleChanges = event => {
        setValues({ ...values, [event.target.name]:event.target.value});
    }
    const handleSubmit = event => {
        event.preventDefault();
        setShowSuccessMessage(true);
    }

    return [values,handleChanges,handleSubmit, showSuccessMessage]

}

export default useForm;