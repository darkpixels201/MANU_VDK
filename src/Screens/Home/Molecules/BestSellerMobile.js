import { Autocomplete, TextField } from "@mui/material";
import { Container } from "@mui/system";
import React, { useState } from "react";
import { icons } from "../../../Assets/Icons";
import { images } from "../../../Assets/Images";
import CustomButton from "../../../Components/CustomButton";
import CustomText from "../../../Components/CustomText";
import Spacer from "../../../Components/Spacer";
import { colors } from "../../../utils/Colors";
// import { makeStyles } from "@material-ui/core/styles";
// const useStyles = makeStyles({
//   underline: {
//     "&&&:before": {
//       borderBottom: "none"
//     },
//     "&&:after": {
//       borderBottom: "none"
//     }
//   }
// });

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

  const customer = ["XS", "S", "M", "L", "Xl", "XXl", "XXl"];

  const [currentcustomer, setCurrentCustomer] = useState(null);

  const [count, setCount] = useState(1);
  return (
    <div style={{ width: "auto", padding: 25,  }}>
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
              src={images.banner}
            />
          </div>
        </div>
        <Spacer height={10} />
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            // backgroundColor: colors.pinkish,
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
              //   justifyContent: "right",
              //   marginLeft: 220,
            }}
          ></div>
          <div
            style={{
              display: "flex",
              //   justifyContent: "right",
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
            //   alignItems: "center",
          }}
        >
          <div>
            <CustomText title="$95.00" fontSize={25} />
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
              style={{
                "&&&:before": {
                  borderBottom: "none",
                },
              }}
              //   InputProps={{
              //     disableUnderline: true,
              //   }}
              //   underlineShow={false}
              //   disableUnderline={true}

              // popupIcon= {<img src={icons.downArrow} />}
              renderInput={(params) => (
                <TextField
                  {...params}
                  variant="standard"
                  underlineShow={false}
                />
              )}
              currentcustomer={currentcustomer}
              onChange={(event, newValue) => setCurrentCustomer(newValue)}

              // style={{height:10, width:5, backgroundColor:colors.black}}
            />
          </div>
          <div
            style={{
              height: 1,
              width: 100,
              backgroundColor: colors.black,
              marginTop: 10,
              //   left: 100,
              //   marginRight:30
              //   marginLeft:20
              //   justifyContent: "right",
              //   marginLeft: 220,
            }}
          ></div>
        </div>
        <Spacer height={10} />
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <div>
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
          </div>
          <div></div>
        </div>
      </Container>
    </div>
  );
};

export default BestSellerMobile;