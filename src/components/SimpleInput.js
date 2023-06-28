import { useState } from "react";

const SimpleInput = (props) => {
  // states
  const [enteredName, setEnteredName] = useState("");
  const [inputIsTouched, setInputIsTouched] = useState(false);

  // Derived states
  const invalidName = enteredName.trim() === "";
  const invalidInput = invalidName && inputIsTouched;

  // Handlers
  const formSubmitHandler = event => {
    event.preventDefault();

    setInputIsTouched(true);
    if (invalidName) return;

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
      <div className={invalidInput ? "form-control invalid" : "form-control "}>
        <label htmlFor='name'>Your Name</label>
        <input onChange={nameInputChangeHandler} onBlur={nameInputBlurHandler} type='text' id='name' value={enteredName} />
        {invalidInput && <p className="error-text">Name must not be empty</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
