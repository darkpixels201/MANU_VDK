import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { icons } from "../Assets/Icons";
import { MuiDrawer } from "./Drawer";
import { Link } from "react-router-dom";
import CustomText from "./CustomText";
import { colors } from "../utils/Colors";

export default function BottomBarNavigation({ footer = true, cart = false }) {
  const [value, setValue] = React.useState("recents");
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  function Footer() {
    return (
      <div
        style={{
          width: "100%",
          backgroundColor: colors.green,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: 40,
          position: "fixed",
          bottom: 55,
          zIndex: 99,
        }}
      >
        <CustomText title=" “Obtén un " fontSize={12} color={colors.white} />
        <CustomText
          title="15% de descuento"
          fontSize={12}
          color={colors.white}
          fontFamily="ClashDisplay-SemiBold"
        />
        <CustomText
          title="por tu primera compra”"
          fontSize={12}
          color={colors.white}
        />
      </div>
    );
  }
  return (
    <>
      {footer ? <Footer /> : <></>}
      <div
        style={{
          position: "absolute",
          display: "flex",
          justifyContent: "space-between",
          zIndex: 100,
        }}
      >
        <BottomNavigation
          sx={{ width: "100%", position: "fixed", bottom: 0 }}
          value={value}
          onChange={handleChange}
        >
          <Link
            // Link
            to="/"
            style={{
              textDecoration: "none",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <BottomNavigationAction
              value="recents"
              icon={
                <img
                  src={cart ? icons.shoppingCart : icons.home}
                  style={{ height: 20, width: 20 }}
                />
              }
            />
          </Link>
          <BottomNavigationAction
            value="favorites"
            icon={
              <img
                src={cart ? icons.headset : icons.layout}
                style={{ height: 20, width: 20 }}
              />
            }
          />
          <BottomNavigationAction
            value="nearby"
            icon={
              <img
                src={cart ? icons.layout : icons.headset}
                style={{ height: 20, width: 20 }}
              />
            }
          />
          <BottomNavigationAction
            value="folder"
            icon={
              <img
                src={cart ? icons.user : icons.drawer}
                style={{ height: cart ? 24 : 14, width: cart ? 24 : 14 }}
                onClick={() => setIsDrawerOpen(true)}
              />
            }
          />
        </BottomNavigation>
        <MuiDrawer
          isDrawerOpen={isDrawerOpen}
          setIsDrawerOpen={setIsDrawerOpen}
        />
      </div>
    </>
  );
}
