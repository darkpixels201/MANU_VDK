import { ListItem, Slider } from "@mui/material";
import React, { useState } from "react";
import { icons } from "../../../Assets/Icons";
import { colors } from "../../../utils/Colors";
import { row } from "../../../utils/CommonStyles";
import Spacer from "../../Spacer";
import "../../../Assets/Style/style.css";
import "../../../Assets/Style/font.css";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import CustomText from "../../CustomText";

export const CatList = (props) => {
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  const [count, setCount] = useState(1);

  const FilledCircle = [
    {
      id: 1,
      bgcolor: colors.lightGray,
    },
    {
      id: 2,
      bgcolor: colors.black,
    },
    {
      id: 3,
      bgcolor: colors.white,
    },
  ];
  return (
    <div style={{}}>
      <Spacer height={100} />
      <CatItem label={"FILTROS"} icon={true} iconPath={icons.downArrowLine} />
      <Spacer height={30} />
      <ListItemButton
        sx={{
          width: "50%",
          ml: 4,
        }}
        onClick={handleClick}
      >
        <ListItemText
          disableTypography={true}
          primary="Color"
          sx={{ fontFamily: "ClashDisplay-Regular" }}
        />
        <img src={icons.plus} alt="" style={{ height: 10 }} />
      </ListItemButton>

      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {/* <ListItemButton sx={{ pl: 7, fontSize: 13 }}>
            <ListItemText
              disableTypography={true}
              sx={{ fontFamily: "ClashDisplay-Regular" }}
              primary="TALLA"
            />
          </ListItemButton> */}
          {FilledCircle.map((circle, index) => (
            <ListItemButton
              sx={{ pl: 7, fontSize: 13 }}
              onClick={() => {
                setCount(circle.id);
              }}
            >
              <div
                key={index}
                style={{
                  paddingLeft: 10,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {count == circle.id ? (
                  <div
                    style={{
                      height: 22,
                      width: 22,
                      borderRadius: 50,
                      borderColor: props.on ? colors.pureWite : colors.black,
                      borderStyle: "solid",
                      borderWidth: 1,
                      display: "flex",
                      textAlign: "center",
                      justifyContent: "center",
                      alignItems: "center",
                      alignSelf: "center",
                      cursor: "pointer",
                      marginInline: -2,
                    }}
                  >
                    <div
                      style={{
                        height: 15,
                        width: 15,
                        borderRadius: 50,
                        borderStyle: "solid",
                        borderColor: colors.black,
                        borderWidth: 0.2,
                        backgroundColor: circle.bgcolor,
                        // marginRight:5
                      }}
                    ></div>
                  </div>
                ) : (
                  <div
                    style={{
                      height: 18,
                      width: 18,
                      borderRadius: 50,
                      borderStyle: "solid",
                      borderColor: props.on ? colors.pureWite : colors.black,
                      borderWidth: 0.2,
                      backgroundColor: circle.bgcolor,
                      marginTop: 3,
                      cursor: "pointer",
                    }}
                  ></div>
                )}
              </div>
            </ListItemButton>
          ))}

        </List>
      </Collapse>
      <Spacer height={30} />
      <CatItem label={"TALLA"} paddingLeft={52} />
      <Spacer height={30} />
      <CatItem label={"INFO 3"} />
      <Spacer height={40} />
      <CatItem label={"INFO 4"} />
      <Spacer height={40} />
      <CatItem label={"INFO 5"} />
      <Spacer height={40} />
      <CatItem label={"PRECIO "} />
      <Spacer height={40} />

      {/* <ListItemButton
        sx={{
          width: "50%",
          ml: 6,
        }}
        onClick={handleClick}
      >
        <ListItemText primary="Color" />
        <img src={icons.plus} alt="" style={{ height: 10 }} />
      </ListItemButton>

      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText primary="Starred" />
          </ListItemButton>
        </List>
      </Collapse> */}

      <div style={{ paddingLeft: 60, paddingRight: 60 }}>
        <Slider
          size="small"
          defaultValue={0}
          aria-label="Small"
          // color="secondary"
          valueLabelDisplay="auto"
          sx={{fontFamily: "ClashDisplay-Regular"}}
        />
        <div style={{ ...row, justifyContent: "space-between" }}>
          <CustomText title="10" fontSize={13} />
          <CustomText title="100" fontSize={13} />
          {/* <span>10</span>
          <span>100</span> */}
        </div>
      </div>
      {/* <CustomText fontSize={18} title="FILTROS" textAlign={"left"} /> */}
    </div>
  );
};

const CatItem = ({ label, icon, iconPath, paddingLeft }) => (
  <div
    style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      width: "60%",
    }}
  >
    <div
      style={{
        color: colors.black,
        textDecoration: "none",
        paddingLeft: paddingLeft || 50,
        cursor: "pointer",
        fontFamily: "ClashDisplay-Regular",
      }}
    >
      {label}
    </div>
    {icon ? <img src={iconPath} alt="" style={{ height: 10 }} /> : <></>}
  </div>
);
