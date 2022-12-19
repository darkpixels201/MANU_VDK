import React, { useEffect, useState } from "react";
import DiscountBanner from "../../Components/CartComponents/DiscountBanner";
import { Grid } from "@mui/material";
import CustomText from "../../Components/CustomText";
import Spacer from "../../Components/Spacer";
import { Search, Spa } from "@mui/icons-material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { images } from "../../Assets/Images";
import { colors } from "../../utils/Colors";
import { icons } from "../../Assets/Icons";
import { Autocomplete, TextField } from "@mui/material";
import "swiper/css";
import "swiper/css/pagination";
import { FreeMode } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Draggable from "react-draggable";
import styled from "styled-components";
import BottomBarNavigation from "../../Components/BottomNavigation";
import { DropdownCom } from "../../Components/DropdownCom";
import "../../Assets/Style/font.css";
import { MuiDrawer } from "../../Components/Drawer";
import { Link } from "react-router-dom";

var currentPosition = 0;

const CompareProducts = () => {
  const [value, setValue] = useState("XS");
  const [position, setPosition] = useState(0);
  const [desc, setDesc] = useState(false);
  const noUnderline = {
    textDecoration: "none",
  };
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

  function val() {
    let d = document.getElementById("select_id").value;
    setValue(d);
  }
  // const setPosition = (v) => {
  //   setDesc(v);
  // };
  const imgSlider = [{}];
  const [count, setCount] = useState(1);

  const customer = ["XS", "S", "M", "L", "Xl", "XXl", "XXl"];

  const [currentcustomer, setCurrentCustomer] = useState(null);

  const params = {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
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

  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

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

  const WebCompareProducts = (props) => (
    <div style={{ backgroundColor: colors.white }}>
      <DiscountBanner />
      <Grid container rowSpacing={{ xs: 5, sm: 2, md: 3 }} columnSpacing={{}}>
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          //   style={{
          //     display: window.innerWidth <= 400 ? "none" : "block",
          //     paddingLeft: 50,
          //     paddingTop: 50,
          //     paddingBottom: 100,
          //   }}
        >
          <Grid
            container
            rowSpacing={{ xs: 5, sm: 2, md: 3 }}
            columnSpacing={{}}
            style={{
              // display: window.innerWidth <= 400 ? "none" : "block",
              paddingLeft: 40,
              paddingRight: 100,
              paddingTop: 20,
              // paddingBottom: 100,
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
                    <Link to="/cart" >
                    <ShoppingCartOutlinedIcon style={{color:colors.black}} />
                    </Link>
                    <Spacer width={50} />
                    
                    <img
                      src={images.twoLines}
                      alt=""
                      style={{ width: 24, height: 10, cursor:"pointer" }}
                      onClick={() => props.setIsDrawerOpen(true)}
                    />
                    
                  </div>
                
                <MuiDrawer
                  isDrawerOpen={props.isDrawerOpen}
                  setIsDrawerOpen={props.setIsDrawerOpen}
                />
              </div>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={2}
          style={{
            display: window.innerWidth <= 400 ? "none" : "block",
            paddingLeft: 30,
            // paddingTop: 50,
            paddingBottom: 100,
          }}
        >
          <Grid
            container
            rowSpacing={{ xs: 5, sm: 2, md: 3 }}
            columnSpacing={{}}
          >
            <Grid item xs={12} sm={12} md={12} paddingLeft={5}>
              <Spacer height={50} />
              <Link to="/">
                <img
                  src={images.backArrow}
                  alt=""
                  style={{ width: 30, height: 30, objectFit: "fill" }}
                />
              </Link>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={12} md={12} paddingLeft={7}>
            <Spacer height={30} />
            <div style={row}>
              <CustomText
                fontSize={16}
                title="PUEDE"
                textAlign={"left"}
                fontFamily={"ClashDisplay-SemiBold"}
              />
              <Spacer width={5} />
              <CustomText
                fontSize={16}
                title="INTERESARTE"
                textAlign={"left"}
              />
            </div>
          </Grid>
          {[images.slide12, images.slide11, images.slide10].map((item) => (
            <Grid item xs={12} sm={12} md={12} paddingLeft={5}>
              <Spacer height={30} />
              <div style={{ ...row, width: 250 }}>
                <img
                  src={item}
                  alt=""
                  style={{ width: 130, height: 130, objectFit: "fill" }}
                />
                <Spacer width={10} />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    <CustomText
                      fontSize={14}
                      title="PRoducto"
                      textAlign={"left"}
                      fontFamily={"ClashDisplay-SemiBold"}
                    />

                    <Spacer width={5} />
                    <CustomText
                      fontSize={14}
                      title="Nombre"
                      textAlign={"left"}
                    />
                  </div>
                  <div>
                    <CustomText
                      fontSize={14}
                      title="$95.00"
                      textAlign={"left"}
                    />
                  </div>
                </div>
              </div>
            </Grid>
          ))}
          <Spacer height={100} />
          <Grid item xs={12} sm={12} md={12} paddingLeft={5}>
            <CustomText fontSize={12} title={"Ventadirekta © 2021."} />
            <CustomText fontSize={12} title={"All Rights Reserved"} />
          </Grid>
        </Grid>
        <Grid item xs={12} sm={12} md={10} style={{ paddingBottom: 100 }}>
          <Grid
            container
            rowSpacing={{ xs: 5, sm: 2, md: 3 }}
            columnSpacing={{}}
          >
            <Grid item xs={12} sm={12} md={12}>
              <div
              // style={{
              //   display: "flex",
              //   flexWrap: "wrap",
              //   // backgroundColor: colors.lightGreen
              // }}
              >
                {/* <Container> */}
                {/* <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    flexWrap: "wrap",
                    // backgroundColor: colors.lightGreen,
                    height: "70vh",
                  }}
                > */}
                <Grid
                  container
                  rowSpacing={{ xs: 5, sm: 2, md: 3 }}
                  columnSpacing={{}}
                >
                  <Grid item xs={12} sm={12} md={8}>
                    <div
                      style={
                        {
                          //   width: "70%",
                        }
                      }
                    >
                      <div
                        style={{
                          width: "100%",
                        }}
                      >
                        <div
                          style={{
                            //   height: "80%",
                            //   width: "100%",
                            display: "flex",
                            justifyContent: "center",
                            // alignItems: "center",
                            //   alignContent:"center",
                            //   alignSelf:"center"
                          }}
                        >
                          <img
                            style={{
                              height: "35vw",
                              width: "35vw",
                              // display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                            src={images.slide6}
                          />
                        </div>
                        {/* <spacer height={120} /> */}
                        <div
                          style={{
                            //   backgroundColor: colors.pinkish,
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "center",
                            //   marginTop: 70,
                            width: "100%",
                            marginTop: 20,
                            //   alignSelf:'center'
                          }}
                        >
                          <Spacer width={20} />
                          {BottomImage.map((image, index) => (
                            <>
                              <div
                                key={index}
                                style={{
                                  height: "13vw",
                                  width: "13vw",
                                  display: "flex",
                                  flexDirection: "row",
                                  justifyContent: "center",
                                  // backgroundColor: colors.orangeLight,
                                }}
                              >
                                <img
                                  src={image.image}
                                  style={{ height: "100%", width: "100%" }}
                                />
                              </div>
                              <Spacer width={20} />
                            </>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    md={4}
                    style={{ paddingTop: 25, paddingRight: 98 }}
                  >
                    <div style={{}}>
                      <div>
                        <Spacer height={50} />
                        <div style={{ width: 320 }}>
                          <div style={{ display: "flex" }}>
                            <CustomText
                              title="Faja Banda Ancha"
                              fontFamily="ClashDisplay-SemiBold"
                              fontSize={20}
                            />
                            <Spacer width={5} />
                            <CustomText title="para" fontSize={20} />
                          </div>

                          <CustomText
                            title="Soporte en Espalda"
                            fontSize={20}
                          />
                        </div>
                      </div>
                      <Spacer height={30} />
                      <s style={{ color: "#aaa" }}>$135.00</s>
                      <div style={{ ...row, alignItems: "center" }}>
                        <CustomText title="$95.00" fontSize={30} />
                        <div
                          style={{
                            backgroundColor: "#000",
                            height: 1,
                            width: "15%",
                            position: "absolute",
                            right: 0,
                          }}
                        />
                      </div>

                      <Spacer height={30} />
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "space-between",
                          // backgroundColor: colors.orange,
                          alignItems: "center",
                          width: 200,
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "center",
                            alignItems: "center",
                            alignSelf: "flex-end",
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

                        <DropdownCom />
                      </div>
                      <Spacer height={20} />
                      <div
                        style={{
                          border: "solid",
                          width: 140,
                          height: 30,
                          borderWidth: 0.5,
                          display: "flex",
                          justifyContent: "space-evenly",
                          alignItems: "center",
                        }}
                      >
                        <div>
                          <CustomText title="GUíA DE TALLAS" fontSize={10} />
                        </div>
                        <div>
                          <img
                            src={icons.rightArrow}
                            style={{
                              height: 8,
                              width: 13,
                              display: "flex",
                              justifyContent: "center",
                            }}
                          />
                        </div>
                      </div>
                      <Spacer height={100} />
                      <CustomText title="DESCRIPTION" fontSize={18} />
                      <Spacer height={20} />
                      <div style={{ width: "100%" }}>
                        <CustomText
                          fontSize={13}
                          title="Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Curabitur congue tellus sem, id porttitor elit fermentum eu. Orci varius natoque penatibus et magnis diseefermu parturient montes, nascetur ridiculus mus.Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Curabitur congue tellus sem, id porttitor elit fermentum"
                        />
                      </div>
                      <Spacer height={50} />
                      <div
                        style={{
                          ...row,
                          justifyContent: "space-between",
                          alignItems: "center",
                          paddingLeft: 10,
                        }}
                      >
                        <div
                          style={{
                            ...row,
                            width: "30%",
                            justifyContent: "space-between",
                          }}
                        >
                          <span>-</span>
                          <span>1</span>
                          <span>+</span>
                        </div>
                        <div>
                          <Link to="/cart" >
                          <button
                            style={{
                              backgroundColor: "#686868",
                              color: "#fff",
                              paddingRight: 20,
                              paddingLeft: 20,
                              paddingTop: 10,
                              paddingBottom: 10,
                              textDecoration: "none",
                              fontFamily: "ClashDisplay-Regular",
                              borderStyle:"none",
                              cursor:"pointer"

                              // fontFamily:"ClashDisplay-SemiBold"
                            }}
                          >
                            +ADD TO CART
                          </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </Grid>
                </Grid>
              </div>
              {/* </Container> */}
              {/* </div> */}
            </Grid>

            {/* <Grid item xs={12} sm={12} md={2}>
            <div style={{ width: "30%",flexWrap:'wrap' }}>
                    <div>
                      <Spacer height={50} />
                      <div style={{ width: 320 }}>
                        <div style={{ display: "flex" }}>
                          <CustomText
                            title="Faja Banda Ancha"
                            fontFamily="ClashDisplay-SemiBold"
                            fontSize={20}
                          />
                          <Spacer width={5} />
                          <CustomText title="para" fontSize={20} />
                        </div>

                        <CustomText title="Soporte en Espalda" fontSize={20} />
                      </div>

                    </div>
                    <Spacer height={30} />
                    <s style={{color:"#aaa"}}>$135.00</s>
                    <div style={{...row,alignItems:"center"}}>
                      <CustomText title="$95.00" fontSize={30} />
                      <div style={{backgroundColor:'#000',height:1,width:"15%",position:"absolute",right:0}}/>
                    </div>
                    
                    <Spacer height={30} />
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        // backgroundColor: colors.orange,
                        width: 200,
                      }}
                    >
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
                          sx={{ width: 70 }}
                          defaultValue={customer[0]}
                          clearIcon
                          // popupIcon= {<img src={icons.downArrow} />}
                          renderInput={(params) => (
                            <TextField {...params} variant="standard" />
                          )}
                          currentcustomer={currentcustomer}
                          onChange={(event, newValue) =>
                            setCurrentCustomer(newValue)
                          }
                          // style={{height:10, width:5, backgroundColor:colors.black}}
                        />
                      </div>
                    </div>
                    <Spacer height={20} />
                    <div
                      style={{
                        border: "solid",
                        width: 140,
                        height: 30,
                        borderWidth: 0.5,
                        display: "flex",
                        justifyContent: "space-evenly",
                        alignItems: "center",
                      }}
                    >
                      <div>
                        <CustomText title="GUíA DE TALLAS" fontSize={10} />
                      </div>
                      <div>
                        {" "}
                        <img
                          src={icons.rightArrow}
                          style={{
                            height: 8,
                            width: 13,
                            display: "flex",
                            justifyContent: "center",
                          }}
                        />
                      </div>
                    </div>
                    <Spacer height={100} />
                    <CustomText title="DESCRIPTION" fontSize={18} />
                    <Spacer height={20} />
                    <div style={{ width: "100%" }}>
                      <CustomText
                        fontSize={13}
                        title="Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Curabitur congue tellus sem, id porttitor elit fermentum eu. Orci varius natoque penatibus et magnis diseefermu parturient montes, nascetur ridiculus mus.Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Curabitur congue tellus sem, id porttitor elit fermentum"
                      />
                    </div>
                    <Spacer height={50} />
                    <div style={{...row,justifyContent:'space-between',alignItems:"center",paddingLeft:10}}>
                        <div style={{...row,width:"30%",justifyContent:"space-between"}}>
                            <span>-</span>
                            <span>1</span>
                            <span>+</span>
                        </div>
                        <div>
                            <button style={{backgroundColor:'#686868',color:'#fff',paddingRight:20,paddingLeft:20,paddingTop:10,paddingBottom:10}}>+ADD TO CART</button>
                        </div>
                    </div>
                  </div>
            </Grid> */}
          </Grid>
        </Grid>
      </Grid>

      <Footer />
    </div>
  );
  const MobileCompareProducts = () => (
    <div >
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

  return (
    <div>
      <MobileDiv>
        <MobileCompareProducts />
      </MobileDiv>
      <WebDiv>
        <WebCompareProducts
          isDrawerOpen={isDrawerOpen}
          setIsDrawerOpen={setIsDrawerOpen}
        />
      </WebDiv>
      {/* {width <= 400 ? (
        <MobileCompareProducts />
      ) : (
        <WebCompareProducts />
      )} */}
    </div>
  );
};

export default CompareProducts;

// const MyDiv = styled.div`
//   @media only screen and (max-width: ${props => props.width ||"400px"}) {
//     display: none;
//   }
//   `;
const MobileDiv = styled.div`
  @media only screen and (min-width: 400px) {
    display: none;
  }
`;
const WebDiv = styled.div`
  @media only screen and (max-width: 400px) {
    display: none;
  }
`;
