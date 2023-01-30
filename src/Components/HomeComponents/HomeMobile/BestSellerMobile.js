import { Container } from "@mui/system";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { icons } from "../../../Assets/Icons";
import { images } from "../../../Assets/Images";
import CustomButton from "../../../Components/CustomButton";
import CustomText from "../../../Components/CustomText";
import { DropdownCom } from "../../../Components/DropdownCom";
import Spacer from "../../../Components/Spacer";
import { colors } from "../../../utils/Colors";
import IconTint from 'react-icon-tint';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "../../Body/styles.css";
import { Navigation, Pagination } from "swiper";
import { StrikeThroughText } from "../../CompareProductsComponents/CompareWeb/WebCompareProducts";

const BestSellerMobile = () => {
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

  const [count, setCount] = useState(1);

  const [counter, setCounter] = useState(1);
  const addOne = (counter, setCounter) => {
    setCounter(counter + 1);
  };
  const minusOne = (counter, setCounter) => {
    if (counter > 1) setCounter(counter - 1);
  };

  const row = {
    display: "flex",
    flexDirection: "row",
  };
  const center = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  const noUnderline = {
    textDecoration: "none",
  };
  return (
    <div style={{ width: "auto", padding: 25, backgroundColor: colors.colorA }}>
      <Container maxWidth="lg">
        <div>
          <CustomText
            title="BEST SELLERS - SELLING"
            fontFamily="ClashDisplay-SemiBold"
            fontSize={25}
            color={colors.colorB}
          />
          <CustomText
            title="LIKE A HOT CAKE"
            fontFamily="ClashDisplay-Regular"
            fontSize={25}
          />
        </div>
        <Spacer height={10} />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            alignSelf: "center",
            alignContent: "center",
          }}
        >
          <div
            style={{
              height: 350,
              width: "100%",
              // display: "flex",
              // justifyContent: "center",
              // alignItems: "center",
              // alignSelf: "center",
              // alignContent: "center",
            }}
          >
            <Swiper
        slidesPerView={window.innerWidth <= 1000 ? window.innerWidth <= 650 ? 1 : 3 : 4}
        // spaceBetween={-47}
        freeMode={true}
        modules={[Pagination]}
        navigation={true}
        pagination={true}
        // color={colors.black}
      >
        {[1,2,3,4].map((item, index) => (
          <SwiperSlide
            key={index}
            // style={{
            //   backgroundColor: props.on ? colors.colorB : colors.colorA,
            // }}
          >
            <img
              style={{
                height: "100%",
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                alignSelf: "center",
                alignContent: "center",
              }}
              src={images.slide13}
            />
            {/* <div style={{display:'flex',flexDirection:'row'}}>
              <div style={{height:5,width:5,borderRadius:3,backgroundColor:'#000'}}/>
            </div> */}
          </SwiperSlide>
        ))}
      </Swiper>
            {/* <img
              style={{
                height: "100%",
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                alignSelf: "center",
                alignContent: "center",
              }}
              src={images.slide13}
            /> */}
          </div>
        </div>
        <Spacer height={10} />
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <div></div>
          <div
            style={{
              height: 4,
              borderRadius: 5,
              width: 100,
              backgroundColor: colors.colorB,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: 7,
            }}
          ></div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <IconTint color={colors.colorB} src={icons.share} style={{ height: 20, width: 20 }} />
          </div>
        </div>
        <Spacer height={10} />

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <CustomText
              title="PIJAMA  DE SEDA "
              fontFamily="ClashDisplay-SemiBold"
              fontSize={15}
            />
            <CustomText title=" PATA MUJER" fontSize={15} />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            {FilledCircle.map((circle, index) => (
              <div key={index} style={{ paddingLeft: 10 }}>
                {count == circle.id ? (
                  <div
                    style={{
                      height: 22,
                      width: 22,
                      borderRadius: 50,
                      borderColor: colors.black,
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
        <Spacer height={10} />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "row",
            alignItems:"center"
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <StrikeThroughText/>
            <div>
              <CustomText title="$95.00" fontSize={20} />
            </div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <DropdownCom />
          </div>
          <div
            style={{
              height: 1,
              width: 150,
              backgroundColor: colors.black,
              marginTop: 10,
              marginRight:-50
            }}
          ></div>
        </div>
        <Spacer height={10} />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>
            <Link to="/cart" style={{ textDecoration: "none" }}>
              <CustomButton
                title="+ ADD TO CART"
                fontSize={15}
                justifyContent={"center"}
                borderRadius={"0"}
                width={150}
                height={40}
                color={colors.white}
                backgroundColor={colors.colorC}
                fontFamily={"ClashDisplay-Light"}
              />
            </Link>
          </div>
          <div style={{ ...row, alignItems: "center" }}>
            <div>
              <CustomText title="-" fontSize={20} onClick={() => minusOne(counter, setCounter)} />
            </div>
            <Spacer width={20} />
            <CustomText title={counter} fontSize={20} />

            <Spacer width={20} />
            <div>
              <CustomText onClick={() => addOne(counter, setCounter)} title="+" fontSize={20} />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default BestSellerMobile;
