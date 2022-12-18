import { Drawer, Box } from "@mui/material";
import { useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import CustomText from "./CustomText";
import { colors } from "../utils/Colors";
import "../Assets/Style/Drawer.css";
import { icons } from "../Assets/Icons";
import Spacer from "./Spacer";

export const MuiDrawer = (props) => {
  const DrawerItem = [
    {
      id: 1,
      name: "HOME",
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
          <Spacer height={30} />
          <List style={{ backgroundColor: colors.black }}>
            {DrawerItem.map((text, index) => (
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
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};
