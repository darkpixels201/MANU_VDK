import { Autocomplete, TextField } from "@mui/material";
import React, { useState } from "react";
import { icons } from "../../Assets/Icons";
import { images } from "../../Assets/Images";
import { colors } from "../../utils/Colors";
import CustomButton from "../CustomButton";
import CustomText from "../CustomText";
import SearchComponent from "../SearchComponent";
import Spacer from "../Spacer";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { FreeMode, Pagination } from "swiper";
import ProductBody from "./ProductBody";
import SwiperProduct from "./SwiperProduct";
import Footer from "../Footer";
import BottomBarNavigation from "../BottomNavigation";
import { Link } from "react-router-dom";

const CategoryMobile = (props) => {
  const [open, setOpen] = useState(false);
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
      image: images.slide7,
      text1: "BRASIER DE BANDA",
      text2: "ANCHA",
    },
    {
      id: 2,
      image: images.slide8,
      text1: "BRASIER DE BANDA",
      text2: "ANCHA",
    },
    {
      id: 3,
      image: images.slide9,
      text1: "BRASIER DE BANDA",
      text2: "ANCHA",
    },
  ];

  const NewArrivalList = [
    {
      id: 1,
      image: images.slide16,
      text1: "BRASIER DE BANDA",
      text2: "ANCHA",
    },
    {
      id: 2,
      image: images.slide12,
      text1: "BRASIER DE BANDA",
      text2: "ANCHA",
    },
  ];



  

  return (
    <div style={{backgroundColor:colors.white, }}>
      <Spacer height={5} />
      <div style={{ display: "flex", justifyContent: "space-around", position: "sticky",
          width: "100%",
          zIndex: 110,
          top: 0,
          backgroundColor: colors.white, }}>
        <Link to="/" style={{textDecoration:"none"}} >
          <CustomText title="VDK" fontFamily="ClashDisplay-SemiBold" />
        </Link>
        <div
          style={{ alignSelf: "center" }}
          onClick={() => {
            setOpen(!open);
          }}
        >
          <SearchComponent setOpen={setOpen} open={open} />
        </div>
        <div>
          <Link to="/cart">
          <div style={{ height: 10, width: 10, cursor: "pointer" }}>
            <img src={icons.shoppingCart} style={{ height: 20, width: 20 }} />
          </div>
          </Link>
        </div>
      </div>

      <div style={{ width: "100%", height: "50vh" }}>
        <img
          style={{ width: "100%", height: "60vh", position: "absolute" }}
          src={images.mobileCatBanner}
        />
        <div
          style={{
            position: "absolute",
            width: "auto",
            padding: 40,
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            height: 400,
          }}
        >
          <div>
            <CustomText
              title="DIANE &"
              fontFamily={"ClashDisplay-SemiBold"}
              fontSize={33}
              color={colors.white}
            />
            <CustomText
              title=" GEORDI"
              fontFamily={"ClashDisplay-SemiBold"}
              fontSize={33}
              color={colors.white}
            />
          </div>
        </div>
      </div>

      <div
        style={{
          width: window.innerWidth <= 1000 ? "100%" : "auto",
          paddingRight: window.innerWidth <= 1000 ? "" : 100,
          paddingLeft: window.innerWidth <= 1000 ? "" : 100,
        }}
      >
        {/* <div style={{ width: "100%", }}> */}
        <Spacer height={window.innerWidth <= 1000 ? 140 : ""} />
        <Swiper
          slidesPerView={
            window.innerWidth <= 1000
              ? window.innerWidth <= 700
                ? 1.35
                : 2
              : 3
          }
          // slidesPerView={1}
        //   spaceBetween={-37}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode]}
          // className="mySwiper"
        >
          {NewArrival.map((item, index) => (
              <SwiperSlide
              key={index}
                style={{
                  backgroundColor: props.on ? colors.black : colors.white,
                  paddingLeft: 40,
                }}
              >
                <SwiperProduct
                  image={item.image}
                  text1={item.text1}
                  text2={item.text2}
                  on={props.on}
                  FilledCircle={FilledCircle}
                />
              </SwiperSlide>
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

      {NewArrivalList.map((item, index) => (
        <div
          key={index}
          style={{
            backgroundColor: props.on ? colors.black : colors.white,
            // paddingLeft: 40,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            alignSelf: "center",
          }}
        >
          <ProductBody
            image={item.image}
            text1={item.text1}
            text2={item.text2}
            on={props.on}
            FilledCircle={FilledCircle}
          />
        </div>
      ))}
        <Footer />
        <BottomBarNavigation />
    </div>
  );
};

export default CategoryMobile;


