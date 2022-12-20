import { Grid } from "@mui/material";
import React, { useState } from "react";
import DiscountBanner from "../../Components/CartComponents/DiscountBanner";
import CustomText from "../../Components/CustomText";
import Spacer from "../../Components/Spacer";
import { Label, Search, Spa } from "@mui/icons-material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { images } from "../../Assets/Images";
import { colors } from "../../utils/Colors";
import { icons } from "../../Assets/Icons";
import { Autocomplete, TextField } from "@mui/material";

import CategoryMobile from "../../Components/CatergoryComponents/CategoryMobile";

import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { Link } from "react-router-dom";
import { MuiDrawer } from "../../Components/Drawer";
import BottomBarNavigation from "../../Components/BottomNavigation";
import "./style.css";
import { DropdownCom } from "../../Components/DropdownCom";
import "../../Assets/Style/font.css";
import { FilledCircleCom } from "../../Components/FilledCircleCom";
import { CartWeb } from "../../Components/CatergoryComponents/CatWeb/CatWeb";

export const Categories = () => {
  const [count, setCount] = useState(1);

  const customer = ["XS", "S", "M", "L", "Xl", "XXl", "XXl"];

  const [currentcustomer, setCurrentCustomer] = useState(null);

  const [open, setOpen] = useState(false);

  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

  
  const row = {
    display: "flex",
    flexDirection: "row",
  };
  const center = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  
  
  const Footer = () => (
    <Grid container rowSpacing={{ xs: 5, sm: 2, md: 3 }} columnSpacing={{}}>
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        style={{
          backgroundColor: "#343434",
          paddingRight: 190,
          paddingLeft: 240,
          paddingTop: 100,
          paddingBottom: 100,
        }}
      >
        <CustomText
          fontSize={16}
          title="CONTACTO"
          textAlign={"left"}
          color={colors.white}
        />
        <CustomText
          fontSize={16}
          title="+1 321 450 9305"
          textAlign={"left"}
          color={colors.white}
        />
        <Spacer height={20} />
        <div
          style={{
            ...row,
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <CustomText
            fontSize={12}
            title="Privacy Policy&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Terms And Conditions&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Returns & Exchange "
            textAlign={"left"}
            color={colors.white}
          />

          <a href="*" style={{textDecoration:"none"}}>
            <div style={row}>
              <CustomText
                fontSize={18}
                title="MANU"
                fontFamily={"ClashDisplay-SemiBold"}
                color={colors.white}
              />
              <Spacer width={5} />
              <CustomText fontSize={18} title="VDK" color={colors.white} />
            </div>
            <CustomText
              fontSize={18}
              title="STORE"
              fontFamily={"ClashDisplay-SemiBold"}
              color={colors.white}
            />
          </a>
        </div>
      </Grid>
    </Grid>
  );

  

  

  
  return (
    <div>
      {window.innerWidth <= 480 ? (
        <CategoryMobile />
      ) : (
        <CartWeb isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen} />
      )}
    </div>
  );
};
