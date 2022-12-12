import React from "react";
import { images } from "../Assets/Images";
import { colors } from "../utils/Colors";
import CustomButton from "./CustomButton";
import CustomText from "./CustomText";
import Spacer from "./Spacer";
import "../Assets/Style/font.css";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import "../Assets/Style/Body.css";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function Body() {
  return (
    <div>
      <div
        style={{
          display: "flex",
          // flexDirection: "row",
          justifyContent: "center",
          position: "relative",
            flexWrap:"wrap",
            width: "auto",

            // backgroundColor:"red",
          // left:140
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: 85,
            
            // width: "auto",
            // justifyContent:"end"
            // left:200
          }}
          className="displaying"
        >
          <div>
          <CustomText
            title="THE GREATEST"
            fontFamily={"ClashDisplay-Regular"}
          />
          </div>
          <div style={{ position: "absolute" }} className="colorWhite">
            <CustomText
              title="BODY"
              style={{ position: "fixed" }}
              fontSize={100}
              fontFamily={"ClashDisplay-Bold"}
            />
          </div>
          {/* <text style={{fontSize:120,}}>Body</text> */}
          <div
            style={{
              marginTop: 100,
              // display: "flex",
              // justifyContent: "flex-start",
              // alignSelf: "flex-end",
            }}
          >
            <CustomText
              title="SUIT"
              fontSize={100}
              lineHeight={0.7}
              fontFamily={"ClashDisplay-Bold"}
            />
          </div>
          <Spacer height={130} />
          <div>
            <CustomButton
              title="SHOP NOW"
              fontSize={20}
              justifyContent={"center"}
              borderRadius={"0"}
              width={150}
              height={50}
              color={colors.white}
              backgroundColor={colors.grey}
              fontFamily={"ClashDisplay-Light"}
            />
          </div>
          <div>
          <Spacer height={170} />
          <CustomText title=". Pagos seguros" fontSize={15} />
          <Spacer height={12} />
          <CustomText title=". Envio a todo US" fontSize={15} />
          <Spacer height={12} />
          <CustomText title=". Atención personalizada" fontSize={15} />
          <Spacer height={12} />
          </div>
        </div>


        <div style={{ width:"auto", height: "90vh", display:"flex", justifyContent:"center" }}>
          <img
            src={images.banner}
            className="resimage"
            style={{ width: 'auto', height: "90vh" }}
          />
        </div>
        <div style={{ position: "absolute", alignSelf: "flex-end", left: 550 }} className="none">
          <CustomText
            title="Shape Wear"
            color={colors.white}
            fontSize={118}
            fontFamily={"ClashDisplay-Bold"}
            // justifyContent={"flex-end"}
            
          />
        </div>
      </div>
    </div>
  );
}

export default Body;
