import React, { useState } from "react";
import { colors } from "../utils/Colors";
import CustomText from "./CustomText";

export const DropdownCom = (props) => {
  const [value, setValue] = useState("XS");
  function val(e) {
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
        color={props.on ? colors.white : colors.purple}
      />

      <div
        style={{
          width: 1,
          height: 25,
          backgroundColor: props.on ? colors.white : colors.purple,
        }}
      />
      <select
        style={{
          display: "flex",
          width: 14,
          borderWidth: 0,
          cursor: "pointer",
          backgroundColor:props.on ? colors.purple : colors.lightGreen,
          color:props.on ? colors.white : colors.purple
        }}
        id={"select_id"}
        onChange={val}
        value={value}
        styles={customStyles}
      >
        {options.map((opt, index)=>(

        <option key={index} style={{color:props.on ? colors.white : colors.black,}} value={opt.value}>{opt.text}</option>
        ))}
      </select>
      
    </div>
  );
};

const customStyles = { 
  control: (base, state) => ({
    ...base,
    backgroundColor: "#023950",
    // match with the menu
    borderRadius: state.isFocused ? "3px 3px 0 0" : 3,
    // Overwrittes the different states of border
    borderColor: state.isFocused ? "yellow" : "green",
    // Removes weird border around container
    boxShadow: state.isFocused ? null : null,
    "&:hover": {
      // Overwrittes the different states of border
      borderColor: state.isFocused ? "red" : "blue"
    }
  }),
  menu: base => ({
    ...base,
    // override border radius to match the box
    borderRadius: 0,
    // kill the gap
    marginTop: 0
  }),
  menuList: base => ({
    ...base,
    // kill the white space on first and last option
    padding: 0
  })

}


