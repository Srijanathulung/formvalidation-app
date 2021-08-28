import { useState } from 'react';

const Basicform = () => {
  const [enteredName, setEnteredName] = useState('');
  const [enterNameTouched, setEnteredNameTouch] = useState(false);

  const enterNameIsValid = enteredName.trim() !== '';
  const nameInputIsInvalid = !enterNameIsValid && enterNameTouched;


  const nameInputChangeHandler = event => {
    setEnteredName(event.target.value);
  };

  const nameInputBlurHandler = () => {
    setEnteredNameTouch(true);
   };

  const formSubmissionHandler = event => {
    event.preventDefault();
    console.log(enteredName);

    setEnteredNameTouch(true);

    if (!enterNameIsValid) {
      return;
    }

     

    setEnteredName('');
    setEnteredNameTouch(false);
    // console.log(enteredName);
  };

  const nameInputClasses = nameInputIsInvalid ? 'form-control invalid' : 'form-control ';
  
    return (
        <form onSubmit={formSubmissionHandler}>
          <div className='control-group'>
        <div className={nameInputClasses}>
          <label htmlFor='name'>First Name</label>
            <input
              type='text'
              id='name'
              onChange={nameInputChangeHandler}
              onBlur={nameInputBlurHandler}
              value={enteredName}
            />
          {nameInputIsInvalid && <p className='error-text'>Name must not be empty</p>}
        </div>
        <div className='form-control'>
          <label htmlFor='name'>Last Name</label>
          <input type='text' id='name' />
        </div>
            </div>
            
            <div className='form-control'>
        <label htmlFor='name'>E-Mail Address</label>
        <input type='text' id='name' />
            </div>
            
            <div className='form-actions'>
        <button>Submit</button>
      </div>
        </form>
    )
}
export default Basicform;