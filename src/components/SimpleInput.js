import React,{useEffect,useState} from 'react';

const SimpleInput = (props) => {

  // const nameInputRef = useRef();
  const [enteredName, setEnteredName] = useState('')
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  const [formIsValid, setFormIsValid] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== '';
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

  useEffect(() => {
    if (enteredNameIsValid) {
      setFormIsValid(true);
    } else {
      setFormIsValid(false);
    }
  },[enteredNameIsValid])
  

  const nameInputChangeHandler = event => {
    setEnteredName(event.target.value);
  };

  const nameInputBlurHandler = event => {
    setEnteredNameTouched(true);
  
  };

  const formSubmissionHandler = event => {
    event.preventDefault();
    console.log(enteredName);

    setEnteredNameTouched(true);

    if (!enteredNameIsValid) {
      return;
    };


    // const enteredValue = nameInputRef.current.value;
    // console.log(enteredValue);

    setEnteredName('');
    setEnteredNameTouched(false);
  };

  //this is for css(making dynamic)
  const nameInputClasses = nameInputIsInvalid ? 'form-control invalid' : 'form-control ';

    return (
      <form onSubmit={formSubmissionHandler}>
        <div className={nameInputClasses}>
          <label htmlFor='name'>Your Name</label>
          <input
            type='text'
            id='name'
            onChange={nameInputChangeHandler}
            onBlur={nameInputBlurHandler}
            // ref={nameInputRef}
            value={enteredName}
          />
          {nameInputIsInvalid && (
            <p className='error-text'>Name must not be empty</p>
          )}
            </div>
            
        <div className="form-actions">
          <button disabled={!formIsValid}>Submit</button>
        </div>
      </form>
    );
  };
  
  export default SimpleInput;