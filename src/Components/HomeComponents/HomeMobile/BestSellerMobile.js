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
    <div style={{ width: "auto", padding: 25, backgroundColor: colors.white }}>
      <Container maxWidth="lg">
        <div>
          <CustomText
            title="BEST SELLERS - SELLING"
            fontFamily="ClashDisplay-SemiBold"
            fontSize={25}
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
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              alignSelf: "center",
              alignContent: "center",
            }}
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
              backgroundColor: colors.black,
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
            <img src={icons.share} style={{ height: 20, width: 20 }} />
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
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <s style={{ color: colors.lightPurple }}>$135.00</s>
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
              width: 100,
              backgroundColor: colors.black,
              marginTop: 10,
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
                backgroundColor={colors.grey}
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
