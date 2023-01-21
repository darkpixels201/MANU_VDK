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
import { FreeMode, Pagination } from "swiper";

import "./styles.css";

// import required modules
import { Close } from "@mui/icons-material";
import { row } from "../../utils/CommonStyles";
import { CartItem } from "./CartItem";
import { Link } from "@mui/material";
import ProductArray  from "../../utils/ProductArray";
import { colors } from "../../utils/Colors";

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
              color={colors.purple}
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
        // direction={"vertical"}
        // className="mySwiper"
      >
        {/* {[{id:1,image:images.slide16}, {id:2,image:images.slide8}, {id:3,image:images.slide8}].map((item, index) => (
          <SwiperSlide key={index} >
            <CartItem image={item.image} id={item.id} />
          </SwiperSlide>
        ))} */}

        {ProductArray.map((item, index) => (
          <SwiperSlide key={index}>
            <CartItem image={item.image} id={item.id} price={item.price} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ColumnTwo;
