import React, { useState } from "react";
import NewToDoForm from "./NewToDoForm";
import ToDo from "./ToDo";
import { v4 as uuidv4 } from "uuid";

const ToDoList = () => {
  const initialState = [{ id: uuidv4(), name: "Code App" }];
  const [toDos, setToDos] = useState(initialState);
  const add = (name) => {
    setToDos((toDos) => [...toDos, { id: uuidv4(), name }]);
  };
  const remove = (id) => {
    setToDos((toDos) => toDos.filter((toDo) => toDo.id !== id));
  };
  const task = toDos.map((toDo) => (
    <ToDo key={toDo.id} id={toDo.id} name={toDo.name} handleRemove={remove} />
  ));
  return (
    <div>
      <NewToDoForm add={add} />
      <h2>ToDo List</h2>
      {task}
    </div>
  );
};

export default ToDoList;
