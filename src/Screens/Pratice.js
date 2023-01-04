import React, { useState } from "react";
import Draggable from "react-draggable";

const Pratice = () => {
  const [start, onStart] = useState();
  const [stop, onStop] = useState();
  const dragHandlers = { onStart: onStart, onStop: onStop };
  return (
    <div>
      <Draggable
        bounds={{ top: -100, left: -100, right: 100, bottom: 100 }}
        {...dragHandlers}
      >
        <div className="box" style={{height:100, width:200}}>I can only be moved 100px in any direction.</div>
      </Draggable>
    </div>
  );
};

export default Pratice;