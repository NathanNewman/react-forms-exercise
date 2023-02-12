import React, { useState } from "react";

const NewToDoForm = ({ add }) => {
  const INITIAL_STATE = {
    name: "",
  };

  const [toDo, setToDo] = useState(INITIAL_STATE);
  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setToDo({
      ...toDo,
      [name]: value,
    });
  };
  const handleSubmit = (evt) => {
    evt.preventDefault();
    add(toDo.name);
  };
  return (
    <form>
      <label htmlFor="toDoInput">Create New ToDo:</label>
      <input
        id="toDoInput"
        type="text"
        name="name"
        placeholder="ToDo"
        value={toDo.name}
        onChange={handleChange}
      />
      <button onClick={handleSubmit}>Add to list</button>
    </form>
  );
};

export default NewToDoForm;
