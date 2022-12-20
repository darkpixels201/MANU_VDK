import { Drawer, Box } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import CustomText from "./CustomText";
import { colors } from "../utils/Colors";
import "../Assets/Style/Drawer.css";
import { icons } from "../Assets/Icons";
import Spacer from "./Spacer";
import { Link } from "react-router-dom";

export const MuiDrawer = (props) => {
  const DrawerItem = [
    {
      id: 1,
      name: "HOME",
      link: "/",
    },
    {
      id: 2,
      name: "FAJAS",
    },
    {
      id: 3,
      name: "JEANS",
    },
    {
      id: 4,
      name: "ROPA",
    },
    {
      id: 5,
      name: "SHORTS",
    },
    {
      id: 6,
      name: "NEW",
    },
    {
      id: 7,
      name: "SALE",
    },
  ];

  return (
    <>
      <Drawer
        anchor="right"
        open={props.isDrawerOpen}
        sx={{}}
        onClose={() => props.setIsDrawerOpen(false)}
      >
        <Box
          p={2}
          role="presentation"
          textAlign="center"
          backgroundColor={colors.black}
          height={"100%"}
          padding={0}
          width={350}
        >
          {window.innerWidth <= 700 ? (
            <MobileTop />
          ) : (
            <WebTop setIsDrawerOpen={props.setIsDrawerOpen} />
          )}
          <Spacer height={30} />
          <List style={{ backgroundColor: colors.black }}>
            {DrawerItem.map((text, index) => (
              <Link to={text.link} style={{ textDecoration: "none" }}>
                <ListItem
                  className="main mainwidth"
                  style={{ paddingLeft: 40 }}
                  key={index}
                  disablePadding
                >
                  <ListItemButton>
                    <ListItemText
                      primary={
                        <CustomText
                          title={text.name}
                          fontSize={15}
                          color={colors.white}
                        />
                      }
                    />
                  </ListItemButton>
                </ListItem>
              </Link>
            ))}

            {window.innerWidth <= 775 ? <Footer setIsDrawerOpen={props.setIsDrawerOpen} /> : ""}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

const MobileTop = () => (
  <>
  <Spacer height={20} />
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        width: "auto",
        paddingRight: 50,
        paddingLeft: 50,
      }}
    >
      <div>
        <CustomText
          title="VDK"
          color={colors.white}
        />
      </div>
      <div>
        <Link to="/cart">
          <div style={{ height: 25, width: 25, cursor: "pointer",  }}>
            <img src={icons.cartWhite} style={{ height: 20, width: 20,  }} />
            <div
                style={{
                  backgroundColor: colors.lightGray,
                  borderRadius: 50,
                  height: 17,
                  width: 17,
                  display:"flex",
                  alignItems:"center",
                  justifyContent:"center",
                  position:"absolute",
                  // margibBottom:20,
                  top:12,
                  left:292
                }}
              >
                <CustomText
                  title="1"
                  color={colors.white}
                  fontSize={10}
                />
              </div>
          </div>
        </Link>
      </div>
    </div>
  </>
);

      // Web Footer

const WebTop = (props) => (
  <div>
    <div
      style={{
        marginTop: 65,
        display: "flex",
        paddingRight: 60,
        justifyContent: "flex-end",
        cursor: "pointer",
      }}
    >
      <img
        src={icons.cross}
        height={13}
        width={13}
        color={colors.black}
        onClick={() => props.setIsDrawerOpen(false)}
      />
    </div>
  </div>
);


          // Mobile Footer

const Footer = (props) => (
  <>
    <Spacer height={200} />
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column" }}>
        <CustomText
          title="Privacy Policy"
          color={colors.white}
          fontSize={12}
          alignSelf="flex-start"
          textDecoration={"underline"}
        />
        <Spacer height={10} />
        <CustomText
          title="Terms And Conditions "
          color={colors.white}
          fontSize={12}
          textDecoration={"underline"}
        />
        <Spacer height={10} />
        <CustomText
          title="Returns & Exchange "
          color={colors.white}
          fontSize={12}
          textDecoration={"underline"}
        />
      </div>
      <div>
        <img src={icons.headset} height={20} width={20} />
      </div>
    </div>
    <Spacer height={60} />
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column" }}>
        <CustomText
          title="Ventadirekta © 2021. All Rights Reserved"
          color={colors.white}
          fontSize={10}
        />
      </div>
      <div>
        <img onClick={() => props.setIsDrawerOpen(false)} src={icons.cross} height={13} width={13} />
      </div>
    </div>
  </>
);
