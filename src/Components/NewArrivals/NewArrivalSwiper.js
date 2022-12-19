import React, { useState } from "react";
import CustomText from "../CustomText";
import CustomButton from "../CustomButton";
import { images } from "../../Assets/Images";
import { colors } from "../../utils/Colors";
import Spacer from "../Spacer";
import { Autocomplete, TextField } from "@mui/material";
import { DropdownCom } from "../DropdownCom";
import { Link } from "react-router-dom";

const NewArrivalSwiper = (props) => {
  const customer = ["2XS", "XS", "M", "L", "XL", "2XL"];

  const [currentcustomer, setCurrentCustomer] = useState(null);
  const [count, setCount] = useState(1);

  const FilledCircle = [
    {
      id: 1,
      bgcolor: colors.lightGray,
    },
    {
      id: 2,
      bgcolor: colors.black,
    },
    {
      id: 3,
      bgcolor: colors.white,
    },
  ];
  return (
    <div
      style={{
        height: window.innerWidth <= 700 ? "50vh" : "90vh",
        width: "89%",
        display: "flex",
        justifyContent: "center",
        display: "inline-block",
        // backgroundColor: colors.black
        // backgroundColor: colors.black,
      }}
    >
      {/* <Spacer height={20} /> */}
      <div
        style={{
          width: window.innerWidth <= 1000 ? "90%" : "85%",
          height: window.innerWidth <= 1000 ? "40vh" : "55vh",
          // backgroundColor: props.on ? colors.black : colors.pureWite,
          // backgroundColor: colors.lightGreen,
        }}
      >
        {/* <div style={{ width: "90%", height: "40vh" }}> */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",

            // position:"relative",
            // backgroundColor: colors.orangeLight,
          }}
        >
          <div style={{ top: 0, display: "flex", justifyContent: "right" }}>
            <div
              style={{
                backgroundColor: colors.grey,
                height: 30,
                width: 60,
                position: "absolute",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <CustomText title="NEW" color={colors.white} fontSize={14} />
            </div>
            <img
              src={props.image}
              style={{ width: "95%", height: 260, objectFit: "fill" }}
            />
          </div>
        </div>
        <Spacer height={10} />
        <div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", flex: 8 }}>
              <Spacer height={20} />
              <CustomText
                fontSize={15}
                title={props.text1}
                fontFamily={"ClashDisplay-SemiBold"}
                textAlign={"left"}
                color={props.on ? colors.pureWite : colors.black}
              />
              <CustomText
                fontSize={15}
                title={props.text2}
                textAlign={"left"}
                color={props.on ? colors.pureWite : colors.black}
              />
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                flex: 4,
              }}
            >
              <div><DropdownCom on={props.on} /></div>

              {FilledCircle.map((circle, index) => (
                <div key={index} style={{ paddingLeft: 10 }}>
                  {count == circle.id ? (
                    <div
                      style={{
                        height: 22,
                        width: 22,
                        borderRadius: 50,
                        borderColor: props.on ? colors.pureWite : colors.black,
                        borderStyle: "solid",
                        borderWidth: 1,
                        display: "flex",
                        textAlign: "center",
                        justifyContent: "center",
                        alignItems: "center",
                        alignSelf: "center",
                        cursor: "pointer",
                      }}
                    >
                      <div
                        style={{
                          height: 15,
                          width: 15,
                          borderRadius: 50,
                          borderStyle: "solid",
                          borderColor: colors.black,
                          borderWidth: 0.2,
                          backgroundColor: circle.bgcolor,
                        }}
                      ></div>
                    </div>
                  ) : (
                    <div
                      style={{
                        height: 18,
                        width: 18,
                        borderRadius: 50,
                        borderStyle: "solid",
                        borderColor: props.on ? colors.pureWite : colors.black,
                        borderWidth: 0.2,
                        backgroundColor: circle.bgcolor,
                        marginTop: 3,
                        cursor: "pointer",
                      }}
                      onClick={() => {
                        setCount(circle.id);
                      }}
                    ></div>
                  )}
                </div>
              ))}
            </div>
          </div>
          <Spacer height={20} />
          <div
            style={{
              flexDirection: "row",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column" }}>
              <s style={{ fontSize: 13, color: window.innerWidth <= 700 ? colors.grey : colors.black }}>$135.00</s>
              <CustomText
                title="$95.00"
                fontSize={15}
                color={props.on ? colors.pureWite : colors.black}
              />
            </div>
            <div
              style={{
                flexDirection: "row",
                display: "flex",
                marginRight: 10,
              }}
            >
              <Spacer width={20} />
              <Link to="/cart" style={{ textDecoration: "none" }}>
                <CustomButton
                  title="+ ADD"
                  fontSize={14}
                  justifyContent={"center"}
                  borderRadius={"0"}
                  width={90}
                  height={30}
                  color={colors.white}
                  backgroundColor={colors.grey}
                  fontFamily={"ClashDisplay-Light"}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewArrivalSwiper;
