import React from "react";

const DiscountBanner = () => {
  return (
    <div
      style={{
        height: "5vw",
        backgroundColor: "#686868",
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        fontSize: window.innerWidth <= 400 ? "2vw" : "1.5vw",
        textTransform: "uppercase",
        color:'#fff'
      }}
    >
      “Obtén un<b style={{marginRight:5,marginLeft:5}}>15% de descuento</b>
      por tu primera compra”
    </div>
  );
};

export default DiscountBanner;
