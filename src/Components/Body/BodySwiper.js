import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

import { Navigation, Pagination } from "swiper";
import Spacer from "../Spacer";
import CustomText from "../CustomText";
import { images } from "../../Assets/Images";
import { colors } from "../../utils/Colors";
import CustomButton from "../CustomButton";
import { Link } from "react-router-dom";

const BodySwiper = (props) => {
  const SwiperArray = [
    {
      id: 1,
      name1: "DIANE",
      name2: "& GEORDI",
      image: window.innerWidth<=480?images.slideMobile1:images.slide3,
      list1: "Sports bra",
      list2: "Leggings",
      list3: "Top",
      topContent: true,
    },
    {
      id: 2,
      name1: "DIANE",
      name2: "& GEORDI",
      image: window.innerWidth<=480?images.slideMobile2:images.slide2,
      list1: "Sports bra",
      list2: "Leggings",
      list3: "Top",
      topContent: false,
    },
    {
      id: 3,
      name1: "DIANE",
      name2: "& GEORDI",
      image: window.innerWidth<=480?images.slideMobile1:images.slide5,
      list1: "Sports bra",
      list2: "Leggings",
      list3: "Top",
      topContent: true,
    },
    {
      id: 4,
      name1: "DIANE",
      name2: "& GEORDI",
      image: window.innerWidth<=480?images.slideMobile2:images.slide4,
      list1: "Sports bra",
      list2: "Leggings",
      list3: "Top",
      topContent: false,
    },
    {
      id: 5,
      name1: "DIANE",
      name2: "& GEORDI",
      image: window.innerWidth<=480?images.slideMobile2:images.slide2,
      list1: "Sports bra",
      list2: "Leggings",
      list3: "Top",
      topContent: true,
    },
    {
      id: 6,
      name1: "DIANE",
      name2: "& GEORDI",
      image: window.innerWidth<=480?images.slideMobile1:images.slide5,
      list1: "Sports bra",
      list2: "Leggings",
      list3: "Top",
      topContent: false,
    },
    {
      id: 7,
      name1: "DIANE",
      name2: "& GEORDI",
      image: window.innerWidth<=480?images.slideMobile2:images.slide4,
      list1: "Sports bra",
      list2: "Leggings",
      list3: "Top",
      topContent: true,
    },
  ];

  return (
    <div
      style={{
        width: window.innerWidth <= 1000 ? "100%" : "auto",
        padding: window.innerWidth <= 1000 ? "" : 130,
        backgroundColor: props.on ? colors.black : colors.white,
      }}
    >
      {/* window.innerWidth <= 1000 ? window.innerWidth <= 700 ? 1 : 2 : 3 */}
      
      <Spacer height={window.innerWidth <= 1000 ? 40 : ""} />
      <Swiper
        slidesPerView={window.innerWidth <= 1000 ? window.innerWidth <= 650 ? 1 : 3 : 4}
        spaceBetween={-47}
        freeMode={true}
        modules={[Pagination]}
        navigation={true}
        pagination={true}
        color={colors.black}
      >
        {SwiperArray.map((item, index) => (
          <SwiperSlide
            key={index}
            style={{
              backgroundColor: props.on ? colors.black : colors.white,
            }}
          >
            <BodyItems
              on={props.on}
              name1={item.name1}
              name2={item.name2}
              image={item.image}
              list1={item.list1}
              list2={item.list2}
              list3={item.list3}
              topContent={item.topContent}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BodySwiper;

const BodyItems = (props) => (
  <div
    style={{
      height: window.innerWidth <= 951 ?"75vh":"95vh",
      width: "90%",
      display: "flex",
      justifyContent: "center",
    }}
  >
    <Spacer height={20} />
    <div
      style={{
        width: window.innerWidth <= 1000 ? "90%" : "80%",
        height: window.innerWidth <= 1000 ? "40vh" : "60vh",
      }}
    >
      {props.topContent ? (
        <img
          src={props.image}
          style={{ width: "100%", height: "100%", objectFit: "fill" }}
        />
      ) : (
        <></>
      )}

      <div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Spacer height={20} />
          <CustomText
            fontSize={25}
            title={props.name1}
            fontFamily={"ClashDisplay-SemiBold"}
            textAlign={"left"}
            color={props.on ? colors.white : colors.black}
          />
          <CustomText
            fontSize={25}
            title={props.name2}
            fontFamily={"ClashDisplay-SemiBold"}
            textAlign={"left"}
            color={props.on ? colors.white : colors.black}
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
                color: props.on ? colors.white : colors.black,
              }}
            >
              <li>
                <CustomText
                  fontSize={12}
                  title={props.list1}
                  textAlign={"left"}
                  color={props.on ? colors.white : colors.black}
                />
              </li>
            </ul>
            <ul
              style={{
                paddingInlineStart: 15,
                marginBlockStart: 0,
                marginBlockEnd: 0,
                color: props.on ? colors.white : colors.black,
              }}
            >
              <li>
                <CustomText
                  fontSize={12}
                  title={props.list2}
                  textAlign={"left"}
                  color={props.on ? colors.white : colors.black}
                />
              </li>
            </ul>
            <ul
              style={{
                paddingInlineStart: 15,
                marginBlockStart: 0,
                marginBlockEnd: 0,
                color: props.on ? colors.white : colors.black,
              }}
            >
              <li>
                <CustomText
                  fontSize={12}
                  title={props.list3}
                  textAlign={"left"}
                  color={props.on ? colors.white : colors.black}
                  marginBottom={10}
                />
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
            <Link to="/categories">
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
            </Link>
          </div>
        </div>
      </div>
      {!props.topContent ? (
        <img
          src={props.image}
          style={{ width: "100%", height: "100%", objectFit: "fill" }}
        />
      ) : (
        <></>
      )}
    </div>
  </div>
);
