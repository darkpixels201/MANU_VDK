import { Grid } from '@mui/material';
import React from 'react'
import CartNav from './CartNav';
import ColumnOne from './ColumnOne';
import ColumnThree from './ColumnThree';
import ColumnTwo from './ColumnTwo';
import DiscountBanner from './DiscountBanner';
import Footer from './Footer';

export  const WebCart = () => (
    <>
      <DiscountBanner />
      <CartNav />

      <Grid container rowSpacing={{ xs: 5, sm: 2, md: 3 }} columnSpacing={{}}>
        <Grid
          item
          xs={12}
          sm={12}
          md={2}
          style={{ display: window.innerWidth <= 400 ? "none" : "block" }}
        >
          <ColumnOne />
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <ColumnTwo />
        </Grid>
        <Grid item xs={12} sm={1} md={1}></Grid>
        <Grid item xs={12} sm={5} md={3}>
          <ColumnThree />
        </Grid>
      </Grid>
      

      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12}>
          <Footer />
        </Grid>
      </Grid>
    </>
  );
