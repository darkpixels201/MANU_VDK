import React from "react";
import "../Assets/Style/font.css";
import { colors } from "../utils/Colors";

function CustomButton(props) {
  return (
    <div
      style={{
        backgroundColor: props.backgroundColor,
        display: props.display || "flex",
        width: props.width || "100%",
        height: props.height,
        borderColor: props.borderColor,
        borderRadius: props.borderRadius || 8,
        borderWidth: props.borderWidth,
        opacity: props.opacity,
        alignItems: props.alignItems || "center",
        alignSelf: props.alignSelf || "center",
        justifyContent: props.justifyContent,
        marginTop: props.marginTop,
        shadowColor: props.shadowColor || "black",
        shadowRadius: props.shadowRadius || 8,
        marginBottom: props.marginBottom,
        marginHorizontal: props.marginHorizontal,
        paddingVertical: props.paddingVertical || 12,
        fontFamily: props.fontFamily || "ClashDisplay-Regular",
        cursor: "pointer",
        textDecoration: props.textDecoration,
        textDecorationColor: colors.white,
      }}
      onClick={props.onClick}
    >
      <div style={{ flexDirection: "row", paddingHorizontal: 20 }}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          {props.icon ? props.icon : null}

          <div style={{ color: "white", fontSize: props.fontSize || 15 }}>
            {props.title}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomButton;
