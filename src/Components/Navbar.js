import React, { useEffect, useState } from "react";
import { Container } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { colors } from "../utils/Colors";
import { images } from "../Assets/Images";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { icons } from "../Assets/Icons";
import CustomText from "../Components/CustomText";
import "../Assets/Style/Navbar.css";
import { NavbarMobile } from "../Screens/Home/Molecules/NavbarMobile";
import { NavWeb } from "../Screens/Home/Molecules/NavWeb";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function Navbar() {
  return (
    <div>
      {window.innerWidth <= 951 ? (
        ""
      ) : (
        <div
          style={{
            width: "100%",
            height: 40,
            backgroundColor: colors.grey,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CustomText title=" “Obtén un " fontSize={14} color={colors.white} />
          <CustomText
            title="15% de descuento"
            fontSize={14}
            color={colors.white}
            fontFamily="ClashDisplay-SemiBold"
          />
          <CustomText
            title="por tu primera compra”"
            fontSize={14}
            color={colors.white}
          />
        </div>
      )}

      {window.innerWidth <= 951 ? <NavbarMobile /> : <NavWeb />}
      {/* <Container maxWidth="xl">
        <Box
          sx={{
            display: "flex",
            border: "none",
            boxShadow: "none",
            //   p: 1,
            //   bgcolor: "background.paper",
            //   borderRadius: 1,
          }}
        >
          <Item sx={{ flexGrow: 1, boxShadow: "none" }}>
            <div
              style={{
                display: "flex",
                // justifyContent: "flex-end",
                // alignItems: "center",
                flexDirection: "column",
                // backgroundColor: "red",
              }}
            >
              <CustomText title="MANU VDK" />
              <CustomText title="STORE" />
            </div>
          </Item>
          <Item
            sx={{
              flexGrow: 1.9,
              boxShadow: "none",
              display: "flex",
              flexDirection: "row",
              // backgroundColor: "yellow",
              paddingTop: 0,
              paddingBottom: 0,
              justifyContent: "flex-end",
              cursor: "pointer",
              // paddingRight: 8,
            }}
          >
            {navbar.map((item, index) => (
              <div
                className="bc"
                key={index}
                style={{
                  paddingRight: 32,
                  width: 60,
                  height: "100%",
                }}
              >
                <ul
                  style={{
                    listStyle: "none",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <li>
                    <p
                      style={{
                        fontSize: 15,
                        fontFamily: "ClashDisplay-Regular",
                      }}
                    >
                      {item.name}
                    </p>
                  </li>
                </ul>
              </div>
            ))}
          </Item>
          <Item
            sx={{
              flexGrow: 0.1,
              boxShadow: "none",
              display: "flex",
              flexDirection: "row",
              //   backgroundColor: "yellow",
              alignSelf: "center",
              position: "relative",
            }}
          >
            <img
              src={icons.search}
              style={{
                height: 15,
                width: 15,
                alignSelf: "center",
                position: "absolute",
                paddingLeft: 5,
              }}
            />
            <input
              style={{
                height: 20,
                width: 120,
                border: "none",
                alignSelf: "center",
                // borderBlock: "white",
                borderRadius: 10,
                outlineColor: colors.lightGray,
                borderWidth: 0.1,
                paddingLeft: 25,
                borderWidth: 0.1,
                // outline:"none"
              }}
              type="text"
              id="floatingInput"
            />
          </Item>
          <Item
            sx={{
              flexGrow: 1.7,
              boxShadow: "none",
              display: "flex",
              flexDirection: "row",
              // backgroundColor: "yellow",
              alignSelf: "center",
            }}
          >
            <div style={{ textAlign: "center", flexDirection: "row" }}></div>
            <div style={{ height: 10, width: 10, cursor: "pointer" }}>
              <img src={icons.shoppingCart} style={{ height: 20, width: 20 }} />
            </div>
          </Item>
        </Box>
      </Container> */}
    </div>
  );
}

export default Navbar;
