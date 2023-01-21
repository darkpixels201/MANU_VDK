import React, { useState } from "react";
import { images } from "../../../Assets/Images";
import CustomText from "../../CustomText";
import Spacer from "../../Spacer";
import { colors } from "../../../utils/Colors";
import { icons } from "../../../Assets/Icons";
import { DropdownCom } from "../../DropdownCom";
import CustomButton from "../../CustomButton";
import { Link } from "react-router-dom";
import FilledRightCircle from "../../FilledCircle";

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
      image: images.slide13,
    },
    {
      id: 2,
      image: images.slide12,
    },
    {
      id: 3,
      image: images.slide10,
    },
  ];

  const [count, setCount] = useState(1);

  const row = {
    display: "flex",
    flexDirection: "row",
  };

  const noUnderline = {
    textDecoration: "none",
  };

  const [counter, setCounter] = useState(1);
  const addOne = (counter, setCounter) => {
    setCounter(counter + 1);
  };
  const minusOne = (counter, setCounter) => {
    if (counter > 1) setCounter(counter - 1);
  };

  return (
    <>
      <div style={{ backgroundColor: colors.lightGreen }}>
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
            style={{
              display: "flex",
              flexDirection: "column",
              paddingLeft: 10,
            }}
          >
            <div style={{ display: "flex", flexDirection: "row" }}>
              <CustomText
                title="BEST SELLERS -"
                fontFamily="ClashDisplay-SemiBold"
                fontSize={50}
                color={colors.purple}
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
        <Spacer height={10} />

        {/* Best Seller Body */}

        <div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              flexWrap: "wrap",
              height: "70vh",
            }}
          >
            <div>
              <div
                style={{
                  width: 500,
                }}
              >
                <div
                  style={{
                    height: "80%",
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <img
                    style={{
                      height: 400,
                      width: 400,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                    src={images.slide13}
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-around",
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
                      }}
                    >
                      <img src={image.image} />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div style={{}}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  width: 500,
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

                {/* <div
                  style={{
                    display: "flex",
                    justifyContent: "end",
                    borderStyle: "solid",
                    borderRadius: 50,
                    borderWidth:1,
                    height: 55,
                    width: 55,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img
                    src={icons.rightArrow}
                    style={{ height: 10, width: 18 }}
                  />
                </div> */}
                <FilledRightCircle />
              </div>
              <Spacer height={30} />
              <div>
                <div
                  style={{
                    height: 1,
                    position: "absolute",
                    width: 355,
                    backgroundColor: colors.black,
                    justifyContent: "right",
                    marginLeft: 220,
                  }}
                ></div>
              </div>
              <div style={{}}>
                <CustomText title="$95.00" fontSize={30} color={colors.purple} />
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
                  width: 200,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignSelf: "flex-end",
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
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <DropdownCom />
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
                  overflowX: "hidden",
                  overflowY: "hidden",
                  borderColor:colors.purple
                }}
              >
                <div>
                  <CustomText title="GUíA DE TALLAS" fontSize={10} color={colors.purple} />
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
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: 400,
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
                  <Link to="/cart" style={{ textDecoration: "none" }}>
                    <CustomButton
                      title="+ ADD TO CART"
                      fontSize={15}
                      justifyContent={"center"}
                      borderRadius={"0"}
                      width={150}
                      height={40}
                      color={colors.white}
                      backgroundColor={colors.green}
                      fontFamily={"ClashDisplay-Light"}
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Spacer height={window.innerWidth <= 999 ? 600 : 80} />
    </>
  );
};
