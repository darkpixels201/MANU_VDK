import React from "react";
import { Link } from "react-router-dom";
import { images } from "../../Assets/Images";
import { colors } from "../../utils/Colors";
import CustomButton from "../CustomButton";
import CustomText from "../CustomText";
import Spacer from "../Spacer";
import ToggleSwitch from "../ToggleSwitch";
import BodySwiper from "./BodySwiper";

const BodyMobile = (props) => {
  return (
    <div style={{ backgroundColor: colors.colorA }}>
      <div>
        <div style={{ width: "100%", height: "auto" }}>
          <img
            style={{ width: "100%", height: "auto" }}
            src={images.mobileHomeBanner}
          />
          <div
            style={{
              position: "absolute",
              width: "auto",
              padding: 40,
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              height: 300,
              // zIndex:100
              top:80
            }}
          >
            <div>
              <Link to="/compareproducts">
                <CustomButton
                  title="SHOP NOW"
                  fontSize={15}
                  justifyContent={"center"}
                  borderRadius={"0"}
                  width={120}
                  height={35}
                  color={colors.white}
                  backgroundColor={colors.colorC}
                  fontFamily={"ClashDisplay-Light"}
                  textDecoration={"underline"}
                />
              </Link>
            </div>
            <div>
              <CustomText
                title="SHAPE WEAR "
                fontFamily={"ClashDisplay-SemiBold"}
                fontSize={30}
              />
              <CustomText
                title="FOR EVERYDAY "
                fontFamily={"ClashDisplay-Regular"}
                fontSize={12}
              />
            </div>
          </div>
        </div>
        
      </div>
      {/* <Spacer height={100} /> */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop:20
        }}
      >
        <div>
          <img src={images.slide14} style={{ height: 200, width: '95%' }} />
        </div>
        <div>
          <img src={images.slide17} style={{ height: 200,  width: '100%' }} />
        </div>
      </div>
      <Spacer height={12} />
      <ToggleSwitch on={props.on} setOn={props.setOn} />
      <BodySwiper on={props.on} setOn={props.setOn} />
    </div>
  );
};

export default BodyMobile;
