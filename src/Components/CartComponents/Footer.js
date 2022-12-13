import React from "react";
import CustomText from "../CustomText";
import Spacer from "../Spacer";

const Footer = () => {
  return (
    <div style={{ paddingLeft:100}}>
      <Spacer height={50} />
      <CustomText title="Ventadirekta © 2021" fontSize={16} />
      <CustomText title="All Rights Reserved" fontSize={16} />
      <Spacer height={50} />
    </div>
  );
};

export default Footer;
