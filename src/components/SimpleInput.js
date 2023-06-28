import { useState } from "react";

const SimpleInput = (props) => {
  const [nameInput, setNameInput] = useState("");
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(true);

  const formSubmitHandler = event => {
    event.preventDefault();

    if (nameInput.trim() === "") {
      setEnteredNameIsValid(false);
      return;
    }
    setEnteredNameIsValid(true);
  }
  const nameInputChangeHandler = event => {
    setNameInput(event.target.value);
  }

  const nameInputClasses = enteredNameIsValid ? "form-control" : "form-control invalid";
  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input onChange={nameInputChangeHandler} type='text' id='name' value={nameInput} />
        {!enteredNameIsValid && <p className="error-text">Name must not be empty</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
