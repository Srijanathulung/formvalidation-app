import { useState } from 'react';


const useInput = () => {
    const [enteredValue, setEnteredValue] = useState('');
    const [valueIsTouch, setValueIsTouch] = useState(false);
    
    

    const valueChangeHandler = event => {
        setEnteredValue(event.target.value)
    };

    const valueBlurHandler = event => {
        setValueIsTouch(true);
    };
    
    return {
        value: enteredValue,
        valueChangeHandler,
        valueBlurHandler
    }
 };
export default useInput;
