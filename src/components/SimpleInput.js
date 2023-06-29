import { useState } from "react";

const SimpleInput = (props) => {
  // states
  const [enteredName, setEnteredName] = useState("");
  const [inputIsTouched, setInputIsTouched] = useState(false);

  // Derived states
  const enteredNameIsValid = enteredName.trim() !== "";
  const nameInputIsInvalid = !enteredNameIsValid && inputIsTouched;
  // form validity / can add more checks using &&
  const formIsValid = enteredNameIsValid;

  // Handlers
  const formSubmitHandler = event => {
    event.preventDefault();

    setInputIsTouched(true);
    if (!enteredNameIsValid) return;

    console.log(enteredName);
    // reset the input
    setEnteredName('');
    setInputIsTouched(false);
  }
  const nameInputChangeHandler = event => {
    setEnteredName(event.target.value);
    setInputIsTouched(true);
  }
  const nameInputBlurHandler = event => {
    setInputIsTouched(true);
  }

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputIsInvalid ? "form-control invalid" : "form-control "}>
        <label htmlFor='name'>Your Name</label>
        <input onChange={nameInputChangeHandler} onBlur={nameInputBlurHandler} type='text' id='name' value={enteredName} />
        {nameInputIsInvalid && <p className="error-text">Name must not be empty</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
