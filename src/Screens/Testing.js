import React from "react";
import { Container } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { colors } from "../utils/Colors";
import { images } from "../Assets/Images";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { icons } from "../Assets/Icons";
import CustomText from "../Components/CustomText";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function Testing() {
  //   const classes = useStyles();

  const navbar = [
    {
      id: 1,
      name: "Home",
    },
    {
      id: 1,
      name: "FAJUS",
    },
    {
      id: 1,
      name: "JEANS",
    },
    {
      id: 1,
      name: "ROPA",
    },
    {
      id: 1,
      name: "SHORTS",
    },
    {
      id: 1,
      name: "NEW",
    },
    {
      id: 1,
      name: "SALE",
    },
  ];
  return (
    <div>
      <Container maxWidth="xl">
        <Box
          sx={{
            display: "flex",
            border: "none",
            boxShadow: "none",
            //   p: 1,
            //   bgcolor: "background.paper",
            //   borderRadius: 1,
          }}
        >
          <Item sx={{ flexGrow: 1, boxShadow: "none" }}>
            <div
              style={{
                display: "flex",
                // justifyContent: "flex-end",
                // alignItems: "center",
                flexDirection: "column",
                backgroundColor: "red",
              }}
            >
              <CustomText title="MANU VDK" />
              <CustomText title="STORE" />
            </div>
          </Item>
          <Item
            sx={{
              flexGrow: 1.9,
              boxShadow: "none",
              display: "flex",
              flexDirection: "row",
              backgroundColor: "yellow",
              textAlign: "center",
              justifyContent: "center",
              alignContent: "center",
              justifyContent: "flex-end",
              alignContent: "center",
              paddingRight:8
              //   alignSelf:"center",
            }}
          >
            {navbar.map((item, index) => (
              <div
                //   className={classes.header}
                key={index}
                style={{
                  display: "flex",
                  alignItems: "center",
                  paddingRight: 30,
                  alignContent: "center",
                  justifyContent: "center",
                  alignContent: "center",
                  backgroundColor: colors.lightGreen,
                }}
              >
                <CustomText
                  title={item.name}
                  fontFamily={"ClashDisplay-Regular"}
                  fontSize={15}
                />
              </div>
            ))}
          </Item>
          <Item
            sx={{
              flexGrow: 0.1,
              boxShadow: "none",
              display: "flex",
              flexDirection: "row",
              //   backgroundColor: "yellow",
              alignSelf: "center",
            }}
          >
            <img
              src={icons.search}
              style={{
                height: 15,
                width: 15,
              }}
            />
            <input
              style={{
                height: 4,
                border: "none",
              }}
              type="text"
              id="floatingInput"
            />
          </Item>
          <Item
            sx={{
              flexGrow: 1.7,
              boxShadow: "none",
              display: "flex",
              flexDirection: "row",
                backgroundColor: "yellow",
              alignSelf: "center",
            }}
          >
            <div style={{ textAlign: "center", flexDirection: "row" }}></div>
            <div style={{ height: 10, width: 10 }}>
              <img src={icons.shoppingCart} style={{ height: 20, width: 20 }} />
            </div>
          </Item>
        </Box>
      </Container>
      {/* <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} >
          <Grid item xs>
            <Item>{"Logo"}</Item>
          </Grid>
          <div item xs={6} >
            {navbar.map((item, index) => (
              <div key={index} style={{ display:"flex", flexDirection:"row"}} >
                <div>{item.name}</div>
              </div>
            ))}
            </div>

            <Grid item xs>
            <div style={{ textAlign: "center" }}>
              <img
                src={icons.search}
                style={{
                  height: 15,
                  width: 15,
                }}
              />
              <input
                style={{
                  height: 4,
                  border: "none",
                }}
                type="text"
                id="floatingInput"
              />
            </div>
            <div style={{ height: 10, width: 10 }}>
              <img src={icons.shoppingCart} style={{ height: 20, width: 20 }} />
            </div>
            </Grid>
        </Grid>
      </Box> */}
    </div>
  );
}

// const useStyles = makeStyles({
//   header: {
//     backgroundColor: "red",
//     paddingRight: "79px",
//     paddingLeft: "118px",
//     "@media (max-width: 900px)": {
//       paddingLeft: 0,
//     },
//   },
// });

export default Testing;
