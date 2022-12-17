import React from "react";

const ButtonAnchor = ({
  title,
  backgroundColor,
  color,
  width,
  justifyContent,
  alignItems,
  display,
  textDecoration,
  borderColor,
  borderWidth,
}) => {
  return (
    <a
      href=""
      style={{
        backgroundColor: backgroundColor,
        color: color,
        width: width,
        justifyContent: justifyContent,
        alignItems: alignItems,
        display: display,
        textDecoration: textDecoration,
        borderColor: borderColor,
        borderWidth: borderWidth,
      }}
    >
      {title}
    </a>
  );
};

export default ButtonAnchor;
