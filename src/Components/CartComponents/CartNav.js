import React from "react";
import { images } from "../../Assets/Images";
import CustomText from "../CustomText";
import { MuiDrawer } from "../Drawer";

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
      }}
    >
      <div>
        <div style={{display:"flex"}} >
        <CustomText title="MANU &nbsp; " fontFamily={"ClashDisplay-SemiBold"}  />
        <CustomText title="VDK"  />
        </div>
        <CustomText title="STORE" fontFamily={"ClashDisplay-SemiBold"} />
      </div>
      <div>
        <img
          onClick={() => setIsDrawerOpen(true)}
          src={images.twoLines}
          //   className="resimage"
          style={{ width: 24, height: 10, cursor:"pointer" }}
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
