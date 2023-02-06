import React, { useState } from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";

const BoxList = () => {
  const [boxes, updateBoxes] = useState([]);
  return (
    <div>
      <NewBoxForm />
      <div>
        {boxes.map((box) => (
          <Box key={box.id} props={box} />
        ))}
      </div>
    </div>
  );
}

export default BoxList;