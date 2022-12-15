import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { FreeMode, Pagination } from "swiper";
import Spacer from "../Spacer";
import CustomText from "../CustomText";
import CustomButton from "../CustomButton";
import { images } from "../../Assets/Images";
import { colors } from "../../utils/Colors";
import { Autocomplete, TextField } from "@mui/material";
import { icons } from "../../Assets/Icons";

const NewArrivals = (props) => {
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

  const NewArrival = [
    {
      id: 1,
      image: images.banner,
      text1: "BRASIER DE BANDA",
      text2: "ANCHA",
    },
    {
      id: 2,
      image: images.banner,
      text1: "BRASIER DE BANDA",
      text2: "ANCHA",
    },
    {
      id: 3,
      image: images.banner,
      text1: "BRASIER DE BANDA",
      text2: "ANCHA",
    },
    {
      id: 4,
      image: images.banner,
      text1: "BRASIER DE BANDA",
      text2: "ANCHA",
    },
    {
      id: 5,
      image: images.banner,
      text1: "BRASIER DE BANDA",
      text2: "ANCHA",
    },
  ];

  const [count, setCount] = useState(1);

  const customer = ["XS", "S", "M", "L", "Xl", "XXl", "XXl"];

  const [currentcustomer, setCurrentCustomer] = useState(null);
  const CartItem = (props) => (
    <div
      style={{
        height: "90vh",
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
          <div style={{top:0, display:"flex", justifyContent:"right"}}>
          <div
            style={{
              backgroundColor: colors.grey,
              height: 30,
              width: 60,
              position: "absolute",
              display: "flex",
              justifyContent: "center",
              alignItems:"center"
            }}
          >
            <CustomText
              title="NEW"
              color={colors.white}
              fontSize={14}
            />
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
              <div>
                <Autocomplete
                  options={customer}
                  sx={{ width: 70 }}
                  defaultValue={customer[0]}
                  // clearIcon
                  // color={ props.on ? colors.pureWite : colors.black}
                  // popupIcon= {<img src={icons.downArrow} />}
                  renderInput={(params) => (
                    <TextField {...params} variant="standard" />
                  )}
                  currentcustomer={currentcustomer}
                  onChange={(event, newValue) => setCurrentCustomer(newValue)}
                  // style={{height:10, width:5, backgroundColor:colors.black}}
                />
              </div>

              {FilledCircle.map((circle, index) => (
                <div key={index} style={{ paddingLeft: 10 }}>
                  {count == circle.id ? (
                    <div
                      style={{
                        height: 22,
                        width: 22,
                        borderRadius: 50,
                        borderColor: props.on ? colors.orange : colors.orange,
                        border: "solid",
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
                          border: "solid",
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
                        border: "solid",
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
            }}
          >
            <div style={{ display: "flex", flexDirection: "column" }}>
              <CustomText
                title="$95.00"
                fontSize={25}
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  return (
    <div style={{ backgroundColor: props.on ? colors.black : colors.pureWite }}>
      <Spacer height={100} />
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div style={{ display: "flex", flex: 1 }}></div>
        <div style={{ display: "flex", flex: 11 }}>
          <div style={{ display: "flex" }}>
            <CustomText
              title="NEW"
              fontFamily={"ClashDisplay-SemiBold"}
              fontSize={45}
              color={props.on ? colors.pureWite : colors.black}
            />
            <CustomText
              title="ARRIVALS"
              fontSize={45}
              color={props.on ? colors.pureWite : colors.black}
            />
          </div>
          <Spacer width={45} />
          <div
            style={{
              height: 1,
              width: "100%",
              backgroundColor: props.on ? colors.pureWite : colors.black,
              alignSelf: "center",
            }}
          ></div>
        </div>
      </div>
      <Spacer height={50} />
      {/* <div style={{ display: "flex" }}> */}
      <div
        style={{
          width: window.innerWidth <= 1000 ? "100%" : "auto",
          paddingRight: window.innerWidth <= 1000 ? "" : 100,
          paddingLeft: window.innerWidth <= 1000 ? "" : 100,
        }}
      >
        {/* <div style={{ width: "100%", }}> */}
        <Spacer height={window.innerWidth <= 1000 ? 40 : ""} />
        <Swiper
          slidesPerView={
            window.innerWidth <= 1000 ? (window.innerWidth <= 700 ? 1 : 2) : 3
          }
          // slidesPerView={1}
          spaceBetween={-47}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode]}
          // className="mySwiper"
        >
          {NewArrival.map((item, index) => (
            <div key={index}>
              <SwiperSlide
                style={{
                  backgroundColor: props.on ? colors.black : colors.pureWite,
                }}
              >
                <CartItem
                  image={item.image}
                  text1={item.text1}
                  text2={item.text2}
                  on={props.on}
                />
              </SwiperSlide>
            </div>
          ))}

          {/* <SwiperSlide style={{ backgroundColor: props.on ? colors.black : colors.pureWite }}>
              <CartItem />
            </SwiperSlide>
            <SwiperSlide style={{ backgroundColor: props.on ? colors.black : colors.pureWite }}>
              <CartItem />
            </SwiperSlide>
            <SwiperSlide style={{ backgroundColor: props.on ? colors.black : colors.pureWite }}>
              <CartItem />
            </SwiperSlide>
            <SwiperSlide style={{ backgroundColor: props.on ? colors.black : colors.pureWite }}>
              <CartItem />
            </SwiperSlide> */}
        </Swiper>
      </div>
      {/* <div style={{ display: "flex", justifyContent: "end" }}>
          <img src={icons.circleRightArrow} style={{ height: 50, width: 50 }} />
        </div> */}
      {/* </div> */}
    </div>
  );
};

export default NewArrivals;
