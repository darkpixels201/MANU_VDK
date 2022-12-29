import React from "react";
import { icons } from "../Assets/Icons";

const FilledRightCircle = ({left=false,size=1}) => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          borderStyle: "solid",
          borderRadius: 50,
          borderWidth: 1,
          height: 55/size,
          width: 55/size,
          alignItems: "center",
          justifyContent: "center",
          cursor:"pointer",
        }}
      >
        
        <img src={left?icons.leftArrow:icons.rightArrow} style={{ height: 10/size, width: 18/size }} />
        
      </div>
    </div>
  );
};

export default FilledRightCircle;
