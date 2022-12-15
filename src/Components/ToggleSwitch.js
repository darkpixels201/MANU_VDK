import { Switch } from "@mui/material";
import React from "react";

const ToggleSwitch = (props) => {
    const label = { inputProps: { "aria-label": "Switch demo" } };
  return (
    <div>
      <Switch
        {...label}
        onClick={() => {
          props.setOn(!props.on);
        }}
      />
    </div>
  );
};

export default ToggleSwitch;
