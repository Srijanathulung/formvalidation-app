import { useState } from 'react';
const useInput = (validateValue) => {

    const [enteredValue, setEnteredValue] = useState('');//enteredValue is passed to the SimpleInputComponent as the value of useInput value i.e(useInput(value=>value.trim()!==''))
    const [isTouched, setIsTouched] = useState(false);
    
    const valueIsValid = validateValue(enteredValue);
  const hasError = !valueIsValid && isTouched;

  const valueChangeHandler = (event) => {
    setEnteredValue(event.target.value);
    };
    
    const valueBlurHandler = (event) => {
        setIsTouched(true);
    };
    
    const reset = () => {
        setEnteredValue('');
        setIsTouched(false);
     };
    return {
        value: enteredValue,
        isValid:valueIsValid,
        hasError: hasError,
        valueChangeHandler,
        valueBlurHandler,
        reset
    };
};
export default useInput;