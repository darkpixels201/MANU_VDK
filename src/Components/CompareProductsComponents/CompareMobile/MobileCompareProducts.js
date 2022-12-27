import React, { useState } from "react";
import Draggable from "react-draggable";
import { Link } from "react-router-dom";
import { FreeMode } from "swiper";
// import Swiper from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import { icons } from "../../../Assets/Icons";
import { images } from "../../../Assets/Images";
import { colors } from "../../../utils/Colors";
import { noUnderline, row } from "../../../utils/CommonStyles";
import BottomBarNavigation from "../../BottomNavigation";
import CustomText from "../../CustomText";
import { FilledCircleCom } from "../../FilledCircleCom";
import Spacer from "../../Spacer";
import { DropdownCom } from "../../DropdownCom";
import "swiper/css";
import "swiper/css/pagination";
// import "../font.css";

export const MobileCompareProducts = () => {
  const [value, setValue] = useState("XS");
  const [position, setPosition] = useState(0);
  const [desc, setDesc] = useState(false);
  const FilledCircle = [
    {
      id: 1,
      bgcolor: colors.lightGray,
    },
    {
      id: 2,
      bgcolor: colors.black,
    },
    // {
    //   id: 3,
    //   bgcolor: colors.white,
    // },
  ];
  const BottomImage = [
    {
      id: 1,
      image: images.slide7,
    },
    {
      id: 2,
      image: images.slide8,
    },
    {
      id: 3,
      image: images.slide9,
    },
  ];
  return (
    <div>
      <div style={{}}>
        <div
          style={{
            ...row,
            justifyContent: "space-between",
            paddingRight: 30,
            paddingLeft: 30,
            paddingTop: 10,
          }}
        >
          <CustomText
            title="VDK"
            fontSize={16}
            fontFamily={"ClashDisplay-SemiBold"}
          />
          <Link to="/cart">
            <img src={icons.shoppingCart} alt="" style={{ height: 20 }} />
          </Link>
        </div>
        <Spacer height={20} />
        <img
          src={images.slide16}
          alt=""
          style={{ height: 340, width: "100%" }}
        />
        <Spacer height={10} />
        <Swiper
          slidesPerView={3}
          spaceBetween={20}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode]}
          style={{ zIndex: -1 }}
          // className="mySwiper"
        >
          {[images.slide7, images.slide8, images.slide9].map((item, index) => (
            <SwiperSlide key={index}>
              <img
                src={item}
                alt=""
                style={{ height: 160, width: window.innerWidth / 3 }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <Draggable
        axis="y"
        defaultPosition={{ x: 0, y: -50 }}
        // position={'absolute'}
        // grid={[25, 25]}
        // scale={2}
        onStop={(ev) => {
          var rect = ev.target.getBoundingClientRect();
          // console.log(rect.top, rect.right, rect.bottom, rect.left);
          // setPosition(ev.target.getBoundingClientRect().top);
          // currentPosition = ev.target.getBoundingClientRect();
          // currentPosition.toString(rect.top)
          // console.log("currentPosition=>", currentPosition);
          console.log("currentPosition=>", ev.target.getBoundingClientRect());
        }}
      >
        <div
          style={{
            width: "100%",
            height: window.innerHeight,
            backgroundColor: colors.white,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
          }}
        >
          {position <= 450 ? (
            <div>
              <Spacer height={30} />
              <div
                style={{
                  ...row,
                  justifyContent: "space-between",
                  paddingRight: 30,
                  paddingLeft: 30,
                  alignItems: "center",
                }}
              >
                <Spacer width={30} />
                <div
                  style={{
                    height: 4,
                    backgroundColor: "#1B1B1B",
                    width: 70,
                    // margin: "auto",
                  }}
                />
                <img src={icons.share} alt="" style={{ height: 20 }} />
              </div>
              <Spacer height={30} />
              <div
                style={{
                  ...row,
                  justifyContent: "space-between",
                  paddingRight: 30,
                  paddingLeft: 30,
                  // alignItems: "center",
                }}
              >
                <div>
                  <CustomText
                    title="Pijama  de Seda"
                    fontSize={20}
                    fontFamily={"ClashDisplay-SemiBold"}
                  />
                  <CustomText title="PARA MUJER" fontSize={16} />
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    // alignSelf: "flex-end",
                    marginTop: -10,
                    // backgroundColor: colors.parrot,
                  }}
                >
                  <FilledCircleCom FilledCircle={FilledCircle} />
                </div>
              </div>
              <Spacer height={10} />
              <div
                style={{
                  ...row,
                  justifyContent: "space-between",
                  // paddingRight: 30,
                  paddingLeft: 30,
                  alignItems: "center",
                }}
              >
                <div>
                  <s style={{ color: "#686868" }}>$135.00</s>
                  <CustomText title="$95.00 " fontSize={20} />
                </div>
                <div
                  style={{
                    height: 2,
                    backgroundColor: "#1B1B1B",
                    width: "55%",
                    // margin: "auto",
                  }}
                />
              </div>
              <Spacer height={30} />
              <div
                style={{
                  // ...row,
                  // justifyContent: "space-between",
                  paddingRight: 30,
                  paddingLeft: 30,
                  // alignItems: "center",
                }}
              >
                <CustomText
                  title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur congue tellus sem, id porttitor elit fermentum eu. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
                  fontSize={14}
                />
                <Spacer height={20} />
                <CustomText
                  title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur congue tellus sem, id porttitor elit fermentum eu. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
                  fontSize={14}
                />
                <Spacer height={20} />
                <CustomText
                  title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur congue tellus sem, id porttitor elit fermentum eu."
                  fontSize={14}
                />
              </div>
              <Spacer height={100} />
              <div
                style={{
                  ...row,
                  justifyContent: "space-between",
                  paddingRight: 30,
                  paddingLeft: 30,
                  alignItems: "center",
                }}
              >
                {/* ORIGINAL ONE */}
                <DropdownCom />

                <a
                  href=""
                  style={{
                    backgroundColor: "#fff",
                    color: "#1B1B1B",
                    borderWidth: 1,
                    borderColor: "#1B1B1B",
                    borderStyle: "solid",
                    // width: "40%",
                    justifyContent: "center",
                    alignItems: "center",
                    display: "flex",
                    paddingRight: 15,
                    paddingLeft: 15,
                    paddingTop: 10,
                    paddingBottom: 10,
                    textDecoration: "none",
                    fontFamily: "ClashDisplay-R",
                  }}
                >
                  GUÍA DE TALLAS
                  <Spacer width={10} />
                  <img src={icons.rightArrow} alt="" style={{ height: 10 }} />
                </a>
              </div>
              <Spacer height={50} />
              <div
                style={{
                  ...row,
                  justifyContent: "space-between",
                  paddingRight: 30,
                  paddingLeft: 30,
                  alignItems: "center",
                }}
              >
                <div style={{ ...row, alignItems: "center" }}>
                  <a href="" style={{ ...noUnderline }}>
                    <CustomText title="-" fontSize={20} />
                  </a>
                  <Spacer width={30} />
                  <CustomText title="1" fontSize={20} />

                  <Spacer width={30} />
                  <a href="" style={{ ...noUnderline }}>
                    <CustomText title="+" fontSize={20} />
                  </a>
                </div>
                <a
                  href=""
                  style={{
                    backgroundColor: "#686868",
                    color: "#fff",
                    // width: "40%",
                    justifyContent: "center",
                    alignItems: "center",
                    display: "flex",
                    paddingRight: 20,
                    paddingLeft: 20,
                    paddingTop: 10,
                    paddingBottom: 10,
                    textDecoration: "none",
                    fontFamily: "ClashDisplay-Regular",
                  }}
                >
                  +ADD TO CART
                </a>
              </div>
            </div>
          ) : (
            <div>
              <Spacer height={30} />
              <div
                style={{
                  height: 4,
                  backgroundColor: "#1B1B1B",
                  width: 70,
                  margin: "auto",
                }}
              />
              <Spacer height={20} />
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  paddingRight: 30,
                  paddingLeft: 30,
                }}
              >
                <CustomText
                  title="Pijama  de Seda"
                  fontSize={20}
                  fontFamily={"ClashDisplay-SemiBold"}
                />
                <img src={icons.share} alt="" style={{ height: 20 }} />
              </div>
              <div
                style={{
                  paddingRight: 30,
                  paddingLeft: 30,
                }}
              >
                <CustomText title="PARA MUJER" fontSize={16} />
              </div>
              <Spacer height={20} />
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  paddingRight: 30,
                  paddingLeft: 30,
                }}
              >
                <div>
                  <s style={{ color: "#686868" }}>$135.00</s>
                  <CustomText title="$95.00 " fontSize={20} />
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    // alignItems:"center",
                    alignSelf: "flex-end",
                    // backgroundColor: colors.parrot,
                  }}
                >
                  <FilledCircleCom FilledCircle={FilledCircle} />
                </div>
              </div>
              <Spacer height={20} />

              <div
                style={{
                  flexDirection: "row",
                  display: "flex",
                  paddingLeft: 20,
                  justifyContent: "space-between",
                }}
              >
                <a
                  href=""
                  style={{
                    backgroundColor: "#686868",
                    color: "#fff",
                    width: "30%",
                    justifyContent: "center",
                    alignItems: "center",
                    display: "flex",
                    paddingRight: 20,
                    paddingLeft: 20,
                    paddingTop: 10,
                    paddingBottom: 10,
                    textDecoration: "none",
                  }}
                >
                  +ADD TO CART
                </a>
                <div style={{ ...row, alignItems: "center" }}>
                  <a href="" style={{ ...noUnderline }}>
                    <CustomText title="-" fontSize={20} />
                  </a>
                  <Spacer width={30} />
                  <CustomText title="1" fontSize={20} />

                  <Spacer width={30} />
                  <a href="" style={{ ...noUnderline }}>
                    <CustomText title="+" fontSize={20} />
                  </a>
                  <Spacer width={10} />
                </div>
              </div>
              <Spacer height={30} />
            </div>
          )}
        </div>
      </Draggable>
      <BottomBarNavigation />
    </div>
  );
};
