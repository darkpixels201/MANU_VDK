import React, { useEffect, useState } from "react";
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
import "../../../Assets/Style/Body.css";

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
      name: "HOME",
      active: "ClashDisplay-SemiBold",
      // textColor:colors.colorB,
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
  const [sticky, setSticky] = useState(false);
  const [active, setActive] = useState(0);

  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });
  return (
    <div style={{ backgroundColor: colors.colorA, position: "sticky" }}>
      {/* <nav style={{}} > */}
      <Container maxWidth="xl" style={{ position: "sticky" }}>
        <nav style={{ position: "sticky" }}>
          <Box
            sx={{
              display: "flex",
              border: "none",
              boxShadow: "none",
              position: "sticky",
            }}
          >
            <Item
              sx={{
                flexGrow: 1,
                boxShadow: "none",
                backgroundColor: colors.white,
                position: "sticky",
                backgroundColor: colors.colorA,
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  position: "sticky",
                }}
              >
                <CustomText
                  title="MANU VDK"
                  fontFamily={"ClashDisplay-SemiBold"}
                  backgroundColor={colors.colorA}
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
                position: "sticky",
                backgroundColor: colors.colorA,
              }}
            >
              {navbar.map((item, index) => (
                <div
                  className={item.active ? "bgwhite bc" : "bc"}
                  key={index}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
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
                          fontFamily: item.active
                            ? "ClashDisplay-Semibold"
                            : "ClashDisplay-Regular",
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
                position: "sticky",
                backgroundColor: colors.colorA,
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
                position: "sticky",
                backgroundColor: colors.colorA,
              }}
            >
              {/* <div style={{ textAlign: "center", flexDirection: "row" }}></div> */}
              <div
                style={{
                  height: 25,
                  width: 25,
                  cursor: "pointer",
                  position: "sticky",
                  top: 0,
                }}
              >
                <Link to="/cart">
                  <img
                    src={icons.shoppingCart}
                    style={{ height: 20, width: 20 }}
                  />
                </Link>
              </div>
            </Item>
          </Box>
        </nav>
      </Container>
      {/* </nav> */}
    </div>
  );
};
