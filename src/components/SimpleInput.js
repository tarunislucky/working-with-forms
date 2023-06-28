import { useState } from "react";

const SimpleInput = (props) => {
  const [nameInput, setNameInput] = useState("");
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
  const [enteredNameIsTouched, setEnteredNameIsTouched] = useState(false);

  const formSubmitHandler = event => {
    event.preventDefault();
    setEnteredNameIsTouched(true);
    if (nameInput.trim() === "") {
      setEnteredNameIsValid(false);
      return;
    }
    setEnteredNameIsValid(true);
  }
  const nameInputChangeHandler = event => {
    setNameInput(event.target.value);
  }
  const nameInputBlurHandler = event => {
    setEnteredNameIsTouched(true);
    if (nameInput.trim() === "") {
      setEnteredNameIsValid(false);
      return;
    }
  }

  const nameInputIsInvalid = !enteredNameIsValid && enteredNameIsTouched;


  const nameInputClasses = nameInputIsInvalid ? "form-control invalid" : "form-control ";
  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input onChange={nameInputChangeHandler} onBlur={nameInputBlurHandler} type='text' id='name' value={nameInput} />
        {nameInputIsInvalid && <p className="error-text">Name must not be empty</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
