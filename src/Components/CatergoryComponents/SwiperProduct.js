import { Autocomplete, TextField } from "@mui/material";
import React, { useState } from "react";
import { colors } from "../../utils/Colors";
import { StrikeThroughText } from "../CompareProductsComponents/CompareWeb/WebCompareProducts";
import CustomButton from "../CustomButton";
import CustomText from "../CustomText";
import { DropdownCom } from "../DropdownCom";
import Spacer from "../Spacer";

const SwiperProduct = (props) => {
  const [count, setCount] = useState(1);

  const customer = ["2XS", "XS", "M", "L", "XL", "2XL"];
//   const customer = [
//     {
//         id:1,
//         name:"2xs",
//     },
//     {
//         id:2,
//         name:"xs",
//     },
//   ];



  const [currentcustomer, setCurrentCustomer] = useState(null);
  return (
    <div
      style={{
        height: 500,
        width: '100%',
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
          // width: window.innerWidth <= 1000 ? "75%" : "85%",
          // height: window.innerWidth <= 1000 ? "40vh" : "55vh",
          // backgroundColor: props.on ? colors.black : colors.pureWite,
          // backgroundColor: colors.colorA,
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
                height: 60,
                width: 80,
                position: "absolute",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor:colors.colorC
              }}
            >
              <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItens:"center", }} >
              <CustomText title="30%" color={colors.white} fontSize={17} />
              <CustomText title="OFF" color={colors.white} fontSize={17} />
              </div>
            </div>
            <img
              src={props.image}
              style={{ width: "100%", height: 'auto', }}
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
                fontSize={12}
                title={props.text1}
                fontFamily={"ClashDisplay-SemiBold"}
                textAlign={"left"}
                color={props.on ? colors.pureWite : colors.black}
              />
              <CustomText
                fontSize={12}
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
              {props.FilledCircle.map((circle, index) => (
                <div key={index} style={{ paddingLeft: 10 }}>
                  {count == circle.id ? (
                    <div
                      style={{
                        height: 22,
                        width: 22,
                        borderRadius: 50,
                        borderColor: props.on ? colors.orange : colors.black,
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
                        borderColor: colors.black,
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
              // backgroundColor:'red'
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div>
                
                <s style={{color:colors.colorC,textDecoration:'strikeThrough',fontSize:15,fontFamily:'ClashDisplay-Regular'}}>
                $135.00
               
                </s>
                <CustomText
                  title="$95.00"
                  fontSize={15}
                  color={props.on ? colors.pureWite : colors.colorB}
                />
              </div>
              <Spacer width={17} />
              <div>
                <DropdownCom/>
              </div>
            </div>

            <div
              style={{
                flexDirection: "row",
                display: "flex",
                // marginRight: 10,
              }}
            >
              <Spacer width={40} />
              <CustomButton
                title="+ ADD"
                fontSize={14}
                justifyContent={"center"}
                borderRadius={"0"}
                width={90}
                height={30}
                color={colors.white}
                backgroundColor={colors.colorC}
                fontFamily={"ClashDisplay-Light"}
                // alignSelf={"flex-end"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwiperProduct;
