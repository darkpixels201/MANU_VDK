import React, { useState } from "react";
import { colors } from "../utils/Colors";
import CustomText from "./CustomText";

export const DropdownCom = () => {
  const [value, setValue] = useState("XS");
  function val(e) {
    // console.log(e.target.value);
    setValue(e.target.value);
  }
  const options = [
      {value: 'XS', text: 'XS'},
      {value: 'S', text: 'S'},
      {value: 'M', text: 'M'},
      {value: 'L', text: 'L'},
      {value: 'XL', text: 'XL'},
      {value: 'XXL', text: 'XXL'},
    ];
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        width: 70,
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <CustomText
        title={value}
        fontSize={window.innerWidth <= 700 ? 13 : 18}
        color={colors.black}
      />

      <div
        style={{
          width: 1,
          height: 25,
          backgroundColor: colors.black,
        }}
      />
      <select
        style={{
          display: "flex",
          width: 14,
          borderWidth: 0,
          cursor: "pointer",
        }}
        id={"select_id"}
        onChange={val}
        value={value}
        // defaultValue={val}
      >
        {options.map((opt)=>(

        <option value={opt.value}>{opt.text}</option>
        ))}
      </select>
      
    </div>
  );
};


