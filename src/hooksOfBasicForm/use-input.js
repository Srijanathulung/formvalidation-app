import { useState } from 'react';

const useInput = (validateValue) => {
    const [enteredValue, setEnteredValue] = useState('');
    const [valueIsTouch, setValueIsTouch] = useState(false);
    
    const valueIsValid = validateValue(enteredValue);
    const hasError = !valueIsValid && valueIsTouch;

    const valueChangeHandler = event => {
        setEnteredValue(event.target.value)
    };

    const valueBlurHandler = event => {
        setValueIsTouch(true);
    };

    const reset = () => {
        setEnteredValue('');
        setValueIsTouch(false);
    };
    
    return {
        value: enteredValue,
        valueIsValid:valueIsValid,
        // isValid:valueIsValid,
        hasError,
        valueChangeHandler,
        valueBlurHandler,
        reset
    }
 };
export default useInput;
