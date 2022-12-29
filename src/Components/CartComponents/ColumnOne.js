import React from "react";
import { Link } from "react-router-dom";
import { images } from "../../Assets/Images";
import FilledRightCircle from "../FilledCircle";

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
      <Link to="/">
      {/* <img src={images.backArrow} style={{ width: 40, height: 40 }} /> */}
      <FilledRightCircle left={true}  />
      </Link>
    </div>
  );
};

export default ColumnOne;
