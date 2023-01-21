import React from "react";
import { Link } from "react-router-dom";
import { icons } from "../../Assets/Icons";
import { images } from "../../Assets/Images";
import { colors } from "../../utils/Colors";
import CustomText from "../CustomText";
import { MuiDrawer } from "../Drawer";
import Spacer from "../Spacer";

const CartNav = () => {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        paddingLeft: 56,
        paddingRight: 56,
        paddingTop: 15,
        paddingBottom: 15,
        position: "sticky",
            // width: "100%",
            zIndex: 110,
            top: 40,
            backgroundColor: colors.lightGreen,
      }}
    >
      <Link to="/" style={{textDecoration:"none"}} >
        <div style={{display:"flex"}} >
        <CustomText title="MANU &nbsp; " fontFamily={"ClashDisplay-SemiBold"}  />
        <CustomText title="VDK"  />
        </div>
        <CustomText title="STORE" fontFamily={"ClashDisplay-SemiBold"} />
      </Link>
      <div style={{display:"flex",flexDirection:"column",justifyContent:"center", cursor:"pointer"}}>
        <img
          onClick={() => setIsDrawerOpen(true)}
          src={icons.line}
          //   className="resimage"
          style={{ width: 24, height: 3, }}
        />
        <Spacer height={8}/>
        <img
          onClick={() => setIsDrawerOpen(true)}
          src={icons.line}
          //   className="resimage"
          style={{ width: 24, height: 3 }}
        />
      </div>
      <MuiDrawer
        isDrawerOpen={isDrawerOpen}
        setIsDrawerOpen={setIsDrawerOpen}
      />
    </div>
  );
};

export default CartNav;
