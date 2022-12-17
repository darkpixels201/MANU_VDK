import { Container, fontSize } from "@mui/system";
import React, { useState } from "react";
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
    <div>
      <Spacer height={5} />
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <div>
          <CustomText title="VDK" fontFamily="ClashDisplay-SemiBold" />
        </div>
        <div
          style={{ alignSelf: "center", }}
          onClick={() => {
            setOpen(!open);
          }}
        >
          {/* <img
            src={icons.search}
            style={{
              height: 15,
              width: 15,
              alignSelf: "center",
              position: "absolute",
              paddingLeft: 5,
              alignSelf: "center",
              alignContent: "center",
              alignItems: "center",
              marginTop: 3,
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
              backgroundColor: colors.lightestGrey,
              // outline:"none"
            }}
            type="text"
            id="floatingInput"
          /> */}
          <SearchComponent setOpen={setOpen} open={open} />
        </div>
        <div>
          <div style={{ height: 10, width: 10, cursor: "pointer" }}>
            <img src={icons.shoppingCart} style={{ height: 20, width: 20 }} />
          </div>
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
