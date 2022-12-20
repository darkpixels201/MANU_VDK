import { Container, fontSize } from "@mui/system";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { icons } from "../../../Assets/Icons";
import CustomText from "../../../Components/CustomText";
import SearchComponent from "../../../Components/SearchComponent";
import Spacer from "../../../Components/Spacer";
import { colors } from "../../../utils/Colors";

export const NavbarMobile = () => {
  const navbar = [
    {
      id: 1,
      name: "FAJUS",
    },
    {
      id: 2,
      name: "ROPA",
    },
    {
      id: 3,
      name: "SHORTS",
    },
    {
      id: 4,
      name: "JEANS",
    },
  ];
  const [open, setOpen] = useState(false);
  return (
    <div style={{ backgroundColor: colors.white }}>
      <Spacer height={10} />
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          width: "auto",
          paddingRight: 25,
          paddingLeft: 25,
        }}
      >
        <div>
          <Link to="/" style={{ textDecoration: "none" }}>
            <CustomText title="VDK" fontFamily="ClashDisplay-SemiBold" />
          </Link>
        </div>
        <div
          style={{ alignSelf: "center" }}
          onClick={() => {
            setOpen(!open);
          }}
        >
          <SearchComponent
            setOpen={setOpen}
            open={open}
            style={{ backgroundColor: colors.lightGray }}
          />
        </div>
        <div>
          <Link to="/cart">
            <div style={{ height: 10, width: 10, cursor: "pointer" }}>
              <img src={icons.shoppingCart} style={{ height: 20, width: 20 }} />
              <div
                style={{
                  width: 27,
                  display: "flex",
                  justifyContent: "flex-end",
                  height: 10,
                  position: "absolute",
                  top: 4,
                }}
              >
                <div
                  style={{
                    backgroundColor: colors.grey,
                    borderRadius: 50,
                    height: 15,
                    width: 15,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <CustomText title="1" color={colors.white} fontSize={8} />
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
      <Spacer height={20} />
      <Container>
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            flexDirection: "row",
          }}
        >
          {navbar.map((item, index) => (
            <div key={index}>
              <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                <div
                  style={{
                    fontFamily: "ClashDisplay-Regular",
                    fontSize: 12,
                    paddingRight: 15,
                  }}
                >
                  {item.name}
                </div>
                <div
                  style={{
                    width: 1,
                    height: 15,
                    backgroundColor: colors.black,
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </Container>

      <Spacer height={15} />
    </div>
  );
};
