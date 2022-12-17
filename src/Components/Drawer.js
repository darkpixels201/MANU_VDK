import {
  Drawer,
  Box,
  Typography,
  IconButton,
  withStyles,
  MenuItem,
} from "@mui/material";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import CustomText from "./CustomText";
import { colors } from "../utils/Colors";
// import

export const MuiDrawer = (props) => {
  // const MyMenuItem = withStyles({
  //   root: {
  //     '&:hover': {
  //       backgroundColor: 'red !important',
  //       color: 'blue'
  //     }
  //   }
  // })(MenuItem)

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
      {/* <IconButton
        onClick={() => setIsDrawerOpen(true)}
        size='large'
        edge='start'
        color='inherit'
        aria-label='logo'>
        <MenuIcon />
      </IconButton> */}
      <Drawer
        anchor="right"
        open={props.isDrawerOpen}
        sx={{}}
        onClose={() => props.setIsDrawerOpen(false)}
      >
        <Box
          p={2}
          width="250px"
          role="presentation"
          textAlign="center"
          backgroundColor={colors.black}
          height={"100%"}
        >
          <List style={{ backgroundColor: colors.black }}>
            {DrawerItem.map((text, index) => (
              <ListItem key={index} disablePadding>
                <ListItemButton>
                  {/* <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon> */}
                  <ListItemText
                    primary={
                      <CustomText
                        title={text.name}
                        fontSize={15}
                        fontFamily={"ClashDisplay-SemiBold"}
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

// const WebDiv = styled.div`
//   @media only screen and (max-width: 400px) {
//     display: none;
//   }
// `;
