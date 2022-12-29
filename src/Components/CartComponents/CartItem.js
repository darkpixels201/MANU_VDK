import { Close } from "@mui/icons-material";
import React, { useState } from "react";
import { row } from "../../utils/CommonStyles";
import CustomText from "../CustomText";
import Spacer from "../Spacer";

export const CartItem = ({ image }) => {
  const [counter, setCounter] = useState(1);
  const addOne = (counter, setCounter) => {
    setCounter(counter + 1);
  };
  const minusOne = (counter, setCounter) => {
    if (counter > 1) setCounter(counter - 1);
  };

  return (
    <>
      <Spacer height={20} />
      <div style={{ width: "100%" }}>
        <div
          style={{
            backgroundColor: "#000",
            color: "#fff",
            height: window.innerWidth<=1000?25:"2vw",
            width: window.innerWidth<=1000?25:"2vw",
            borderRadius: "10vw",
            position: "absolute",
            top: 10,
            left: 10,
            zIndex: 99,
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
          }}
        >
          <Close fontSize="small" />
        </div>
        <img src={image} style={{ width: "100%" }} />
        <div>
          <Spacer height={20} />
          <div style={{ display: "flex", textAlign: "left" }}>
            <span>
              <b style={{ fontFamily: "ClashDisplay-Bold" }}>
                Brasier de Banda Ancha{" "}
              </b>
              para Soporte en Espalda
            </span>
          </div>
          <Spacer height={20} />
          <CustomText
            fontSize={16}
            title="Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Curabitur congue tellus sem, id porttitor elit fermentum eu."
            textAlign={"left"}
          />
          <Spacer height={50} />
          <div
            style={{
              flexDirection: "row",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <CustomText fontSize={16} title="$95.00" />
            <div style={{ ...row, alignItems: "center" }}>
              <div
                style={{
                  cursor: "pointer",
                  height: 10,
                  width: 20,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <CustomText
                  title="-"
                  fontSize={20}
                  onClick={() => minusOne(counter, setCounter)}
                />
              </div>
              <Spacer width={20} />
              <CustomText title={counter} fontSize={20} />

              <Spacer width={20} />
              <div
                style={{
                  cursor: "pointer",
                  height: 10,
                  width: 20,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                onClick={() => addOne(counter, setCounter)}
              >
                <CustomText title="+" fontSize={20} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
