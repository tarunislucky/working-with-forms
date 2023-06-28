import { useState } from "react";

const SimpleInput = (props) => {
  const [nameInput, setNameInput] = useState("");

  const formSubmitHandler = event => {
    event.preventDefault();
    console.log(`My name is ${nameInput}`);
  }
  const nameInputChangeHandler = event => {
    setNameInput(event.target.value);
  }

  return (
    <form onSubmit={formSubmitHandler}>
      <div className='form-control'>
        <label htmlFor='name'>Your Name</label>
        <input onChange={nameInputChangeHandler} type='text' id='name' value={nameInput} />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
