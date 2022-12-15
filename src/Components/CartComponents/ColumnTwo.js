import { display } from "@mui/system";
import React, { useRef, useState } from "react";
import { images } from "../../Assets/Images";
import { Poppins } from "../../utils/Fonts";
import CustomText from "../CustomText";
import Spacer from "../Spacer";
import Footer from "./Footer";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { FreeMode, Pagination } from "swiper";
import { Close } from '@mui/icons-material';

const ColumnTwo = () => {
  return (
    <div style={{ flex: 6 }}>
      <div style={{ flexDirection: "row", display: "flex", flexWrap: "wrap" }}>
        <div
          style={{
            flex: 4,
            display: "flex",
            // flexWrap: "wrap",
            justifyContent: "space-between",
            marginRight: 10,
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <CustomText
              title="MY"
              fontSize={window.innerWidth <= 400 ? "10vw" : "3vw"}
              fontFamily={"ClashDisplay-SemiBold"}
            />
            <CustomText
              title="CART"
              fontSize={window.innerWidth <= 400 ? "10vw" : "3vw"}
              fontFamily={"Poppins"}
            />
          </div>
          <img
            src={images.ellipse}
            style={{
              width: window.innerWidth <= 400 ? "3vw" : "1vw",
              height: window.innerWidth <= 400 ? "3vw" : "1vw",
              marginTop: 10,
            }}
          />
        </div>
        <div style={{ flex: 6, alignItems: "center", display: "flex" }}>
          <CustomText
            fontSize={15}
            title="Remember that you have 30 days from the date of purchase
to request a chnge or return."
          />
        </div>
      </div>
      <Swiper
        slidesPerView={2.5}
        spaceBetween={20}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode]}
        // className="mySwiper"
      >
        <SwiperSlide>
          <CartItem />
        </SwiperSlide>
        <SwiperSlide>
          <CartItem />
        </SwiperSlide>
        <SwiperSlide>
          <CartItem />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ColumnTwo;

const CartItem = () => (
  <>
    <Spacer height={20} />
    <div style={{ width: "100%" }}>
      <div
        style={{
          backgroundColor: "#000",
          color: "#fff",
          height: "2vw",
          width: "2vw",
          borderRadius: "1vw",
          position: "absolute",
          top: 10,
          left: 10,
          zIndex: 99,
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
        }}
      >
        <Close fontSize="small"/>
      </div>
      <img src={images.banner} style={{ width: "100%" }} />
      <div>
        <Spacer height={20} />
        <CustomText
          fontSize={16}
          title="Brasier de Banda Ancha para Soporte en Espalda"
          textAlign={"left"}
        />
        <Spacer height={20} />
        <CustomText
          fontSize={16}
          title="Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Curabitur congue tellus sem, id porttitor elit fermentum eu."
          textAlign={"left"}
        />
        <Spacer height={50} />
        <div
          style={{
            flexDirection: "row",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <CustomText fontSize={16} title="$95.00" />
          <div
            style={{
              flexDirection: "row",
              display: "flex",
              marginRight: 10,
            }}
          >
            <CustomText fontSize={16} title="-" />
            <Spacer width={20} />
            <CustomText fontSize={16} title="1" />
            <Spacer width={20} />
            <CustomText fontSize={16} title="+" />
          </div>
        </div>
      </div>
    </div>
  </>
);
