import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
// import FolderIcon from '@mui/icons-material/Folder';
// import RestoreIcon from '@mui/icons-material/Restore';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import LocationOnIcon from '@mui/icons-material/LocationOn';
import { MdOutlineHome } from "react-icons/md";
import { icons } from "../Assets/Icons";

export default function BottomBarNavigation() {
  const [value, setValue] = React.useState("recents");

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
        <BottomNavigationAction
          // label="Recents"
          value="recents"
          // icon={<MdOutlineHome style={{fontSize:20}} />}
          icon={<img src={icons.home} style={{ height: 20, width: 20 }} />}
        />
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
          icon={<img src={icons.drawer} style={{ height: 14, width: 14 }} />}
        />
      </BottomNavigation>
    </div>
  );
}
