
import useInput from '../hooksOfBasicForm/use-input';


const Basicform = props => {
  const {
    value: enteredName,
    valueIsValid: enterNameIsValid,
    // isValid: enterNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler:nameChangeHandler,
    valueBlurHandler:nameBlurHandler,
    reset:resetNameInput
  } = useInput(value => value.trim() !== '')
  
  const {
    value: enteredLastName,
    valueIsValid: enterLastNameIsValid,
    // isValid: enterLastNameIsValid,
    hasError: lastNameHasError,
    valueChangeHandler:lastNameChangeHandler,
    valueBlurHandler:lastNameBlurHandler,
    reset:resetLastNameInput
  } = useInput(value => value.trim() !== '')
  
  const {
    value: enteredEmail,
    valueIsValid: enterEmailIsValid,
    // isValid: enterEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler:emailChangeHandler,
    valueBlurHandler:emailBlurHandler,
    reset:resetEmailInput
  } = useInput(value=>value.includes('@'))



  // const [enteredName, setEnteredName] = useState('');
  // const [enteredLastName, setEnteredLastName] = useState('');

  // const [enterNameTouched, setEnteredNameTouch] = useState(false);
  // const [enterLastNameTouched, setEnteredLastNameTouch] = useState(false);
  // const [formIsValid, setFormIsValid] = useState(false);

  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [enterEmailTouched, setEnteredEmailTouch] = useState(false);

  // const enterEmailIsValid = enteredEmail.trim().includes('@');
  // const enterEmailIsInvalid = !enterEmailIsValid && enterEmailTouched;

  // const enterNameIsValid = enteredName.trim() !== '';
  // const nameInputIsInvalid = !enterNameIsValid && enterNameTouched;

  // const enterLastNameIsValid = enteredLastName.trim() !== '';
  // const lastNameInputIsInvalid = !enterLastNameIsValid && enterLastNameTouched;

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

  // const nameInputChangeHandler = event => {
  //   setEnteredName(event.target.value);
  // };

  // const nameInputBlurHandler = () => {
  //   setEnteredNameTouch(true);
  // };
  
  // const lastNameChangeHandler = event => {
  //   setEnteredLastName(event.target.value);
  // };

  // const lastNameInputBlurHandler = () => {
  //   setEnteredLastNameTouch(true);
  // };
  
  // const emailInputChangeHandler = event => {
  //   setEnteredEmail(event.target.value);
  // };

  // const emailInputBlurHandler = () => {
  //   setEnteredEmailTouch(true);
  // };

  const formSubmissionHandler = event => {
    event.preventDefault();
    console.log(enteredName);
    
        if (!formIsValid) {
          return;
        }

    console.log('form is subitted');
    console.log(enteredName,enteredLastName,enteredEmail)
    // setEnteredNameTouch(true);
    // setEnteredLastNameTouch(true);
    // setEnteredEmailTouch(true);




    // setEnteredName('');
    // setEnteredNameTouch(false);
    resetNameInput();
    
    resetLastNameInput();
    // setEnteredLastName('');
    // setEnteredLastNameTouch(false);
    // console.log(enteredName);

    resetEmailInput();
    // setEnteredEmail('');
    // setEnteredEmailTouch(false);
  };

  const nameInputClasses = nameInputHasError
    ? 'form-control invalid'
    : 'form-control ';
  const lastNameInputClasses = lastNameHasError
    ? 'form-control invalid'
    : 'form-control ';
  const emailInputClasses = emailInputHasError
    ? 'form-control invalid'
    : 'form-control ';
  
  
    return (
        <form onSubmit={formSubmissionHandler}>
          <div className='control-group'>
        <div className={nameInputClasses}>
          <label htmlFor='name'>First Name</label>
            <input
              type='text'
              id='name'
              value={enteredName}
              onChange={nameChangeHandler}
              onBlur={nameBlurHandler}
            />
            {nameInputHasError && (
              <p className='error-text'>Name must not be empty</p>
            )}
        </div>
        <div className={lastNameInputClasses}>
          <label htmlFor='name'>Last Name</label>
            <input
              type='text'
              id='name'
              onChange={lastNameChangeHandler}
              onBlur={lastNameBlurHandler}
              value={enteredLastName} />
            {lastNameHasError && (
              <p className='error-text'>LastName must not be empty</p>
            )}
        </div>
            
            <div className={emailInputClasses}>
        <label htmlFor='name'>E-Mail Address</label>
          <input
            type='text'
            id='email'
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
            value={enteredEmail}
            />
          {emailInputHasError && (
            <p className='error-text'>Email must not be empty</p>
            )}
            </div>
            </div>
            
            <div className='form-actions'>
          <button
            disabled={!formIsValid}>Submit</button>
      </div>
        </form>
    )
}
export default Basicform;