import React from "react";
import {
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";

import { NavLink } from "react-router-dom";
import { useStyles } from "./HeaderStyle";

import DashboardIcon from "@material-ui/icons/Dashboard";
import BookIcon from "@material-ui/icons/Book";
import PostAddIcon from "@material-ui/icons/PostAdd";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";

import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import {useHistory} from 'react-router-dom'
import { Email } from "@material-ui/icons";




export default function SidenavData({ handleDrawerClose }) {
  let history = useHistory();
  const classes = useStyles();
  const listItemData = [
    { label: "Dashboard", link: "/dashboard", icon: <DashboardIcon style={{color:"#fff"}} /> },
    // { label: " Post", link: "/blog", icon: <BookIcon /> },
    { label: "Tax File Form", link: "/link1", icon: <PostAddIcon  style={{color:"#fff"}}/> },
   
   
    {
      label: "Notification",
      link: "/notification",
      icon: <NotificationsActiveIcon style={{color:"#fff"}} />,
    },
    {
      label: "Send Email",
      link: "/notify",
      icon: <Email style={{color:"#fff"}} />,
    },
    { label: "logout", link: "/logout", icon: <ExitToAppIcon style={{color:"#fff"}} /> },
  ];

  return (
    <List >
      {listItemData.map((item, i) => (
        <Button
          size='small'
          onClick={() => handleDrawerClose()}
          className={classes.navButton}>
          <ListItem
            exact style={{color:"#fff"}}
            key={i}
            component={NavLink}
            to={item.link}
            className={classes.navlink}
            activeClassName={classes.selectedNav}>
            <ListItemIcon >{item.icon}</ListItemIcon>
            <ListItemText>{item.label}</ListItemText>
          </ListItem>
        </Button>
        
      ))}
    </List>
  
  );
}
