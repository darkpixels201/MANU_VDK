import React from "react";
import { images } from "../../Assets/Images";
import CustomText from "../CustomText";

const CartNav = () => {
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
        <CustomText title="MANU VDK" fontWeight={"bold"} />
        <CustomText title="STORE" />
      </div>
      <div>
        <img
          src={images.twoLines}
        //   className="resimage"
          style={{ width: 24, height: 10 }}
        />
      </div>
    </div>
  );
};

export default CartNav;
