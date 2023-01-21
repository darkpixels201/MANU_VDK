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
import ProductArray from "../../utils/ProductArray";
import { Link } from "react-router-dom";
import { colors } from "../../utils/Colors";

const ColumnThree = () => {
  return (
    <div style={{ flex: 2.5, paddingRight: 100 }}>
      <CustomText title="PUEDE INTERESARTE" color={colors.purple} fontSize={16} />
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
        {ProductArray.map((item, index) => (
          <SwiperSlide key={index}>
            <CartItem image={item.image} id={item.id} price={item.price} />
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
        <CustomText title="DISCOUNTS" color={colors.purple} fontSize={16} />
        <CustomText title="$95.00" color={colors.purple}  fontSize={16} />
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
          style={{ width: "75%", padding: 5, backgroundColor:colors.lightGreen, borderColor:colors.purple }}
          placeholder="Enter Coupon Code here"
        />
        <button
          style={{
            backgroundColor: colors.purple,
            color: "#fff",
            width: "25%",
            borderStyle: "hidden",
          }}
        >
          Apply
        </button>
      </div>
      <Spacer height={20} />
      <div style={{ display: "flex", justifyContent: "right" }}>
        <button
          style={{
            backgroundColor: colors.green,
            color: "#fff",
            paddingRight: 25,
            paddingLeft: 25,
            paddingTop: 10,
            paddingBottom: 10,
            borderStyle: "hidden",
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
            borderWidth: 1,
            color:colors.purple,
            borderColor:colors.purple
          }}
        >
          CONTINUE SHOPPING
        </button>
      </div>
    </div>
  );
};

export default ColumnThree;

const CartItem = ({ image, ...props }) => (
  <div>
    <Link
      to={`/compareproducts/${props.id}`}
      style={{ textDecoration: "none", color: colors.black }}
    >
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
          &nbsp; nombre
        </span>
        <CustomText title={props.price} fontSize={10} />
      </div>
    </Link>
  </div>
);
