import { Slider } from "@mui/material";
import React from "react";
import { icons } from "../../../Assets/Icons";
import { colors } from "../../../utils/Colors";
import { row } from "../../../utils/CommonStyles";
import Spacer from "../../Spacer";

export const CatList = () => (
  <div style={{}}>
    <Spacer height={100} />
    <CatItem label={"FILTROS"} icon={true} iconPath={icons.downArrowLine} />
    <Spacer height={50} />
    <CatItem label={"COLOR"} icon={true} iconPath={icons.plus} />
    <Spacer height={40} />
    <CatItem label={"TALLA"} paddingLeft={52} />
    <Spacer height={40} />
    <CatItem label={"INFO 3"} />
    <Spacer height={40} />
    <CatItem label={"INFO 4"} />
    <Spacer height={40} />
    <CatItem label={"INFO 5"} />
    <Spacer height={40} />
    <CatItem label={"PRECIO "} />
    <Spacer height={40} />
    <div style={{ paddingLeft: 60, paddingRight: 60 }}>
      <Slider
        size="small"
        defaultValue={0}
        aria-label="Small"
        // color="secondary"
        valueLabelDisplay="auto"
      />
      <div style={{ ...row, justifyContent: "space-between" }}>
        <span>10</span>
        <span>100</span>
      </div>
    </div>
    {/* <CustomText fontSize={18} title="FILTROS" textAlign={"left"} /> */}
  </div>
);

const CatItem = ({ label, icon, iconPath, paddingLeft }) => (
  <div
    style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      width: "60%",
    }}
  >
    <div

      style={{
        color: colors.black,
        textDecoration: "none",
        paddingLeft: paddingLeft || 50,
        cursor:"pointer"
      }}
    >
      {label}
    </div>
    {icon ? <img src={iconPath} alt="" style={{ height: 10 }} /> : <></>}
  </div>
);
