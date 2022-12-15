import { Grid } from "@mui/material";
import React from "react";
import { images } from "../../Assets/Images";
import CartNav from "../../Components/CartComponents/CartNav";
import ColumnOne from "../../Components/CartComponents/ColumnOne";
import ColumnThree from "../../Components/CartComponents/ColumnThree";
import ColumnTwo from "../../Components/CartComponents/ColumnTwo";
import DiscountBanner from "../../Components/CartComponents/DiscountBanner";
import Footer from "../../Components/CartComponents/Footer";
import Spacer from "../../Components/Spacer";

const Cart = () => {
  return (
    <div>
      <DiscountBanner />
      <CartNav />
      {/* <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        <ColumnOne />
        <ColumnTwo />
        <Spacer width={100} />
        <ColumnThree />
      </div> */}
      <Grid container rowSpacing={{ xs: 5, sm: 2, md: 3 }} columnSpacing={{ }}>
        <Grid item xs={12} sm={12} md={2} style={{display:window.innerWidth <= 400 ? "none" : "block"}}>
          <ColumnOne />
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <ColumnTwo />
        </Grid>
        <Grid item xs={12} sm={1} md={1} >
        </Grid>
        <Grid item xs={12} sm={5} md={3}>
          <ColumnThree />
        </Grid>
      </Grid>

      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12}>
          <Footer />
        </Grid>
      </Grid>
    </div>
  );
};

export default Cart;
