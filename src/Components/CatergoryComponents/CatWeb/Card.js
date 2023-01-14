import React from "react";
import { Link } from "react-router-dom";
import { colors } from "../../../utils/Colors";
import { row } from "../../../utils/CommonStyles";
import CustomText from "../../CustomText";
import { DropdownCom } from "../../DropdownCom";
import { FilledCircleCom } from "../../FilledCircleCom";
import Spacer from "../../Spacer";

export const Card = ({ footer, image, ...props }) => (
  <>
    {footer === "up" ? (
      <>
        <CardFooter />
        <Spacer height={10} />
      </>
    ) : (
      <></>
    )}
    <CardImage1 height={"auto"} image={image} id={props.id} />
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

export const CardFooter = ({ index, ...props }) => (
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
        {index === 0 ? <s style={{ color: "#aaa" }}>$135.00</s> : null}

        {/* <s style={{ color: "#aaa" }}>$135.00</s> */}
        <div style={{ marginTop: index === 0 ? 0 : 15 }} />
        <CustomText
          fontSize={16}
          title={props.price}
          marginTop={index === 0 ? 50 : 50}
        />
        {/* <span style={{marginTop:50}} /> */}
      </div>
      <div>
        <div
          style={{
            paddingRight: 25,
            paddingLeft: 25,
            paddingTop: 5,
            paddingBottom: 5,
            backgroundColor: "#686868",
            color: colors.white,
            textDecoration: "none",
            fontFamily: "ClashDisplay-Regular",
            cursor: "pointer",
          }}
        >
          +ADD
        </div>
      </div>
    </div>
  </div>
);
export const CardImage = ({ height, image, ...props }) => (
  <Link
    to={`/compareproducts/${props.id}`}
    style={{ textDecoration: "none", color: colors.black }}
  >
    <img
      src={image}
      alt=""
      style={{ height: height || "auto", width: "100%" }}
    />
  </Link>
);

export const CardImage1 = ({ height, image, ...props }) => (
  <Link
    to={`/compareproducts/${props.id}`}
    style={{ textDecoration: "none", color: colors.black }}
  >
    <img
      src={image}
      alt=""
      style={{ height: height || "auto", width: "100%" }}
    />
  </Link>
);
