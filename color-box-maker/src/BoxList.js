import React, { useState } from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";

const BoxList = () => {
  const [boxes, updateBoxes] = useState([]);
  const add = (boxObj) => {
    setBoxes((boxes) => [...boxes, boxObj]);
  };
  const remove = (id) => {
    setBoxes((boxes) => boxes.filter((box) => box.id !== id));
  };
  const box = boxes.map((box) => (
    <Box
      key={box.id}
      id={box.id}
      width={box.width}
      height={box.height}
      handleRemove={remove}
      backgroundColor={box.backgroundColor}
    />
  ));
  return (
    <div>
      <NewBoxForm createBox={add} />
      {box}
    </div>
  );
};

export default BoxList;
