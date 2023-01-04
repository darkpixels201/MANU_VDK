import React from "react";
import { colors } from "../../utils/Colors";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import CustomText from "../CustomText";
import "../../Assets/Style/Navbar.css";
import { NavbarMobile } from "./HomeMobile/NavbarMobile";
import { NavWeb } from "./HomeWeb/NavWeb";
// import { NavbarMobile } from "../../Screens/Home/Molecules/NavbarMobile";
// import { NavWeb } from "../../Screens/Home/Molecules/NavWeb";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function Navbar() {
  return (
    <div style={{position:"sticky", width:"100%", zIndex:110, top:0}} >
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
    </div>
  );
}

export default Navbar;
