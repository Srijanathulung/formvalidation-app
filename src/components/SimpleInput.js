import React,{useState,useRef,useEffect} from 'react';

const SimpleInput = (props) => {

  const nameInputRef = useRef();
  const [enteredName, setEnteredName] = useState('')
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
  const [enteredNameConfirmed, setEnteredNameConfirmed] = useState(false);

  useEffect(() => {
    if (enteredNameIsValid) {
      console.log('Name Input is valid!');
    }
  },[enteredNameIsValid])
  

  const nameInputChangeHandler = event => {
    setEnteredName(event.target.value);
  };

  const formSubmissionHandler = event => {
    event.preventDefault();
    console.log(enteredName);

    setEnteredNameConfirmed(true);

    if (enteredName.trim() == '') {
      setEnteredNameIsValid(false);
      return;
    };

    setEnteredNameIsValid(true);

    const enteredValue = nameInputRef.current.value;
    console.log(enteredValue);

    setEnteredName('');
  };

  const nameInputIsInvalid = !enteredNameIsValid && enteredNameConfirmed;
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
            ref={nameInputRef}
            value={enteredName}
          />
          {nameInputIsInvalid && (
            <p className='error-text'>Name must not be empty</p>
          )}
            </div>
            
        <div className="form-actions">
          <button>Submit</button>
        </div>
      </form>
    );
  };
  
  export default SimpleInput;