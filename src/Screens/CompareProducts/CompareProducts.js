import React from "react";
import DiscountBanner from "../../Components/CartComponents/DiscountBanner";
import { Grid } from "@mui/material";
import CustomText from "../../Components/CustomText";
import Spacer from "../../Components/Spacer";
import { Search } from "@mui/icons-material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { images } from "../../Assets/Images";

const CompareProducts = () => {
  const row = {
    display: "flex",
    flexDirection: "row",
  };
  const center = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  return (
    <div>
      <DiscountBanner />
      <Grid container rowSpacing={{ xs: 5, sm: 2, md: 3 }} columnSpacing={{}}>
        <Grid
          item
          xs={12}
          sm={3}
          md={3}
          style={{
            display: window.innerWidth <= 400 ? "none" : "block",
            paddingLeft: 50,
            paddingTop: 50,
            paddingBottom: 100,
          }}
        >
          <Grid
            container
            rowSpacing={{ xs: 5, sm: 2, md: 3 }}
            columnSpacing={{}}
          >
            <Grid item xs={12} sm={12} md={12}>
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
            </Grid>
            <Grid item xs={12} sm={12} md={12} paddingLeft={5}>
              <img
                src={images.backArrow}
                alt=""
                style={{ width: 50, height: 50, objectFit: "fill" }}
              />
            </Grid>
          </Grid>
          <Grid item xs={12} sm={12} md={12} paddingLeft={7}>
            <Spacer height={50} />
            <div style={row}>
              <CustomText
                fontSize={16}
                title="PUEDE"
                textAlign={"left"}
                fontFamily={"ClashDisplay-SemiBold"}
              />
              <Spacer width={5} />
              <CustomText
                fontSize={16}
                title="INTERESARTE"
                textAlign={"left"}
              />
            </div>
          </Grid>
          {[1,2,3].map(()=>(
          <Grid item xs={12} sm={12} md={12} paddingLeft={5}>
            <Spacer height={30} />
            <div style={row}>
              <img
                src={images.banner}
                alt=""
                style={{ width: 130, height: 130, objectFit: "fill" }}
              />
              <Spacer width={10} />
              <div style={{display:"flex",flexDirection:"column",justifyContent:'space-between'}}>
                <div>
                    <CustomText
                  fontSize={14}
                  title="PRoducto"
                  textAlign={"left"}
                  fontFamily={"ClashDisplay-SemiBold"}
                />
                    
                <Spacer width={5} />
                <CustomText fontSize={14} title="Nombre" textAlign={"left"} /></div>
                <div>
                <CustomText
                  fontSize={14}
                  title="$95.00"
                  textAlign={"left"}
                />
                </div>
                
              </div>
            </div>
          </Grid>
          ))}
        </Grid>
        <Grid
          item
          xs={12}
          sm={9}
          md={9}
          style={{ paddingRight: 100, paddingTop: 50, paddingBottom: 100 }}
        >
          <div style={{ ...row, justifyContent: "space-between" }}>
            <div style={{ ...row, padding: 5, ...center }}>
              <Search />
              <input type="text" style={{ borderWidth: 0 }} />
            </div>
            <div
              style={{
                ...center,
              }}
            >
              <ShoppingCartOutlinedIcon />
              <Spacer width={50} />
              <img
                src={images.twoLines}
                alt=""
                style={{ width: 24, height: 10 }}
              />
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default CompareProducts;
