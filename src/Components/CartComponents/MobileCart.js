import { Close } from "@mui/icons-material";
import React, { useState } from "react";
import Draggable from "react-draggable";
import { colors } from "../../utils/Colors";
import { row } from "../../utils/CommonStyles";
import BottomBarNavigation from "../BottomNavigation";
import CustomText from "../CustomText";
import Spacer from "../Spacer";
import { MobileCartItem } from "./MobileCartItem";

export const MobileCart = () => {
  const [cartList, setCartList] = useState([1, 2, 3, 4, 5]);
  return (
    <div style={{ backgroundColor: colors.lightGreen }}>
      <div
        style={{
          paddingRight: 20,
          paddingLeft: 20,
          paddingTop: 10,
          height: window.innerHeight / 1.8,
        }}
      >
        <div
          style={{
            ...row,
            justifyContent: "space-between",
          }}
        >
          <CustomText
            title="VDK"
            fontSize={16}
            fontFamily={"ClashDisplay-SemiBold"}
          />
          {/* <Link to="/"> */}
          <a onClick={() => {}}>
            <Close />
          </a>
          {/* </Link> */}
        </div>
        <Spacer height={20} />
        <div
          style={{
            ...row,
          }}
        >
          <CustomText
            title="MY"
            fontSize={26}
            fontFamily={"ClashDisplay-SemiBold"}
            color={colors.purple}
          />
          <Spacer width={5} />
          <CustomText title="CART" fontSize={26} />
        </div>
        <Spacer height={30} />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            flexWrap: "wrap",
            // margin: "4px 4px",
            // padding: 4,
            // backgroundColor: "green",
            width: "100%",
            height: "90%",
            overflowX: "hidden",
            overflowY: "auto",
            textAlign: "justify",
          }}
        >
          {cartList.map((index) => (
            <>
              <MobileCartItem
                key={index}
                onPressClose={() => {
                  let a= cartList.find((i) => i === index);
                  let newList =cartList.filter((i)=> i!==a);
                  console.log(newList)
                  setCartList(newList);
                }}
              />
              {/* <Spacer height={30} /> */}
            </>
          ))}
        </div>
      </div>

      <Draggable
        cancel=".cancelDragEffect"
        bounds={{ top: -1, left: -100, right: 100, bottom: 110 }}
        axis="y"
        // defaultPosition={{ x: 0, y: 100 }}
        // position={'absolute'}
        // grid={[25, 25]}
        // scale={2}
      >
        <div
          style={{
            width: "100%",
            height: window.innerHeight / 1.8,
            backgroundColor: colors.purple,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
          }}
        >
          <Spacer height={30} />
          <div
            style={{
              height: 4,
              backgroundColor: colors.green,
              width: 70,
              margin: "auto",
              borderRadius: 100,
            }}
          />
          <Spacer height={10} />
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              paddingRight: 20,
              paddingLeft: 20,
            }}
          >
            <CustomText title="SUBTOTAL " fontSize={16} color={colors.white} />
            <CustomText title="$95.00 " fontSize={16} color={colors.white} />
          </div>
          <Spacer height={20} />
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              paddingRight: 20,
              paddingLeft: 20,
            }}
          >
            <CustomText title="DISCOUNTS " fontSize={16} color={colors.grey} />
            <CustomText title="$95.00 " fontSize={16} color={colors.grey} />
          </div>
          <Spacer height={10} />
          <div
            style={{
              height: 2,
              backgroundColor: colors.green,
              width: "100%",
              margin: "auto",
              marginLeft: 20,
            }}
          />
          <Spacer height={20} />
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              paddingRight: 20,
              paddingLeft: 20,
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "row",
              }}
            >
              <CustomText
                title="TOTAL "
                fontSize={16}
                color={colors.white}
                fontFamily={"ClashDisplay-SemiBold"}
              />
              <Spacer width={2} />
              <CustomText title="FINAL " fontSize={16} color={colors.white} />
            </div>
            <CustomText title="$95.00 " fontSize={16} color={colors.white} />
          </div>
          <Spacer height={40} />
          <div
            style={{
              flexDirection: "row",
              display: "flex",
              paddingRight: 20,
              paddingLeft: 20,
            }}
          >
            <input
              className="cancelDragEffect"
              style={{
                width: "75%",
                padding: 5,
                backgroundColor: colors.purple,
                color: colors.green,
                borderWidth: 2,
                borderColor: colors.green,
                borderStyle: "solid",
              }}
              placeholder="Enter Coupon Code here"
            />
            <a
              className="cancelDragEffect"
              href=""
              style={{
                backgroundColor: colors.green,
                color: colors.white,
                width: "25%",
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
                textDecoration: "none",
              }}
            >
              Apply
            </a>
          </div>
          <Spacer height={40} />
          <div
            style={{
              flexDirection: "row",
              display: "flex",
              paddingRight: 20,
              paddingLeft: 20,
              justifyContent: "space-between",
            }}
          >
            <a
              className="cancelDragEffect"
              href=""
              style={{
                backgroundColor: colors.purple,
                color: "#fff",
                borderWidth: 2,
                borderColor: colors.green,
                borderStyle: "solid",
                width: "35%",
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
                paddingRight: 10,
                paddingLeft: 10,
                paddingTop: 10,
                paddingBottom: 10,
                textDecoration: "none",
              }}
            >
              CONTINUE SHIP
            </a>
            <a
              className="cancelDragEffect"
              href=""
              style={{
                backgroundColor: colors.green,
                color: "#fff",
                width: "35%",
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
                paddingRight: 20,
                paddingLeft: 20,
                paddingTop: 10,
                paddingBottom: 10,
                textDecoration: "none",
              }}
            >
              CHECKOUT
            </a>
          </div>
          <Spacer height={30} />
        </div>
      </Draggable>

      <BottomBarNavigation footer={false} cart={true} />
    </div>
  );
};
