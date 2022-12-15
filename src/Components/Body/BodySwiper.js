import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { FreeMode, Pagination } from "swiper";
import Spacer from "../Spacer";
import CustomText from "../CustomText";
import { images } from "../../Assets/Images";
import { colors } from "../../utils/Colors";
import CustomButton from "../CustomButton";

const BodySwiper = () => {
  const SwiperArray = [
    {
      id: 1,
      name: "",
      image: images.banner,
      list1: "Sports bra",
      list2: "Leggings",
      list3: "Top",
      topContent: "",
    },
    {
      id: 2,
      name: "",
      image: images.banner,
      list1: "Sports bra",
      list2: "Leggings",
      list3: "Top",
    },
    {
      id: 3,
      name: "",
      image: images.banner,
      list1: "Sports bra",
      list2: "Leggings",
      list3: "Top",
      topContent: "",
    },
    {
      id: 4,
      name: "",
      image: images.banner,
      list1: "Sports bra",
      list2: "Leggings",
      list3: "Top",
    },
    {
      id: 5,
      name: "",
      image: images.banner,
      list1: "Sports bra",
      list2: "Leggings",
      list3: "Top",
      topContent: "",
    },
    {
      id: 6,
      name: "",
      image: images.banner,
      list1: "Sports bra",
      list2: "Leggings",
      list3: "Top",
    },
  ];

  return (
    <div style={{ width: window.innerWidth <= 1000 ? "100%" : "auto" , padding: window.innerWidth <= 1000 ? "" : 130 }}>
    {/* <div style={{ width: "100%", }}> */}
    <Spacer height= {window.innerWidth <= 1000 ? 40 : ""}  />
      <Swiper
        slidesPerView={window.innerWidth <= 1000 ? 1 : 4}
        // slidesPerView={1}
        spaceBetween={-47}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode]}
        // className="mySwiper"
      >
        <SwiperSlide style={{ backgroundColor: "#eee" }}>
          <CartItem1 />
        </SwiperSlide>
        <SwiperSlide style={{ backgroundColor: "#eee" }}>
          <CartItem2 />
        </SwiperSlide>
        <SwiperSlide style={{ backgroundColor: "#eee" }}>
          <CartItem1 />
        </SwiperSlide>
        <SwiperSlide style={{ backgroundColor: "#eee" }}>
          <CartItem2 />
        </SwiperSlide>
        <SwiperSlide style={{ backgroundColor: "#eee" }}>
          <CartItem1 />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default BodySwiper;

const CartItem1 = () => (
  <div
    style={{
      height: "90vh",
      width: "90%",
      display: "flex",
      justifyContent: "center",
    }}
  >
    <Spacer height={20} />
    <div style={{ width: window.innerWidth <= 1000 ? "90%" : "80%" , height: window.innerWidth <= 1000 ? "40vh" : "60vh"  }}>
    {/* <div style={{ width: "90%", height: "40vh" }}> */}
      <img
        src={images.banner}
        style={{ width: "100%", height: "100%", objectFit: "fill" }}
      />
      <div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Spacer height={20} />
          <CustomText
            fontSize={25}
            title="DIANE "
            fontFamily={"ClashDisplay-SemiBold"}
            textAlign={"left"}
          />
          <CustomText
            fontSize={25}
            title=" & GEORDI"
            fontFamily={"ClashDisplay-SemiBold"}
            textAlign={"left"}
          />
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
            <ul
              style={{
                paddingInlineStart: 15,
                marginBlockStart: 0,
                marginBlockEnd: 0,
              }}
            >
              <li>
                <CustomText
                  fontSize={12}
                  title="Sports bra"
                  textAlign={"left"}
                />
              </li>
            </ul>
            <ul
              style={{
                paddingInlineStart: 15,
                marginBlockStart: 0,
                marginBlockEnd: 0,
              }}
            >
              <li>
                <CustomText fontSize={12} title="Leggings" textAlign={"left"} />
              </li>
            </ul>
            <ul
              style={{
                paddingInlineStart: 15,
                marginBlockStart: 0,
                marginBlockEnd: 0,
              }}
            >
              <li>
                <CustomText fontSize={12} title="Top" textAlign={"left"} />
              </li>
            </ul>
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
              title="SHOP NOW"
              fontSize={14}
              justifyContent={"center"}
              borderRadius={"0"}
              width={100}
              height={30}
              color={colors.white}
              backgroundColor={colors.grey}
              fontFamily={"ClashDisplay-Light"}
              textDecoration={"underline"}
            />
          </div>
        </div>
      </div>
    </div>
  </div>
);

const CartItem2 = () => (
  <div
    style={{
      height: "90vh",
      width: "90%",
      display: "flex",
      justifyContent: "center",
    }}
  >
    {/* <Spacer height={20} /> */}
    <div style={{ width: window.innerWidth <= 1000 ? "90%" : "80%" , height: window.innerWidth <= 1000 ? "40vh" : "60vh"  }}>
      <div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          {/* <Spacer height={20} /> */}
          <CustomText
            fontSize={25}
            title="DIANE "
            fontFamily={"ClashDisplay-SemiBold"}
            textAlign={"left"}
          />
          <CustomText
            fontSize={25}
            title=" & GEORDI"
            fontFamily={"ClashDisplay-SemiBold"}
            textAlign={"left"}
          />
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
            <ul
              style={{
                paddingInlineStart: 15,
                marginBlockStart: 0,
                marginBlockEnd: 0,
              }}
            >
              <li>
                <CustomText
                  fontSize={12}
                  title="Sports bra"
                  textAlign={"left"}
                />
              </li>
            </ul>
            <ul
              style={{
                paddingInlineStart: 15,
                marginBlockStart: 0,
                marginBlockEnd: 0,
              }}
            >
              <li>
                <CustomText fontSize={12} title="Leggings" textAlign={"left"} />
              </li>
            </ul>
            <ul
              style={{
                paddingInlineStart: 15,
                marginBlockStart: 0,
                marginBlockEnd: 0,
              }}
            >
              <li>
                <CustomText fontSize={12} title="Top" textAlign={"left"} />
              </li>
            </ul>
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
              title="SHOP NOW"
              fontSize={14}
              justifyContent={"center"}
              borderRadius={"0"}
              width={100}
              height={30}
              color={colors.white}
              backgroundColor={colors.grey}
              fontFamily={"ClashDisplay-Light"}
              textDecoration={"underline"}
            />
          </div>
        </div>
      </div>
      <img
        src={images.banner}
        style={{ width: "100%", height: "100%", objectFit: "fill" }}
      />
    </div>
  </div>
);
