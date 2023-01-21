import React from "react";

function Spacer(props) {
  return (
    <div
      style={{
        width: props.width || 0,
        height: props.height || 0,
        backgroundColor: "red",
      }}
    ></div>
  );
}

export default Spacer;
