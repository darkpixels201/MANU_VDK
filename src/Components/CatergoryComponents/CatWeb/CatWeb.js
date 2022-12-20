import { Grid } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { icons } from "../../../Assets/Icons";
import { images } from "../../../Assets/Images";
import { colors } from "../../../utils/Colors";
import { center, row } from "../../../utils/CommonStyles";
import DiscountBanner from "../../CartComponents/DiscountBanner";
import CustomText from "../../CustomText";
import { MuiDrawer } from "../../Drawer";
import Spacer from "../../Spacer";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Footer from "../../Footer";
import { Banner } from "./Banner";
import { CatList } from "./CatList";
import { Card, CardFooter, CardImage } from "./Card";

export const CartWeb = (props) => {
  return (
    <div style={{ padding: 0, backgroundColor: colors.white }}>
      <DiscountBanner />
      <Grid container rowSpacing={{ xs: 5, sm: 2, md: 3 }} columnSpacing={{}}>
        <Grid item xs={12} sm={12} md={12}>
          <Grid
            container
            rowSpacing={{ xs: 5, sm: 2, md: 3 }}
            columnSpacing={{}}
            style={{
              // paddingLeft: 40,
              // paddingRight: 100,
              paddingTop: 20,
            }}
          >
            <Grid item xs={12} sm={12} md={2.3} style={{ paddingLeft: 40 }}>
              <a href="*" style={{ textDecoration: "none" }}>
                <div style={row}>
                  <CustomText
                    fontSize={18}
                    title="MANU"
                    textAlign={"left"}
                    fontFamily={"ClashDisplay-SemiBold"}
                  />
                  <Spacer width={5} />
                  <CustomText fontSize={18} title="VDK" />
                </div>
                <CustomText
                  fontSize={18}
                  title="STORE"
                  textAlign={"left"}
                  fontFamily={"ClashDisplay-SemiBold"}
                />
              </a>
            </Grid>
            <Grid item xs={12} sm={12} md={9.7} style={{ paddingRight: 100 }}>
              <div
                style={{
                  ...row,
                  justifyContent: "space-between",
                  paddingLeft: 5,
                }}
              >
                <div style={{ ...row, padding: 5, ...center }}>
                  {/* <Search fontSize="small" /> */}
                  <img
                    src={icons.search}
                    alt=""
                    style={{ width: 16, height: 16 }}
                  />
                  <Spacer width={5} />
                  <input type="text" style={{ borderWidth: 0 }} />
                </div>
                <div
                  style={{
                    ...center,
                  }}
                >
                  <Link to="/cart" style={{ color: colors.black }}>
                    <ShoppingCartOutlinedIcon />
                  </Link>
                  <Spacer width={50} />
                  <img
                    onClick={() => props.setIsDrawerOpen(true)}
                    src={images.twoLines}
                    alt=""
                    style={{ width: 24, height: 10 }}
                  />
                  <MuiDrawer
                    isDrawerOpen={props.isDrawerOpen}
                    setIsDrawerOpen={props.setIsDrawerOpen}
                  />
                </div>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid container rowSpacing={{ xs: 5, sm: 2, md: 3 }} columnSpacing={{}}>
        <Grid item xs={12} sm={12} md={2.3} style={{}}>
          <div style={{}}>
            <CatList />
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={9.7} style={{ paddingRight: 90 }}>
          <div>
            <Banner />
          </div>
          <Spacer height={60} />

          <Grid
            container
            rowSpacing={{ xs: 5, sm: 2, md: 3 }}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            {[images.slide6, images.slide7, images.slide13, images.slide11].map(
              (item) => (
                <Grid item xs={6} sm={4} md={3}>
                  <CardImage image={item} />
                  <Spacer height={10} />
                  <CardFooter />
                </Grid>
              )
            )}
          </Grid>

          <Spacer height={60} />

          {/* LINE WILL COME HERE */}
          <div
            style={{
              width: "81%",
              display: "flex",
              justifyContent: "flex-end",
              position: "absolute",
            }}
          >
            <div
              style={{
                height: 1,
                position: "absolute",
                width: 458,
                backgroundColor: colors.black,
                justifyContent: "flex-start",
                // marginLeft: 220,
              }}
            ></div>
          </div>
          <Spacer height={40} />
          <Grid
            container
            rowSpacing={{ xs: 5, sm: 2, md: 3 }}
            columnSpacing={{ xs: 1, sm: 2, md: 6 }}
          >
            {[
              { image: images.slide14, footerPos: "up" },
              { image: images.slide15, footerPos: "down" },
            ].map((item) => (
              <Grid item xs={12} sm={12} md={6}>
                <Card footer={item.footerPos} image={item.image} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
      <Spacer height={100} />
      <Footer />
    </div>
  );
};
