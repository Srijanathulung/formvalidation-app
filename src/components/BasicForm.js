import { useState } from 'react';
import useInput from '../hooksOfBasicForm/use-input';


const Basicform = props => {


  const [enteredName, setEnteredName] = useState('');
  const [enteredLastName, setEnteredLastName] = useState('');

  const [enterNameTouched, setEnteredNameTouch] = useState(false);
  const [enterLastNameTouched, setEnteredLastNameTouch] = useState(false);
  // const [formIsValid, setFormIsValid] = useState(false);

  const [enteredEmail, setEnteredEmail] = useState('');
  const [enterEmailTouched, setEnteredEmailTouch] = useState(false);

  const enterEmailIsValid = enteredEmail.trim().includes('@');
  const enterEmailIsInvalid = !enterEmailIsValid && enterEmailTouched;

  const enterNameIsValid = enteredName.trim() !== '';
  const nameInputIsInvalid = !enterNameIsValid && enterNameTouched;

  const enterLastNameIsValid = enteredLastName.trim() !== '';
  const lastNameInputIsInvalid = !enterLastNameIsValid && enterLastNameTouched;

  // useEffect(() => {
  //   if (enterNameIsValid) {
  //     setFormIsValid(true);
  //   } else {
  //     setFormIsValid(false);
  //   }
  // }, [enterNameIsValid]);

  let formIsValid = false;

    if (enterNameIsValid && enterLastNameIsValid && enterEmailIsValid) {
      formIsValid = true;
    } 

  const nameInputChangeHandler = event => {
    setEnteredName(event.target.value);
  };

  const nameInputBlurHandler = () => {
    setEnteredNameTouch(true);
  };
  
  const lastNameChangeHandler = event => {
    setEnteredLastName(event.target.value);
  };

  const lastNameInputBlurHandler = () => {
    setEnteredLastNameTouch(true);
  };
  
  const emailInputChangeHandler = event => {
    setEnteredEmail(event.target.value);
  };

  const emailInputBlurHandler = () => {
    setEnteredEmailTouch(true);
  };

  const formSubmissionHandler = event => {
    event.preventDefault();
    console.log(enteredName);

    setEnteredNameTouch(true);
    setEnteredLastNameTouch(true);
    setEnteredEmailTouch(true);



    if (!enterNameIsValid) {
      return;
    }


    setEnteredName('');
    setEnteredNameTouch(false);
    
    setEnteredLastName('');
    setEnteredLastNameTouch(false);
    // console.log(enteredName);

    setEnteredEmail('');
    setEnteredEmailTouch(false);
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
          {nameInputIsInvalid && <p className='error-text'>LastName must not be empty</p>}
        </div>
        <div className='form-control'>
          <label htmlFor='name'>Last Name</label>
            <input
              type='text'
              id='name'
              onChange={lastNameChangeHandler}
              onBlur={lastNameInputBlurHandler}
              value={enteredLastName} />
             {lastNameInputIsInvalid && <p className='error-text'>LastName must not be empty</p>}
        </div>
            </div>
            
            <div className='form-control'>
        <label htmlFor='name'>E-Mail Address</label>
          <input
            type='text'
            id='email'
            onChange={emailInputChangeHandler}
            onBlur={emailInputBlurHandler}
            value={enteredEmail}
          />
          {enterEmailIsInvalid && <p className='error-text'>Email must not be empty</p>}
            </div>
            
            <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
        </form>
    )
}
export default Basicform;