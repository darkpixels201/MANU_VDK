import React, { useState } from "react";
import { Container } from "@mui/material";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import "../../../Assets/Style/Navbar.css";
import CustomText from "../../../Components/CustomText";
import { icons } from "../../../Assets/Icons";
import { colors } from "../../../utils/Colors";
import SearchComponent from "../../../Components/SearchComponent";
import { Link } from "react-router-dom";

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
    <div style={{ backgroundColor: colors.white }}>
      <Container maxWidth="xl">
        <Box
          sx={{
            display: "flex",
            border: "none",
            boxShadow: "none",
          }}
        >
          <Item
            sx={{
              flexGrow: 1,
              boxShadow: "none",
              backgroundColor: colors.white,
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <CustomText
                title="MANU VDK"
                fontFamily={"ClashDisplay-SemiBold"}
              />
              <CustomText title="STORE" />
            </div>
          </Item>
          <Item
            sx={{
              flexGrow: 1.9,
              boxShadow: "none",
              display: "flex",
              flexDirection: "row",
              paddingTop: 0,
              paddingBottom: 0,
              justifyContent: "flex-end",
              cursor: "pointer",
              backgroundColor: colors.white,
            }}
          >
            {navbar.map((item, index) => (
              <div
                className="bc"
                key={index}
                style={{
                  paddingRight: 16,
                  paddingLeft: 16,
                  width: 63,
                  height: "100%",
                  alignItems: "center",
                  display: "flex",
                  justifyContent: "center",
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
              alignSelf: "center",
              position: "relative",
              backgroundColor: colors.white,
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
              alignSelf: "center",
              backgroundColor: colors.white,
            }}
          >
            <div style={{ textAlign: "center", flexDirection: "row" }}></div>
            <Link to="/cart">
              <div style={{ height: 10, width: 10, cursor: "pointer" }}>
                <img
                  src={icons.shoppingCart}
                  style={{ height: 20, width: 20 }}
                />
              </div>
            </Link>
          </Item>
        </Box>
      </Container>
    </div>
  );
};
