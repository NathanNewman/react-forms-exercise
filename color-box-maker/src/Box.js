import React from "react";

const Box = ({
  id,
  handleRemove,
  width = 10,
  height = 10,
  backgroundColor = "red",
}) => {
  const remove = () => handleRemove(id);
  return (
    <div>
      <div
        style={{
          height: `${height}em`,
          width: `${width}em`,
          backgroundColor,
          className: "box",
        }}
      />
      <button onClick={remove}>X</button>
    </div>
  );
};

export default Box;
