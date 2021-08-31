//IMPLEMENTING 'useReducer'

import { useReducer } from 'react';

const initialInputState = {
    value: '',
    isTouch: true
}

const inputStateReducer = (state, action) => {
    if (action.type == 'INPUT') {
        return { value: action.value, isTouched: state.isTouched };
    }
    if (action.type == 'BLUR') {
        return { isTouched: true, value: state.value };
    }
    if (action.type == 'RESET') {
        return{isTouched:false,value:''}
    }
    return inputStateReducer;
}
const useInput = (validateValue) => {

   const[inputState,dispatch]= useReducer(inputStateReducer, initialInputState);

    
    const valueIsValid = validateValue(inputState.value);
  const hasError = !valueIsValid && inputState.isTouched;

  const valueChangeHandler = (event) => {
      dispatch({ type: 'INPUT', value: event.target.value });
    };
    
    const valueBlurHandler = (event) => {
        dispatch({type:'BLUR'})
    };
    
    const reset = () => {
        dispatch({type:'RESET'})
     };
    return {
        value: inputState.value,
        isValid:valueIsValid,
        hasError: hasError,
        valueChangeHandler,
        valueBlurHandler,
        reset
    };
};
export default useInput;

// USED 'useState'
// import { useState } from 'react';
// const useInput = (validateValue) => {

//     const [enteredValue, setEnteredValue] = useState('');//enteredValue is passed to the SimpleInputComponent as the value of useInput value i.e(useInput(value=>value.trim()!==''))
//     const [isTouched, setIsTouched] = useState(false);

    
//     const valueIsValid = validateValue(enteredValue);
//   const hasError = !valueIsValid && isTouched;

//   const valueChangeHandler = (event) => {
//     setEnteredValue(event.target.value);
//     };
    
//     const valueBlurHandler = (event) => {
//         setIsTouched(true);
//     };
    
//     const reset = () => {
//         setEnteredValue('');
//         setIsTouched(false);
//      };
//     return {
//         value: enteredValue,
//         isValid:valueIsValid,
//         hasError: hasError,
//         valueChangeHandler,
//         valueBlurHandler,
//         reset
//     };
// };
// export default useInput;