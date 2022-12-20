import { Close } from "@mui/icons-material";
import { Grid } from "@mui/material";
import React from "react";
import { images } from "../../Assets/Images";
import CartNav from "../../Components/CartComponents/CartNav";
import ColumnOne from "../../Components/CartComponents/ColumnOne";
import ColumnThree from "../../Components/CartComponents/ColumnThree";
import ColumnTwo from "../../Components/CartComponents/ColumnTwo";
import DiscountBanner from "../../Components/CartComponents/DiscountBanner";
import Footer from "../../Components/CartComponents/Footer";
import CustomText from "../../Components/CustomText";
import Spacer from "../../Components/Spacer";
import Draggable from "react-draggable";
import { colors } from "../../utils/Colors";
import "swiper/css";
import "swiper/css/pagination";
import { FreeMode } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import BottomBarNavigation from "../../Components/BottomNavigation";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Cart = () => {
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
  const WebCart = () => (
    <>
      <DiscountBanner />
      <CartNav />

      <Grid container rowSpacing={{ xs: 5, sm: 2, md: 3 }} columnSpacing={{}}>
        <Grid
          item
          xs={12}
          sm={12}
          md={2}
          style={{ display: window.innerWidth <= 400 ? "none" : "block" }}
        >
          <ColumnOne />
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <ColumnTwo />
        </Grid>
        <Grid item xs={12} sm={1} md={1}></Grid>
        <Grid item xs={12} sm={5} md={3}>
          <ColumnThree />
        </Grid>
      </Grid>

      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12}>
          <Footer />
        </Grid>
      </Grid>
    </>
  );

  const MobileCartItem = () => (
    <SwiperSlide style={{ height: 150 }}>
      <div style={{ ...row }}>
        <div style={{ height: 120, width: 120 }}>
          <a
            href=""
            style={{
              backgroundColor: "#000",
              color: "#fff",
              height: 20,
              width: 20,
              borderRadius: 10,
              position: "absolute",
              marginLeft: 5,
              marginTop: 10,
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
            }}
          >
            <Close style={{height:12}} />
          </a>
          <img
            src={images.slide12}
            alt=""
            style={{ height: "100%", width: 120,objectFit:"contain" }}
          />
        </div>
        <Spacer width={50} />
        <div>
          <div style={{ ...row, }}>
            <CustomText
              title="PRoducto "
              fontSize={16}
              textAlign={"left"}
              
              fontFamily={"ClashDisplay-SemiBold"}
            />
            <Spacer width={5} />
            <CustomText title="nombre " fontSize={16} />
          </div>
          <Spacer height={5} />
          <CustomText
            title="Lorem ipsum dolor sit amet, consectetur adipiscing elit.  "
            fontSize={16}
            textAlign={"left"}
          />
          <Spacer height={10} />
          <div
            style={{
              ...row,
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <CustomText title="$95.00" fontSize={16} />
            <Spacer width={5} />
            <div style={{ ...row, alignItems: "center" }}>
              <a href="" style={{ ...noUnderline }}>
                <CustomText title="-" fontSize={20} />
              </a>
              <Spacer width={20} />
              <CustomText title="1" fontSize={20} />

              <Spacer width={20} />
              <a href="" style={{ ...noUnderline }}>
                <CustomText title="+" fontSize={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </SwiperSlide>
  );
  const MobileCart = () => (
    <div style={{backgroundColor:colors.white}}>
      <div
        style={{
          paddingRight: 20,
          paddingLeft: 20,
          paddingTop: 10,
          height: window.innerHeight / 1.8,
        }}
      >
        <div
          style={{
            ...row,
            justifyContent: "space-between",
          }}
        >
          <CustomText
            title="VDK"
            fontSize={16}
            fontFamily={"ClashDisplay-SemiBold"}
          />
          {/* <Link to="/"> */}
          <a href="*" >
          <Close />
          </a>
          {/* </Link> */}
        </div>
        <Spacer height={20} />
        <div
          style={{
            ...row,
          }}
        >
          <CustomText
            title="MY"
            fontSize={26}
            fontFamily={"ClashDisplay-SemiBold"}
          />
          <Spacer width={5} />
          <CustomText title="CART" fontSize={26} />
        </div>
        <Spacer height={30} />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            flexWrap: "wrap",
            // margin: "4px 4px",
            // padding: 4,
            // backgroundColor: "green",
            width: "100%",
            height: "100%",
            overflowX: "hidden",
            overflowY: "auto",
            textAlign: "justify",
          }}
        >
          {[1, 2, 3, 4, 5, 6].map((index) => (
            <>
              <MobileCartItem key={index} />
              {/* <Spacer height={30} /> */}
            </>
          ))}
        </div>
       
      </div>

      <Draggable
        axis="y"
        defaultPosition={{ x: 0, y: 100 }}
        // position={'absolute'}
        // grid={[25, 25]}
        // scale={2}
      >
        <div
          style={{
            width: "100%",
            height: window.innerHeight,
            backgroundColor: "#1B1B1B",
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
          }}
        >
          <Spacer height={30} />
          <div
            style={{
              height: 4,
              backgroundColor: colors.white,
              width: 70,
              margin: "auto",
              borderRadius:100
            }}
          />
          <Spacer height={10} />
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              paddingRight: 20,
              paddingLeft: 20,
            }}
          >
            <CustomText title="SUBTOTAL " fontSize={16} color={colors.white} />
            <CustomText title="$95.00 " fontSize={16} color={colors.white} />
          </div>
          <Spacer height={20} />
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              paddingRight: 20,
              paddingLeft: 20,
            }}
          >
            <CustomText title="DISCOUNTS " fontSize={16} color={colors.grey} />
            <CustomText title="$95.00 " fontSize={16} color={colors.grey} />
          </div>
          <Spacer height={10} />
          <div
            style={{
              height: 2,
              backgroundColor: colors.white,
              width: "100%",
              margin: "auto",
              marginLeft: 20,
            }}
          />
          <Spacer height={20} />
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              paddingRight: 20,
              paddingLeft: 20,
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "row",
              }}
            >
              <CustomText
                title="TOTAL "
                fontSize={16}
                color={colors.white}
                fontFamily={"ClashDisplay-SemiBold"}
              />
              <Spacer width={2} />
              <CustomText title="FINAL " fontSize={16} color={colors.white} />
            </div>
            <CustomText title="$95.00 " fontSize={16} color={colors.white} />
          </div>
          <Spacer height={40} />
          <div
            style={{
              flexDirection: "row",
              display: "flex",
              paddingRight: 20,
              paddingLeft: 20,
            }}
          >
            <input
              style={{
                width: "75%",
                padding: 5,
                backgroundColor: "#1B1B1B",
                color: "#fff",
                borderWidth: 2,
                borderColor: colors.white,
                borderStyle: "solid",
              }}
              placeholder="Enter Coupon Code here"
            />
            <a
              href=""
              style={{
                backgroundColor: "#fff",
                color: "#000",
                width: "25%",
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
                textDecoration: "none",
              }}
            >
              Apply
            </a>
          </div>
          <Spacer height={40} />
          <div
            style={{
              flexDirection: "row",
              display: "flex",
              paddingRight: 20,
              paddingLeft: 20,
              justifyContent: "space-between",
            }}
          >
            <a
              href=""
              style={{
                backgroundColor: "#1B1B1B",
                color: "#fff",
                borderWidth: 2,
                borderColor: "#fff",
                borderStyle: "solid",
                width: "35%",
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
                paddingRight: 10,
                paddingLeft: 10,
                paddingTop: 10,
                paddingBottom: 10,
                textDecoration: "none",
              }}
            >
              CONTINUE SHIP
            </a>
            <a
              href=""
              style={{
                backgroundColor: "#aaa",
                color: "#fff",
                width: "35%",
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
              CHECKOUT
            </a>
            
          </div>
          <Spacer height={30} />
        </div>
      </Draggable>

      <BottomBarNavigation footer={false} cart={true} />
    </div>
  );
  return (
    <div>
      <MobileDiv>
        <MobileCart />
      </MobileDiv>
      <WebDiv>
        <WebCart />
      </WebDiv>
      {/* {window.innerWidth <= 400 ? <MobileCart /> : <WebCart />} */}
    </div>
  );
};

export default Cart;

const MobileDiv = styled.div`
  @media only screen and (min-width: 420px) {
    display: none;
  }
`;
const WebDiv = styled.div`
  @media only screen and (max-width: 400px) {
    display: none;
  }
`;
