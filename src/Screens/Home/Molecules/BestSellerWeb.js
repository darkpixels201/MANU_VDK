import { Container } from "@mui/system";
import React, { useState } from "react";
import { images } from "../../../Assets/Images";
import CustomText from "../../../Components/CustomText";
import Spacer from "../../../Components/Spacer";
import { colors } from "../../../utils/Colors";
import { icons } from "../../../Assets/Icons";
import { Autocomplete, TextField } from "@mui/material";
import Swiper from "react-id-swiper";

export const BestSellerWeb = () => {
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
    slidesPerView:  3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  };
  

  return (
    <div>
      <Spacer height={80} />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <div style={{ height: 55 }}>
          <div
            style={{
              height: 1,
              width: 180,
              backgroundColor: colors.black,
              justifyContent: "center",
            }}
          ></div>
        </div>
        <div
          style={{ display: "flex", flexDirection: "column", paddingLeft: 10 }}
        >
          <div style={{ display: "flex", flexDirection: "row" }}>
            <CustomText
              title="BEST SELLERS -"
              fontFamily="ClashDisplay-SemiBold"
              fontSize={50}
            />
            <CustomText
              title="SELLING"
              fontFamily="ClashDisplay-Regular"
              fontSize={50}
            />
          </div>
          <div>
            <CustomText title="LIKE A HOT CAKE" fontSize={50} />
          </div>
        </div>
      </div>

      {/* Best Seller Body */}

      <div
      // style={{
      //   display: "flex",
      //   flexWrap: "wrap",
      //   // backgroundColor: colors.lightGreen
      // }}
      >
        {/* <Container> */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            flexWrap: "wrap",
            // backgroundColor: colors.lightGreen,
            height: "70vh",
          }}
        >
          <div>
            <div
              style={{
                // height: 700,
                width: 500,
                // backgroundColor: colors.parrot,
                // display:"flex"
              }}
            >
              <div
                style={{
                  height: "80%",
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  //   alignItems: "center",
                  //   alignContent:"center",
                  //   alignSelf:"center"
                }}
              >
                <img
                  style={{
                    height: 400,
                    width: 400,
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
                  justifyContent: "space-around",
                  //   marginTop: 70,
                  width: "100%",
                  marginTop: 20,
                }}
              >
                {BottomImage.map((image, index) => (
                  <div
                    key={index}
                    style={{
                      height: 130,
                      width: 130,
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                      // backgroundColor: colors.orangeLight,
                    }}
                  >
                    <img src={image.image} />
                  </div>
                ))}
              </div>
            </div>
            {/* <div
              style={{
                backgroundColor: colors.lightGray,
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Swiper
                style={{ display: "flex", flexDirection: "row" }}
                {...params}
              >
                <div>
                  <img src={images.title} style={{ height: 100, width: 100 }} />
                </div>
                <div>
                  <img src={images.title} style={{ height: 100, width: 100 }} />
                </div>
                <div>
                  <img src={images.title} style={{ height: 100, width: 100 }} />
                </div>
                <div>
                  <img src={images.title} style={{ height: 100, width: 100 }} />
                </div>
              </Swiper>
            </div> */}
          </div>

          <div style={{}}>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                width: 500,
                // backgroundColor: colors.purple
              }}
            >
              <div style={{ width: 320 }}>
                <CustomText
                  title="PIJAMA  DE SEDA Y "
                  fontFamily="ClashDisplay-SemiBold"
                  fontSize={30}
                />
                <div style={{ display: "flex" }}>
                  <CustomText
                    title="ENCAJE"
                    fontFamily="ClashDisplay-SemiBold"
                    fontSize={30}
                  />
                  <CustomText title=" PATA MUJER" fontSize={30} />
                </div>

                <CustomText title="SHORT & TOP" fontSize={30} />
              </div>

              <div style={{ display: "flex", justifyContent: "end" }}>
                <img
                  src={icons.circleRightArrow}
                  style={{ height: 50, width: 50 }}
                />
              </div>
            </div>
            <Spacer height={30} />
            <div>
              <div
                style={{
                  height: 1,
                  position:"absolute",
                  width: 408,
                  backgroundColor: colors.black,
                  justifyContent: "right",
                  marginLeft: 220,
                }}
              ></div>
            </div>
            <div style={{}}>
              <CustomText title="$95.00" fontSize={30} />
            </div>
            <Spacer height={25} />
            <div style={{ width: 340 }}>
              <CustomText
                fontSize={13}
                title="Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Curabitur congue tellus sem, id porttitor elit fermentum eu. Orci varius natoque penatibus et magnis diseefermu parturient montes, nascetur ridiculus mus."
              />
            </div>
            <Spacer height={20} />
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
                          borderColor: colors.orange,
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
                  sx={{ width: 70, }}
                  // defaultValue={customer[0]}
                  // clearIcon
                  color="#fff"
                  // popupIcon= {<img src={icons.downArrow} />}
                  renderInput={(params) => (
                    <TextField {...params} variant="standard" style={{}}/>
                    
                  )}
                  currentcustomer={currentcustomer}
                  onChange={(event, newValue) => setCurrentCustomer(newValue)}
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
          </div>
        </div>
        {/* </Container> */}
      </div>
    </div>
  );
};
