import React, { useState } from "react";
import { colors } from "../utils/Colors";
import CustomText from "./CustomText";

export const DropdownCom = () => {
  const [value, setValue] = useState("XS");
  function val() {
    let d = document.getElementById("select_id").value;
    console.log(d);
    setValue(d);
  }

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
        defaultValue={val}
      >
        {/* <optgroup> */}
        <option value="XS">XS</option>
        <option value="S">S</option>
        <option value="M">M</option>
        <option value="L">L</option>
        <option value="Xl">Xl</option>
        <option value="XXl">XXl</option>
        {/* </optgroup> */}
      </select>
    </div>
  );
};

// New
// const options = [
//   {value: '2XS', text: '2XS'},
//   {value: 'S', text: 'S'},
//   {value: 'M', text: 'M'},
//   {value: 'L', text: 'L'},
//   {value: 'XL', text: 'XL'},
//   {value: '2XL', text: '2XL'},
// ];

// const [selected, setSelected] = useState(options[0].value);

// const handleChange = event => {
//   console.log(event.target.value);
//   setSelected(event.target.value);
// };

// <div>
//     <select value={selected} onChange={handleChange}>
//       {options.map(option => (
//         <option key={option.value} value={option.value}>
//           {option.text}
//         </option>
//       ))}
//     </select>
//   </div>
