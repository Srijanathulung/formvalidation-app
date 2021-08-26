import { useState } from 'react';

const Basicform = () => {
  const [enteredName, setEnteredName] = useState('');
  const [enterNameTouched, setEnteredNameTouch] = useState(false);


  const nameInputChangeHandler = event => {
    setEnteredName(event.target.value);
  };
  const nameInputBlurHandler = () => {
    setEnteredNameTouch(true);
   };

  const formSubmissionHandler = event => {
    event.preventDefault();
    console.log(enteredName);
    if (enteredName.trim() == '') {
      return;
    }
    setEnteredName('');
    console.log(enteredName);
  };

    return (
        <form onSubmit={formSubmissionHandler}>
          <div className='control-group'>
        <div className='form-control'>
          <label htmlFor='name'>First Name</label>
            <input
              type='text'
              id='name'
              onChange={nameInputChangeHandler}
              onBlur={nameInputBlurHandler}
              value={enteredName}
            />
          
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