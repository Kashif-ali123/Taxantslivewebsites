import React, { Fragment } from "react";
import { Box } from "@material-ui/core";
import { Route, Switch } from "react-router-dom";
import { useStyles } from "./HeaderStyle";
import NavbarComponent from "./NavbarComponent";
import Sidenav from "./Sidenav";
import Notification from "./ActionTab/Notification";
import BlogPost from "../BodyComponent/BlogPost";
import Dashboard from "../BodyComponent/Dashboard/Dashboard";
import Notify from "../BodyComponent/Notify";
import Link1 from "../BodyComponent/Link1";
import {Redirect} from 'react-router-dom'
import { useHistory } from "react-router-dom";



export default function HearderComponent() {
  let history = useHistory();
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
    console.log("Jai siya ram");
  };
  const handleDrawerClose = () => {
    setMobileOpen(false);
    console.log("prem se bolo Jai siya ram");
  };
  return (
    <Fragment>
      <NavbarComponent handleDrawerToggle={handleDrawerToggle} />
      <Sidenav 
        mobileOpen={mobileOpen}
        handleDrawerClose={handleDrawerClose}
        handleDrawerToggle={handleDrawerToggle}
      />
      <Box className={classes.wrapper}>
        <Switch>
          <Route exact path='/dashboard' render={() => <Dashboard />} />
          {/* <Route exact path='/blog' render={() => <BlogPost />} /> */}
          <Route exact path='/link1' render={() => <Link1 />} />
         
        
          
          <Route exact path='/notification' render={() => <Notification />} />
          <Route exact path='/notify' render={() => <Notify />} />
        </Switch>
      </Box>
      
    </Fragment>
  );
}
