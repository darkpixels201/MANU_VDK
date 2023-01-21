import { Search } from "@mui/icons-material";
import { Grid } from "@mui/material";
import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { colors } from "../../../utils/Colors";
import { center, row } from "../../../utils/CommonStyles";
import DiscountBanner from "../../CartComponents/DiscountBanner";
import CustomText from "../../CustomText";
import Spacer from "../../Spacer";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { MuiDrawer } from "../../Drawer";
import { images } from "../../../Assets/Images";
import Footer from "../../Footer";
import { icons } from "../../../Assets/Icons";
import { DropdownCom } from "../../DropdownCom";
import { FilledCircleCom } from "../../FilledCircleCom";
import "swiper/css";
import "swiper/css/pagination";
import FilledRightCircle from "../../FilledCircle";
import SearchComponent from "../../SearchComponent";
import ProductArray from "../../../utils/ProductArray";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import "../font.css";

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
  {
    id: 3,
    image: images.slide9,
  },
];

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

export const WebCompareProducts = (props) => {
  const [mainImage, setMainImage] = useState();
  const { id } = useParams();
  console.log(id);
  const [count, setCount] = useState(1);

  const [counter, setCounter] = useState(1);
  const addOne = (counter, setCounter) => {
    setCounter(counter + 1);
  };
  const minusOne = (counter, setCounter) => {
    if (counter > 1) setCounter(counter - 1);
  };
  return (
    <div style={{ backgroundColor: colors.colorA }}>
      <DiscountBanner />
      <Grid container rowSpacing={{ xs: 5, sm: 2, md: 3 }} columnSpacing={{}}>
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          style={{
            position: "sticky",
            width: "100%",
            zIndex: 110,
            top: 40,
            backgroundColor: colors.white,
          }}
        >
          <Grid
            container
            rowSpacing={{ xs: 5, sm: 2, md: 3 }}
            columnSpacing={{}}
            style={{
              // display: window.innerWidth <= 400 ? "none" : "block",
              paddingLeft: 40,
              paddingRight: 100,
              backgroundColor:colors.colorA
              // paddingTop: 20,
              // paddingBottom: 100,
            }}
          >
            <Grid item xs={12} sm={12} md={3}>
              <Link to="/" style={{ textDecoration: "none" }}>
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
              </Link>
            </Grid>
            <Grid item xs={12} sm={12} md={9}>
              <div style={{ ...row, justifyContent: "space-between" }}>
                <div style={{ ...row, padding: 5, ...center }}>
                  <SearchComponent />
                </div>

                <div
                  style={{
                    ...center,
                  }}
                >
                  <Link to="/cart">
                    <ShoppingCartOutlinedIcon style={{ color: colors.black }} />
                  </Link>
                  <Spacer width={50} />

                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      cursor: "pointer",
                    }}
                    onClick={() => props.setIsDrawerOpen(true)}
                  >
                    <img
                      // onClick={() => setIsDrawerOpen(true)}
                      src={icons.line}
                      //   className="resimage"
                      style={{ width: 24, height: 2 }}
                    />
                    <Spacer height={8} />
                    <img
                      // onClick={() => setIsDrawerOpen(true)}
                      src={icons.line}
                      //   className="resimage"
                      style={{ width: 24, height: 2 }}
                    />
                  </div>
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
            display: window.innerWidth <= 480 ? "none" : "block",
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
                <FilledRightCircle left={true} size={2} />
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
                color={colors.colorB}
              />
              <Spacer width={5} />
              <CustomText
                fontSize={16}
                title="INTERESARTE"
                textAlign={"left"}
              />
            </div>
          </Grid>
          {[images.slide12, images.slide11, images.slide10].map(
            (item, index) => (
              <Grid key={index} item xs={12} sm={12} md={12} paddingLeft={5}>
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
                        color={colors.colorB}
                      />

                      <Spacer width={5} />
                      <CustomText
                        fontSize={14}
                        title="NOMBRE"
                        textAlign={"left"}
                      />
                    </div>
                    <div>
                      <CustomText
                        fontSize={14}
                        title="$95.00"
                        textAlign={"left"}
                        color={colors.colorB}
                      />
                    </div>
                  </div>
                </div>
              </Grid>
            )
          )}
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
              <div>
                <Grid
                  container
                  rowSpacing={{ xs: 5, sm: 2, md: 3 }}
                  columnSpacing={{}}
                >
                  {ProductArray.map((item, index) => (
                    <>
                      {item.id == id ? (
                        <Grid key={index} item xs={12} sm={12} md={8} >
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "flex-end",
                            }}
                          >
                            <div
                              style={{
                                width: "90%",
                                // backgroundColor:"black",
                                alignItems: "center",
                              }}
                            >
                              <div
                                style={{
                                  display: "flex",
                                  justifyContent: "center",
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
                                  src={mainImage? mainImage : item.image}
                                />
                              </div>
                              {/* <Spacer height={10} /> */}

                              <Swiper
                                slidesPerView={3}
                                spaceBetween={40}
                                // freeMode={true}
                                // navigation={true}
                                // navigation={{
                                //   prevEl: ".prev",
                                //   nextEl: ".next",
                                // }}
                                pagination={{
                                  clickable: true,
                                }}
                                modules={[Navigation]}
                                style={{ width: "75%", height:"30%" }}
                              >
                                <div
                                  style={{
                                    //   backgroundColor: colors.pinkish,
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "center",
                                    //   marginTop: 70,
                                    width: "80%",
                                    marginTop: 20,
                                    //   alignSelf:'center'
                                  }}
                                >
                                  <Spacer width={20} />

                                  {BottomImage.map((image, index) => (
                                    <SwiperSlide
                                      key={index}
                                      style={
                                        {
                                          // backgroundColor: colors.black,
                                          // width:"45%"
                                        }
                                      }
                                    >
                                      <a
                                        style={{ cursor: "pointer" }}
                                        onClick={() =>
                                          setMainImage(image.image)
                                        }
                                      >
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
                                            style={{
                                              height: "100%",
                                              width: "100%",
                                            }}
                                          />
                                        </div>
                                        <Spacer width={20} />
                                      </a>
                                    </SwiperSlide>
                                  ))}
                                </div>
                              </Swiper>
                            </div>
                          </div>
                        </Grid>
                      ) : null}
                    </>
                  ))}

                  <Grid
                    item
                    xs={12}
                    sm={12}
                    md={4}
                    style={{ paddingTop: 25, paddingRight: 98 }}
                  >
                    {ProductArray.map((item, index) => (
                      <div key={index}>
                        {item.id == id ? (
                          <div style={{}}>
                            <div>
                              <Spacer height={50} />
                              <div style={{ width: 320 }}>
                                <div style={{ display: "flex" }}>
                                  <CustomText
                                    title={item.text1}
                                    fontFamily="ClashDisplay-SemiBold"
                                    fontSize={20}
                                    color={colors.colorB}
                                  />
                                  <Spacer width={5} />
                                  <CustomText title="para" fontSize={20} />
                                </div>

                                <CustomText title={item.text2} fontSize={20} />
                              </div>
                            </div>
                            <Spacer height={30} />
                            <s style={{ color: "#aaa" }}>$135.00</s>
                            <div style={{ ...row, alignItems: "center" }}>
                              <CustomText title={item.price} color={colors.colorB} fontSize={30} />
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
                                <FilledCircleCom FilledCircle={FilledCircle} />
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
                                borderColor:colors.colorB
                              }}
                            >
                              <div>
                                <CustomText title={item.text1} color={colors.colorB} fontSize={10} />
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
                              <div style={{ ...row, alignItems: "center" }}>
                                <div
                                  style={{
                                    cursor: "pointer",
                                    height: 10,
                                    width: 20,
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                  }}
                                >
                                  <CustomText
                                    title="-"
                                    fontSize={20}
                                    onClick={() =>
                                      minusOne(counter, setCounter)
                                    }
                                  />
                                </div>
                                <Spacer width={20} />
                                <CustomText title={counter} fontSize={20} />

                                <Spacer width={20} />
                                <div
                                  style={{
                                    cursor: "pointer",
                                    height: 10,
                                    width: 20,
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                  }}
                                  onClick={() => addOne(counter, setCounter)}
                                >
                                  <CustomText title="+" fontSize={20} />
                                </div>
                              </div>
                              <div>
                                <Link to="/cart">
                                  <button
                                    style={{
                                      backgroundColor: colors.colorC,
                                      color: "#fff",
                                      paddingRight: 20,
                                      paddingLeft: 20,
                                      paddingTop: 10,
                                      paddingBottom: 10,
                                      textDecoration: "none",
                                      fontFamily: "ClashDisplay-Regular",
                                      borderStyle: "none",
                                      cursor: "pointer",
                                    }}
                                  >
                                    +ADD TO CART
                                  </button>
                                </Link>
                              </div>
                            </div>
                          </div>
                        ) : null}
                      </div>
                    ))}

                    {/* <div style={{}}>
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
                          <FilledCircleCom FilledCircle={FilledCircle} />
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
                        <div style={{ ...row, alignItems: "center" }}>
                          <div
                            style={{
                              cursor: "pointer",
                              height: 10,
                              width: 20,
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                          >
                            <CustomText
                              title="-"
                              fontSize={20}
                              onClick={() => minusOne(counter, setCounter)}
                            />
                          </div>
                          <Spacer width={20} />
                          <CustomText title={counter} fontSize={20} />

                          <Spacer width={20} />
                          <div
                            style={{
                              cursor: "pointer",
                              height: 10,
                              width: 20,
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                            onClick={() => addOne(counter, setCounter)}
                          >
                            <CustomText title="+" fontSize={20} />
                          </div>
                        </div>
                        <div>
                          <Link to="/cart">
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
                                borderStyle: "none",
                                cursor: "pointer",
                              }}
                            >
                              +ADD TO CART
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div> */}

                    {/* END OF DATA */}
                  </Grid>
                </Grid>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Footer />
    </div>
  );
};
