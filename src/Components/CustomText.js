import React from "react";
import '../Assets/Style/font.css'

function CustomText({...props}) {
  return (
    <div onClick={props.onClick} disabled={!props.onClick} >
      <div>
        <div
          style={{
            color: props.color || "black",
            fontSize: props.fontSize || 20,
            margin: props.margin,
            marginTop: props.margin,
            marginBottom: props.marginBottom,
            marginLeft: props.marginLeft,
            marginRight: props.marginRight,
            paddingLeft:props.paddingLeft,
            alignSelf: props.alignSelf || "flex-start",
            fontWeight: props.fontWeight,
            fontStyle: props.fontStyle,
            textAlign: props.textAlign,
            fontFamily: props.fontFamily || "ClashDisplay-Regular",
            textAlign: props.textAlign,
            lineHeight:props.lineHeight,
            float: props.float,
            listStyle: props.listStyle,
            position: props.position,
            left: props.left,
          }}
        >
          {props.title}
          {props.value}
        </div>
      </div>
    </div>
  );
}

export default CustomText;
