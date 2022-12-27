import React from "react";
import { colors } from "../../../utils/Colors";
import { row } from "../../../utils/CommonStyles";
import CustomText from "../../CustomText";
import { DropdownCom } from "../../DropdownCom";
import { FilledCircleCom } from "../../FilledCircleCom";
import Spacer from "../../Spacer";

export const Card = ({ footer, image }) => (
  <>
    {footer === "up" ? (
      <>
        <CardFooter />
        <Spacer height={10} />
      </>
    ) : (
      <></>
    )}
    <CardImage height={"auto"} image={image} />
    {footer === "down" ? (
      <>
        <Spacer height={10} />
        <CardFooter />
      </>
    ) : (
      <></>
    )}
  </>
);

const FilledCircle = [
  {
    id: 1,
    bgcolor: colors.lightGray,
  },
  {
    id: 2,
    bgcolor: colors.black,
  },
  // {
  //   id: 3,
  //   bgcolor: colors.white,
  // },
];

export const CardFooter = () => (
  <div>
    <div
      style={{
        ...row,
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div>
        <CustomText
          fontSize={16}
          title="Brasier de"
          textAlign={"left"}
          fontFamily={"ClashDisplay-SemiBold"}
          // color={colors.white}
        />
        {/* <Spacer height={5} /> */}
        <CustomText
          fontSize={16}
          title="Banda Ancha"
          textAlign={"left"}
          // color={colors.white}
        />
      </div>
      <div
        style={{
          // backgroundColor: colors.purple,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      ></div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          // justifyContent: "center",
          alignItems: "center",
          // backgroundColor: colors.parrot,
        }}
      >
        <DropdownCom />

        <FilledCircleCom FilledCircle={FilledCircle} />
      </div>
    </div>
    <div
      style={{
        ...row,
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div>
        <s style={{ color: "#aaa" }}>$135.00</s>
        <CustomText fontSize={16} title="$95.00" />
      </div>
      <div>
        <a
          href=""
          style={{
            paddingRight: 25,
            paddingLeft: 25,
            paddingTop: 5,
            paddingBottom: 5,
            backgroundColor: "#686868",
            color: colors.white,
            textDecoration: "none",
            fontFamily: "ClashDisplay-Regular",
          }}
        >
          +ADD
        </a>
      </div>
    </div>
  </div>
);
export const CardImage = ({ height, image }) => (
  <img src={image} alt="" style={{ height: height || "auto", width: "100%" }} />
);
