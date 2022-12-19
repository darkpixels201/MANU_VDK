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
import NewArrivalSwiper from "./NewArrivalSwiper";
import { Link } from "react-router-dom";

const NewArrivals = (props) => {
  const NewArrival = [
    {
      id: 1,
      image: images.slide10,
      text1: "BRASIER DE BANDA",
      text2: "ANCHA",
    },
    {
      id: 2,
      image: images.slide11,
      text1: "BRASIER DE BANDA",
      text2: "ANCHA",
    },
    {
      id: 3,
      image: images.slide12,
      text1: "BRASIER DE BANDA",
      text2: "ANCHA",
    },
    {
      id: 4,
      image: images.slide12,
      text1: "BRASIER DE BANDA",
      text2: "ANCHA",
    },
    {
      id: 5,
      image: images.slide11,
      text1: "BRASIER DE BANDA",
      text2: "ANCHA",
    },
  ];

  return (
    <div style={{ backgroundColor: props.on ? colors.black : colors.white }}>
      <Spacer height={100} />
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div style={{ display: "flex", flex: 1 }}></div>
        <div style={{ display: "flex", flex: 11 }}>
          <div style={{ display: "flex" }}>
            <CustomText
              title="NEW"
              fontFamily={"ClashDisplay-SemiBold"}
              fontSize={window.innerWidth <= 700 ? 25 : 45}
              color={props.on ? colors.pureWite : colors.black}
            />
            <CustomText
              title="ARRIVALS"
              fontSize={window.innerWidth <= 700 ? 25 : 45}
              color={props.on ? colors.pureWite : colors.black}
            />
          </div>
          <Spacer width={45} />
          <div
            style={{
              height: 1,
              width: "100%",
              backgroundColor: props.on ? colors.white : colors.black,
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
        <div>
          <div>
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
        >
          {NewArrival.map((item, index) => (
            <SwiperSlide
              key={index}
              style={{
                backgroundColor: props.on ? colors.black : colors.white,
              }}
            >
              <NewArrivalSwiper
                image={item.image}
                text1={item.text1}
                text2={item.text2}
                on={props.on}
              />
            </SwiperSlide>
          ))}
          


        </Swiper>

        </div>
        <div>
          {window.innerWidth >= 1100 ? (
            <div
              style={{
                display: "flex",
                justifyContent: "end",
                // position: "relative",
              }}
            >
              <img
                src={icons.circleRightArrow}
                style={{
                  height: 50,
                  width: 50,
                  position: "absolute",
                  top:2900,
                  // bottom: 10,
                  right: 50,
                  // marginLeft:70
                }}
              />
            </div>
          ) : (
            ""
          )}
          </div>
        </div>

        

        {window.innerWidth <= 700 ? (
          <>
            <div
              style={{
                width: window.innerWidth <= 1000 ? "100%" : "auto",
                paddingRight: window.innerWidth <= 1000 ? "" : 100,
                paddingLeft: window.innerWidth <= 1000 ? "" : 100,
              }}
            >
              {/* <div style={{ width: "100%", }}> */}
              <Spacer height={window.innerWidth <= 10 ? 40 : ""} />
              <Swiper
                slidesPerView={
                  window.innerWidth <= 1000
                    ? window.innerWidth <= 700
                      ? 1
                      : 2
                    : 3
                }
                // slidesPerView={1}
                spaceBetween={-47}
                freeMode={true}
                pagination={{
                  clickable: true,
                }}
                modules={[FreeMode]}
              >
                {NewArrival.map((item, index) => (
                  <SwiperSlide
                    key={index}
                    style={{
                      backgroundColor: props.on ? colors.black : colors.white,
                    }}
                  >
                    <NewArrivalSwiper
                      image={item.image}
                      text1={item.text1}
                      text2={item.text2}
                      on={props.on}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            <Link to="/categories" style={{ textDecoration: "none" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    alignSelf: "center",
                    borderStyle: "solid",
                    borderColor:props.on ? colors.white : colors.black,
                    // borderColor: colors.black,
                    borderWidth: 0.5,
                    width: 150,
                    height: 30,
                    alignContent: "center",
                  }}
                >
                  <CustomText title="GUÍA DE TALLAS" fontSize={12} color={props.on ? colors.white : colors.black} />
                  <Spacer width={10} />
                  <img
                    src={icons.rightArrow}
                    style={{ height: 8, width: 18 }}
                  />
                </div>
                {/* <div style={{ display: "flex", justifyContent: "end" }}>
          <img src={icons.circleRightArrow} style={{ height: 50, width: 50 }} />
        </div> */}
                {/* </div> */}
              </div>
            </Link>
            <Spacer height={120} />{" "}
          </>
        ) : (
          ""
        )}
      </div>
      {/* <div style={{ display: "flex", justifyContent: "end" }}>
          <img src={icons.circleRightArrow} style={{ height: 50, width: 50 }} />
        </div> */}
      {/* </div> */}
    </div>
  );
};

export default NewArrivals;
