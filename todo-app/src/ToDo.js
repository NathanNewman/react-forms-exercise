import React from "react";

const ToDo = ({ id, name, handleRemove }) => {
  const remove = () => handleRemove(id);
  return (
    <div>
      <p>
        {name} <button onClick={remove}>X</button>
      </p>
    </div>
  );
};

export default ToDo;
