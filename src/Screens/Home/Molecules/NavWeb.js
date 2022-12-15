import React, { useState } from "react";
import { Container } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { images } from "../../../Assets/Images";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import "../../../Assets/Style/Navbar.css";
import CustomText from "../../../Components/CustomText";
import { icons } from "../../../Assets/Icons";
import { colors } from "../../../utils/Colors";
import SearchComponent from "../../../Components/SearchComponent";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

export const NavWeb = () => {

    const navbar = [
        {
          id: 1,
          name: "Home",
        },
        {
          id: 1,
          name: "FAJUS",
        },
        {
          id: 1,
          name: "JEANS",
        },
        {
          id: 1,
          name: "ROPA",
        },
        {
          id: 1,
          name: "SHORTS",
        },
        {
          id: 1,
          name: "NEW",
        },
        {
          id: 1,
          name: "SALE",
        },
      ];
      const [open, setOpen] = useState(false);
  return (
    <div style={{backgroundColor:colors.pureWite,}}>
         <Container maxWidth="xl">
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
          <Item sx={{ flexGrow: 1, boxShadow: "none", backgroundColor:colors.pureWite, }}>
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
              cursor:"pointer",
              backgroundColor:colors.pureWite,
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
                  // backgroundColor: colors.lightGreen,
                }}
              >
                {/* <CustomText
                  title={item.name}
                  fontFamily={"ClashDisplay-Regular"}
                  fontSize={15}
                /> */}
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
              backgroundColor:colors.pureWite,
            }}
            onClick={() => {
              setOpen(!open);
            }}
          >
           
            
            <SearchComponent setOpen={setOpen} open={open} />
          </Item>
          
          <Item
            sx={{
              flexGrow: 1.7,
              boxShadow: "none",
              display: "flex",
              flexDirection: "row",
              // backgroundColor: "yellow",
              alignSelf: "center",
              backgroundColor:colors.pureWite,
            }}
          >
            <div style={{ textAlign: "center", flexDirection: "row" }}></div>
            <div style={{ height: 10, width: 10, cursor:"pointer" }}>
              <img src={icons.shoppingCart} style={{ height: 20, width: 20 }} />
            </div>
          </Item>
        </Box>
      </Container>
    </div>
  )
}
