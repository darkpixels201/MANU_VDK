import React from "react";
import { images } from "../../Assets/Images";
import { colors } from "../../utils/Colors";
import CustomButton from "../CustomButton";
import CustomText from "../CustomText";
import Spacer from "../Spacer";
import "../../Assets/Style/font.css";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import "../../Assets/Style/Body.css";
import BodySwiper from "./BodySwiper";
import ToggleSwitch from "../ToggleSwitch";
import MoveToTop from "../MoveToTop";
import { Link } from "react-router-dom";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function BodyWeb(props) {
  return (
    <div>
      <MoveToTop />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          position: "relative",
          flexWrap: "wrap",
          width: "auto",
          backgroundColor: colors.white,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: 85,
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
          <div
            style={{
              marginTop: 100,
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
            <Link to="/compareproducts" style={{ textDecoration: "none" }}>
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
                textDecoration={"underline"}
              />
            </Link>
          </div>
          <div className="none" >
            <Spacer height={170} />
            <CustomText title=". Pagos seguros" fontSize={15} />
            <Spacer height={12} />
            <CustomText title=". Envio a todo US" fontSize={15} />
            <Spacer height={12} />
            <CustomText title=". Atención personalizada" fontSize={15} />
            <Spacer height={12} />
            <ToggleSwitch on={props.on} setOn={props.setOn} />
          </div>
        </div>

        <div
          style={{
            width: "auto",
            height: "90vh",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img
            src={images.homeBanner}
            className="resimage"
            style={{ width: "auto", height: "90vh" }}
          />
          <div
            style={{
              position: "absolute",
              alignSelf: "flex-end",
              justifyContent: "center",
              alignItems: "center",
            }}
            // className="none"
          >
            <CustomText
              title="Shape Wear"
              color={colors.white}
              fontSize={118}
              fontFamily={"ClashDisplay-Bold"}
              marginBottom={20}
            />
          </div>
          <div
            style={{
              position: "absolute",
              alignSelf: "flex-end",
              display: "flex",
              justifyContent: "flex-end",
              marginLeft: 30,
              width: 700,
            }}
            className="none"
          >
            <CustomText
              title="For EveryDay Use"
              color={colors.white}
              fontSize={30}
              marginBottom={20}
            />
          </div>
        </div>
      </div>
      <BodySwiper on={props.on} setOn={props.setOn} />
    </div>
  );
}

export default BodyWeb;
