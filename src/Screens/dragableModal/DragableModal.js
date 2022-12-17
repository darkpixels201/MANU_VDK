import React from "react";
import Draggable from "react-draggable";
import ButtonAnchor from "../../Components/ButtonAnchor";
import CustomButton from "../../Components/CustomButton";
import CustomText from "../../Components/CustomText";
import Spacer from "../../Components/Spacer";
import { colors } from "../../utils/Colors";

const DragableModal = () => {
  return (
    <Draggable axis="y" defaultPosition={{ x: 0, y: window.innerHeight - 100 }}>
      <div style={{ width: "100%",height:window.innerHeight*2, backgroundColor: "#1B1B1B" }}>
        <Spacer height={30} />
        <div
          style={{
            height: 4,
            backgroundColor: colors.white,
            width: 70,
            margin: "auto",
          }}
        />
        <Spacer height={10} />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            paddingRight: 20,
            paddingLeft: 20,
          }}
        >
          <CustomText title="SUBTOTAL " fontSize={16} color={colors.white} />
          <CustomText title="$95.00 " fontSize={16} color={colors.white} />
        </div>
        <Spacer height={20} />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            paddingRight: 20,
            paddingLeft: 20,
          }}
        >
          <CustomText title="DISCOUNTS " fontSize={16} color={colors.grey} />
          <CustomText title="$95.00 " fontSize={16} color={colors.grey} />
        </div>
        <Spacer height={10} />
        <div
          style={{
            height: 2,
            backgroundColor: colors.white,
            width: "100%",
            margin: "auto",
            marginLeft: 20,
          }}
        />
        <Spacer height={20} />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            paddingRight: 20,
            paddingLeft: 20,
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "row",
            }}
          >
            <CustomText
              title="TOTAL "
              fontSize={16}
              color={colors.white}
              fontFamily={"ClashDisplay-SemiBold"}
            />
            <Spacer width={2} />
            <CustomText title="FINAL " fontSize={16} color={colors.white} />
          </div>
          <CustomText title="$95.00 " fontSize={16} color={colors.white} />
        </div>
        <Spacer height={40} />
        <div
          style={{
            flexDirection: "row",
            display: "flex",
            paddingRight: 20,
            paddingLeft: 20,
          }}
        >
          <input
            style={{
              width: "75%",
              padding: 5,
              backgroundColor: "#1B1B1B",
              color: "#fff",
              borderWidth: 2,
              borderColor: colors.white,
              borderStyle: "solid",
            }}
            placeholder="Enter Coupon Code here"
          />
          <a
            href=""
            style={{
              backgroundColor: "#fff",
              color: "#000",
              width: "25%",
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              textDecoration: "none",
            }}
          >
            Apply
          </a>
          {/* <ButtonAnchor/> */}
          {/* <CustomButton
            title={"Apply"}
            backgroundColor={colors.white}
            borderRadius={1}
            color={colors.black}
          /> */}
        </div>
        <Spacer height={40} />
        <div
          style={{
            flexDirection: "row",
            display: "flex",
            paddingRight: 20,
            paddingLeft: 20,
            justifyContent: "space-between",
          }}
        >
          <a
            href=""
            style={{
              backgroundColor: "#1B1B1B",
              color: "#fff",
              borderWidth: 2,
              borderColor: "#fff",
              borderStyle:"solid",
              width: "40%",
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              paddingRight: 10,
              paddingLeft: 10,
              paddingTop: 10,
              paddingBottom: 10,
              textDecoration: "none",
            }}
          >
            CONTINUE SHIP
          </a>
          <a
            href=""
            style={{
              backgroundColor: "#aaa",
              color: "#fff",
              width: "40%",
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              paddingRight: 20,
              paddingLeft: 20,
              paddingTop: 10,
              paddingBottom: 10,
              textDecoration: "none",
            }}
          >
            CHECKOUT
          </a>
          {/* <CustomButton
            title={"Apply"}
            backgroundColor={colors.white}
            borderRadius={1}
            color={colors.black}
          /> */}
        </div>
        <Spacer height={30} />
      </div>
    </Draggable>
  );
};

export default DragableModal;
