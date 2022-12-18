import { OutlinedInput } from "@mui/material";
import React from "react";
import { images } from "../../Assets/Images";
import CustomButton from "../CustomButton";
import CustomText from "../CustomText";
import Spacer from "../Spacer";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper";

import "./styles.css";

const ColumnThree = () => {
  return (
    <div style={{ flex: 2.5, paddingRight: 100 }}>
      <CustomText title="PUEDE INTERESARTE" fontSize={16} />
      <Spacer height={20} />
      <Swiper
        slidesPerView={1.8}
        spaceBetween={20}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode]}
        // className="mySwiper"
      >
        {[images.slide6,images.slide7,images.slide8].map((item)=>(

        <SwiperSlide>
          <CartItem image={item} />
        </SwiperSlide>
        ))}
        
      </Swiper>

      <Spacer height={50} />
      <div
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          display: "flex",
        }}
      >
        <CustomText title="SUBTOTAL" fontSize={16} />
        <CustomText title="$95.00" fontSize={16} />
      </div>
      <Spacer height={12} />
      <div
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          display: "flex",
        }}
      >
        <CustomText title="DISCOUNTS" fontSize={16} />
        <CustomText title="$95.00" fontSize={16} />
      </div>
      <Spacer height={12} />
      <div style={{ height: 1, backgroundColor: "#000", width: "130%" }} />
      <Spacer height={12} />
      <div
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          display: "flex",
        }}
      >
        <CustomText title="TOTAL" fontSize={16} />
        <CustomText title="$95.00" fontSize={16} />
      </div>
      <Spacer height={50} />
      <div
        style={{
          flexDirection: "row",
          display: "flex",
        }}
      >
        <input
          style={{ width: "75%", padding: 5 }}
          placeholder="Enter Coupon Code here"
        />
        <button
          style={{ backgroundColor: "#000", color: "#fff", width: "25%" }}
        >
          Apply
        </button>
      </div>
      <Spacer height={20} />
      <div style={{ display: "flex", justifyContent: "right" }}>
        <button
          style={{
            backgroundColor: "#686868",
            color: "#fff",
            paddingRight: 25,
            paddingLeft: 25,
            paddingTop: 10,
            paddingBottom: 10,
          }}
        >
          CHECKOUT
        </button>
      </div>
      <Spacer height={20} />

      <div style={{ display: "flex", justifyContent: "right" }}>
        <button
          style={{
            backgroundColor: "#fff",
            color: "#000",
            paddingRight: 25,
            paddingLeft: 25,
            paddingTop: 10,
            paddingBottom: 10,
          }}
        >
          CONTINUE SHOPPING
        </button>
      </div>
    </div>
  );
};

export default ColumnThree;

const CartItem = ({image}) => (
  <div>
    <img src={image} style={{ width: "100%", height: 160 }} />
    <Spacer height={10} />
    <div
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        display: "flex",
      }}
    >
      <span style={{ fontSize: 10 }}>
        <b style={{ fontFamily: "ClashDisplay-Bold" }}>PRoducto</b>
        nombre
      </span>
      <CustomText title="$95.00" fontSize={10} />
    </div>
  </div>
);
