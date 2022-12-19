import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
// import FolderIcon from '@mui/icons-material/Folder';
// import RestoreIcon from '@mui/icons-material/Restore';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import LocationOnIcon from '@mui/icons-material/LocationOn';
import { MdOutlineHome } from "react-icons/md";
import { icons } from "../Assets/Icons";
import { MuiDrawer } from "./Drawer";
import { Link } from "react-router-dom";
import CustomText from "./CustomText";
import { colors } from "../utils/Colors";

export default function BottomBarNavigation({footer=true,cart=false}) {
  const [value, setValue] = React.useState("recents");
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false)

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  function Footer() {
    return (
      // <div
      //   style={{
      //     width: "100%",
      //     backgroundColor: colors.grey,
      //     display: "flex",
      //     justifyContent: "center",
      //     alignItems: "center",
      //     height: 40,
      //     position: "fixed", bottom: 55,
      //     zIndex:99
      //   }}
      // >
      //   <CustomText
      //     title={"VER TODOS LOS RESULTADOS  (25)"}
      //     fontSize={10}
      //     color={colors.white}
      //   />
      // </div>
      <div
        style={{
          width: "100%",
              backgroundColor: colors.grey,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: 40,
              position: "fixed", bottom: 55,
              zIndex:99
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
      {footer?<Footer/>:<></>}
    <div style={{ position: "absolute", display:"flex", justifyContent:"space-between", zIndex:100 }}>
      <BottomNavigation
        sx={{ width: "100%",  position: "fixed", bottom: 0 }}
        value={value}
        onChange={handleChange}
      >
        <Link Link to="/" style={{ textDecoration: "none", display:"flex", justifyContent:"center" }}>
        <BottomNavigationAction
          // label="Recents"
          value="recents"
          // icon={<MdOutlineHome style={{fontSize:20}} />}
          icon={<img src={cart?icons.shoppingCart:icons.home} style={{ height: 20, width: 20 }} />}
        />
        </Link>
        <BottomNavigationAction
          // label="Favorites"
          value="favorites"
          icon={<img src={cart?icons.headset:icons.layout} style={{ height: 20, width: 20 }} />}
        />
        <BottomNavigationAction
          // label="Nearby"
          value="nearby"
          icon={<img src={cart?icons.layout:icons.headset} style={{ height: 20, width: 20 }} />}
        />
        <BottomNavigationAction
        //   label="Folder"
          value="folder"
          icon={<img src={cart?icons.user:icons.drawer} style={{ height: cart?24:14, width: cart?24:14 }} onClick={() => setIsDrawerOpen(true)}  />}
        />
      </BottomNavigation>
      <MuiDrawer isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen} />
    </div></>
  );
}
