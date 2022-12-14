import React from "react";
import CustomText from "./CustomText";
import { colors } from "../utils/Colors";
import Spacer from "./Spacer";

const Footer = () => {
  return (
    <div>
      <div
        style={{
          width: "100%",
          height: "30vh",
          backgroundColor: colors.lightBlack,
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <div style={{}}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <CustomText title="CONTACTO" color={colors.white} fontSize={15} />
            <Spacer height={10} />
            <CustomText
              title="+1 321 450 9305"
              color={colors.white}
              fontSize={15}
            />
            <Spacer height={30} />
            <div style={{ display: "flex" }}>
              <CustomText
                title="Privacy Policy"
                color={colors.white}
                fontSize={15}
              />
              <CustomText
                title="Terms And Conditions "
                color={colors.white}
                fontSize={15}
                paddingLeft={15}
              />
              <CustomText
                title="Returns & Exchange "
                color={colors.white}
                fontSize={15}
                paddingLeft={15}
              />
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <CustomText title="MANU VDK" color={colors.white} fontFamily="ClashDisplay-SemiBold" />
          <CustomText title="STORE" color={colors.white} />
        </div>
      </div>
    </div>
  );
};

export default Footer;