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

export default function BottomBarNavigation() {
  const [value, setValue] = React.useState("recents");
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false)

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
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
          icon={<img src={icons.home} style={{ height: 20, width: 20 }} />}
        />
        </Link>
        <BottomNavigationAction
          // label="Favorites"
          value="favorites"
          icon={<img src={icons.layout} style={{ height: 20, width: 20 }} />}
        />
        <BottomNavigationAction
          // label="Nearby"
          value="nearby"
          icon={<img src={icons.headset} style={{ height: 20, width: 20 }} />}
        />
        <BottomNavigationAction
        //   label="Folder"
          value="folder"
          icon={<img src={icons.drawer} style={{ height: 14, width: 14 }} onClick={() => setIsDrawerOpen(true)}  />}
        />
      </BottomNavigation>
      <MuiDrawer isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen} />
    </div>
  );
}
