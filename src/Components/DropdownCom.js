import React, { useState } from "react";
import { colors } from "../utils/Colors";
import CustomText from "./CustomText";

export const DropdownCom = () => {
  const [value, setValue] = useState("XS");
  function val() {
    let d = document.getElementById("select_id").value;
    setValue(d);
  }
  return (
    <div
      style={{
        display:"flex",
        flexDirection:"row",
        width: 70,
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <CustomText title={value} fontSize={18} color={colors.black} />
      <div
        style={{
          width: 1,
          height: 20,
          backgroundColor: colors.black,
        }}
      />
      <select
        style={{ display:"flex" , width: 14, borderWidth: 0, cursor:"pointer" }}
        id={"select_id"}
        onChange={val}
      >
        {/* <optgroup> */}
        <option value="XS">XS</option>
        <option value="S">S</option>
        <option value="M">M</option>
        <option value="L">L</option>
        <option value="Xl">Xl</option>
        <option value="XXl" selected>
          XXl
        </option>
        {/* </optgroup> */}
      </select>
    </div>
  );
};
