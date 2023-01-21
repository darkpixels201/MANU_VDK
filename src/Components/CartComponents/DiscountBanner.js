import React from "react";
import { colors } from "../../utils/Colors";

const DiscountBanner = () => {
  return (
    <div
      style={{
        height: "3vw",
        backgroundColor: colors.colorC,
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        fontSize: window.innerWidth <= 400 ? "1vw" : "1vw",
        textTransform: "uppercase",
        color: "#fff",
        position: "sticky",
        width: "100%",
        zIndex: 110,
        top: 0,
      }}
    >
      “Obtén un<b style={{ marginRight: 5, marginLeft: 5 }}>15% de descuento</b>
      por tu primera compra”
    </div>
  );
};

export default DiscountBanner;
