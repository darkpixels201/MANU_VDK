import { Grid } from "@mui/material";
import React, { useState } from "react";
import DiscountBanner from "../../Components/CartComponents/DiscountBanner";
import CustomText from "../../Components/CustomText";
import Spacer from "../../Components/Spacer";
import { Label, Search, Spa } from "@mui/icons-material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { images } from "../../Assets/Images";
import { colors } from "../../utils/Colors";
import { icons } from "../../Assets/Icons";
import { Autocomplete, TextField } from "@mui/material";

import CategoryMobile from "../../Components/CatergoryComponents/CategoryMobile";

import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";


export const Categories = () => {
  const [count, setCount] = useState(1);

  const customer = ["XS", "S", "M", "L", "Xl", "XXl", "XXl"];

  const [currentcustomer, setCurrentCustomer] = useState(null);

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
  const row = {
    display: "flex",
    flexDirection: "row",
  };
  const center = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  const Banner = () => (
    <div style={{ height: "36vw" }}>
      <img
        src={images.catBanner}
        alt=""
        style={{ objectFit: "cover", width: "100%", height: "100%" }}
      />
      <div style={{ position: "absolute",marginLeft:30,marginTop:-100 }}>
        <div style={row}>
          <CustomText
            fontSize={30}
            title=" DIANE"
            textAlign={"left"}
            fontFamily={"ClashDisplay-SemiBold"}
            color={colors.white}
          />
          <Spacer width={10} />
          <CustomText
            fontSize={30}
            title="&"
            textAlign={"left"}
            fontFamily={"ClashDisplay-SemiBold"}
            color={colors.white}
          />
        </div>
        <CustomText
          fontSize={30}
          title="GEORDI"
          textAlign={"left"}
          fontFamily={"ClashDisplay-SemiBold"}
          color={colors.white}
        />
      </div>
    </div>
  );
  const CardFooter = () => (
    <div>
      <div
        style={{
          ...row,
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
          <CustomText
            fontSize={16}
            title="Brasier de"
            textAlign={"left"}
            fontFamily={"ClashDisplay-SemiBold"}
            // color={colors.white}
          />
          {/* <Spacer height={5} /> */}
          <CustomText
            fontSize={16}
            title="Banda Ancha"
            textAlign={"left"}
            // color={colors.white}
          />
        </div>
        <div
          style={{
            // backgroundColor: colors.purple,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Autocomplete
            options={customer}
            sx={{ width: 10 }}
            defaultValue={customer[0]}
            clearIcon
            // popupIcon= {<img src={icons.downArrow} />}
            renderInput={(params) => (
              <TextField {...params} variant="standard" />
            )}
            currentcustomer={currentcustomer}
            onChange={(event, newValue) => setCurrentCustomer(newValue)}
            // style={{height:10, width:5, backgroundColor:colors.black}}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            // justifyContent: "center",
            alignItems: "center",
            // backgroundColor: colors.parrot,
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
      <div
        style={{
          ...row,
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
          <s style={{ color: "#aaa" }}>$135.00</s>
          <CustomText fontSize={16} title="$95.00" />
        </div>
        <div>
          <a
            href=""
            style={{
              paddingRight: 25,
              paddingLeft: 25,
              paddingTop: 5,
              paddingBottom: 5,
              backgroundColor: "#686868",
              color: colors.white,
              textDecoration: "none",
            }}
          >
            +ADD
          </a>
        </div>
      </div>
    </div>
  );
  const CardImage = ({ height,image }) => (
    <img
      src={image}
      alt=""
      style={{ height: height || "20vw", width: "100%" }}
    />
  );
  const Card = ({ footer,image }) => (
    <>
      {footer === "up" ? (
        <>
          <CardFooter />
          <Spacer height={10} />
        </>
      ) : (
        <></>
      )}
      <CardImage height={"35vw"} image={image} />
      {footer === "down" ? (
        <>
          <Spacer height={10} />
          <CardFooter />
        </>
      ) : (
        <></>
      )}
    </>
  );
  const Footer = () => (
    <Grid container rowSpacing={{ xs: 5, sm: 2, md: 3 }} columnSpacing={{}}>
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        style={{
          backgroundColor: "#343434",
          paddingRight: 190,
          paddingLeft: 240,
          paddingTop: 100,
          paddingBottom: 100,
        }}
      >
        <CustomText
          fontSize={16}
          title="CONTACTO"
          textAlign={"left"}
          color={colors.white}
        />
        <CustomText
          fontSize={16}
          title="+1 321 450 9305"
          textAlign={"left"}
          color={colors.white}
        />
        <Spacer height={20} />
        <div
          style={{
            ...row,
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <CustomText
            fontSize={12}
            title="Privacy Policy&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Terms And Conditions&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Returns & Exchange "
            textAlign={"left"}
            color={colors.white}
          />

          <a href="">
            <div style={row}>
              <CustomText
                fontSize={18}
                title="MANU"
                fontFamily={"ClashDisplay-SemiBold"}
                color={colors.white}
              />
              <Spacer width={5} />
              <CustomText fontSize={18} title="VDK" color={colors.white} />
            </div>
            <CustomText
              fontSize={18}
              title="STORE"
              fontFamily={"ClashDisplay-SemiBold"}
              color={colors.white}
            />
          </a>
        </div>
      </Grid>
    </Grid>
  );

  const CatList = () => (
    <div style={{}}>
      <Spacer height={100} />
      <CatItem label={"FILTROS"} icon={true} iconPath={icons.downArrowLine} />
      <Spacer height={50} />
      <CatItem label={"COLOR"} icon={true} iconPath={icons.plus} />
      <Spacer height={40} />
      <CatItem label={"TALLA"} paddingLeft={60} />
      <Spacer height={40} />
      <CatItem label={"INFO 3"} />
      <Spacer height={40} />
      <CatItem label={"INFO 4"} />
      <Spacer height={40} />
      <CatItem label={"INFO 5"} />
      <Spacer height={40} />
      <CatItem label={"PRECIO "} />
      <Spacer height={40} />
      <div style={{ paddingLeft: 60, paddingRight: 60 }}>
        <Slider
          size="small"
          defaultValue={0}
          aria-label="Small"
          // color="secondary"
          valueLabelDisplay="auto"
        />
        <div style={{ ...row, justifyContent: "space-between" }}>
          <span>10</span>
          <span>100</span>
        </div>
      </div>
      {/* <CustomText fontSize={18} title="FILTROS" textAlign={"left"} /> */}
    </div>
  );


  const CatItem = ({ label, icon, iconPath, paddingLeft }) => (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "60%",
      }}
    >
      <a
        href="#"
        style={{
          color: colors.black,
          textDecoration: "none",
          paddingLeft: paddingLeft || 50,
        }}
      >
        {label}
      </a>
      {icon ? <img src={iconPath} alt="" style={{ height: 10 }} /> : <></>}
    </div>
  );


  const Body = () => (


 
  // return (

    <div>
      <DiscountBanner />
      <Grid container rowSpacing={{ xs: 5, sm: 2, md: 3 }} columnSpacing={{}}>
        <Grid item xs={12} sm={12} md={12}>
          <Grid
            container
            rowSpacing={{ xs: 5, sm: 2, md: 3 }}
            columnSpacing={{}}
            style={{
              paddingLeft: 40,
              paddingRight: 100,
              paddingTop: 20,
            }}
          >
            <Grid item xs={12} sm={12} md={3}>
              <div style={row}>
                <CustomText
                  fontSize={18}
                  title="MANU"
                  textAlign={"left"}
                  fontFamily={"ClashDisplay-SemiBold"}
                />
                <Spacer width={5} />
                <CustomText fontSize={18} title="VDK" />
              </div>
              <CustomText
                fontSize={18}
                title="STORE"
                textAlign={"left"}
                fontFamily={"ClashDisplay-SemiBold"}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={9}>
              <div style={{ ...row, justifyContent: "space-between" }}>
                <div style={{ ...row, padding: 5, ...center }}>
                  <Search fontSize="small" />
                  <input type="text" style={{ borderWidth: 0 }} />
                </div>
                <div
                  style={{
                    ...center,
                  }}
                >
                  <ShoppingCartOutlinedIcon />
                  <Spacer width={50} />
                  <img
                    src={images.twoLines}
                    alt=""
                    style={{ width: 24, height: 10 }}
                  />
                </div>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid container rowSpacing={{ xs: 5, sm: 2, md: 3 }} columnSpacing={{}}>
        <Grid item xs={12} sm={12} md={2.3} style={{}}>
          <div style={{}}>
            <CatList />
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={9.7} style={{ paddingRight: 90 }}>
          <div>
            <Banner />
          </div>
          <Spacer height={60} />
          <Grid
            container
            rowSpacing={{ xs: 5, sm: 2, md: 3 }}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            {[images.slide6, images.slide7, images.slide13, images.slide11].map((item) => (
              <Grid item xs={6} sm={4} md={3}>
                <CardImage image={item} />
                <Spacer height={10} />
                <CardFooter />
              </Grid>
            ))}
          </Grid>
          <Spacer height={60} />
          <Grid
            container
            rowSpacing={{ xs: 5, sm: 2, md: 3 }}
            columnSpacing={{ xs: 1, sm: 2, md: 6 }}
          >
            {[{image:images.slide14,footerPos:"up"},{image:images.slide15,footerPos:"down"}].map((item) => (
              <Grid item xs={12} sm={12} md={6}>
                <Card footer={item.footerPos} image={item.image} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
      <Spacer height={100} />
      <Footer />
    </div>
  )
  return (
    <div>
      
      {window.innerWidth <= 800 ? <CategoryMobile /> : <Body />}
    </div>
  );
};
