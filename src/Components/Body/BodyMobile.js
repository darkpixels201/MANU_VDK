import React from "react";
import { images } from "../../Assets/Images";
import { colors } from "../../utils/Colors";
import CustomButton from "../CustomButton";
import CustomText from "../CustomText";
import Spacer from "../Spacer";
import BodySwiper from "./BodySwiper";

const BodyMobile = () => {
  return (
    <div>
      <div>
        <div style={{ width: "100%", height: "40vh" }}>
          <img
            style={{ width: "100%", position: "absolute" }}
            src={images.banner}
          />
          <div
            style={{
              position: "absolute",
              width: "auto",
              padding: 40,
              display: "flex",
              flexDirection: "column",
              justifyContent:"flex-end",
              height:240
            }}
          >
            <div>
              <CustomButton
                title="SHOP NOW"
                fontSize={15}
                justifyContent={"center"}
                borderRadius={"0"}
                width={120}
                height={35}
                color={colors.white}
                backgroundColor={colors.grey}
                fontFamily={"ClashDisplay-Light"}
                textDecoration={"underline"}
              />
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
      <Spacer height={10} />
      <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between" }}>
        <div >
          <img src={images.banner} style={{height:200, width:180}} />
        </div>
        <div>
        <img src={images.banner} style={{height:200, width:180}} />
        </div>
      </div>
      <BodySwiper />
    </div>
  );
};

export default BodyMobile;
