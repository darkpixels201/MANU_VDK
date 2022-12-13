import { OutlinedInput } from "@mui/material";
import React from "react";
import { images } from "../../Assets/Images";
import CustomButton from "../CustomButton";
import CustomText from "../CustomText";
import Spacer from "../Spacer";


const ColumnThree = () => {
  return (
    <div style={{ flex: 2.5, paddingRight: 100 }}>
      <CustomText title="PUEDE INTERESARTE" fontSize={16} />
      <Spacer height={20} />

      <div style={{ display: "flex", flexDirection: "row" }}>
        <div style={{ width: "50%" }}>
          <img src={images.banner} style={{ width: "100%" }} />
          <Spacer height={10} />
          <div
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              display: "flex",
            }}
          >
            <CustomText title="PRoducto nombre" fontSize={12} />
            <CustomText title="$95.00" fontSize={12} />
          </div>
        </div>
      </div>
      <Spacer height={50} />
      <div
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          display: "flex",
        }}
      >
        <CustomText title="SUBTOTAL" fontSize={16} />
        <CustomText title="$95.00" fontSize={16} />
      </div>
      <Spacer height={12} />
      <div
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          display: "flex",
        }}
      >
        <CustomText title="DISCOUNTS" fontSize={16} />
        <CustomText title="$95.00" fontSize={16} />
      </div>
      <Spacer height={12} />
      <div style={{height:1,backgroundColor:"#000",width:"130%"}}/>
      <Spacer height={12} />
      <div
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          display: "flex",
        }}
      >
        <CustomText title="TOTAL" fontSize={16} />
        <CustomText title="$95.00" fontSize={16} />
      </div>
      <Spacer height={50} />
      <div style={{
          flexDirection: "row",
          display: "flex",
        }}>

      <input style={{width:'75%',padding:5}} placeholder="Enter Coupon Code here"/>
      <button style={{backgroundColor:"#000",color:"#fff",width:'25%'}}>Apply</button>
      </div>
    </div>
  );
};

export default ColumnThree;
