import React, { useState } from "react";
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

const CompareProducts = () => {
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
      image: images.banner,
    },
    {
      id: 2,
      image: images.banner,
    },
    {
      id: 3,
      image: images.banner,
    },
  ];

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
  return (
    <div>
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
              <img
                src={images.backArrow}
                alt=""
                style={{ width: 30, height: 30, objectFit: "fill" }}
              />
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
          {[1, 2, 3].map(() => (
            <Grid item xs={12} sm={12} md={12} paddingLeft={5}>
              <Spacer height={30} />
              <div style={{ ...row, width: 250 }}>
                <img
                  src={images.banner}
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
                            src={images.banner}
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
                          <button
                            style={{
                              backgroundColor: "#686868",
                              color: "#fff",
                              paddingRight: 20,
                              paddingLeft: 20,
                              paddingTop: 10,
                              paddingBottom: 10,
                            }}
                          >
                            +ADD TO CART
                          </button>
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
};

export default CompareProducts;
