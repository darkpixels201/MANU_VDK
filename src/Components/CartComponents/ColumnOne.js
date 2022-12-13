import React from "react";
import { images } from "../../Assets/Images";

const ColumnOne = () => {
  return (
    <div
      style={{
        flex: 1.5,
        height: 100,
        display: "flex",
        justifyContent: "center",
        height:'100%'
      }}
    >
      <img src={images.backArrow} style={{ width: 40, height: 40 }} />
    </div>
  );
};

export default ColumnOne;
