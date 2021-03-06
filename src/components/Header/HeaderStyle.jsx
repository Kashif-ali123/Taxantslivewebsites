import { makeStyles } from "@material-ui/core";
import { blue, blueGrey } from "@material-ui/core/colors";

export const useStyles = makeStyles((theme) => {
  console.log(theme.breakpoints);
  return {
    //common
    navImg: {
      width: "35px",
      height: "35px",
      borderRadius: "50%",
      color: "White",
      backgroundColor: "black",
    },

    //header
    wrapper: {
      width: "100%",
      minHeight: "100vh",
      height: "auto",
      background: "#efefef",
      boxSizing: "border-box",
      padding: "70px 24px 24px 270px",
      [theme.breakpoints.down("sm")]: {
        padding: "70px 24px 24px 24px",
       
      },
    },
    logo: {
      lineHeight: "47px",
      color: "inherit",
    },

    // navbar styles

    toolbar: {
      display: "flex",
      flexFlow: "row wrap",
      justifyContent: "space-between",
    },
    brandBox: {
      display: "flex",
      flexFlow: "row wrap",
      color:"white",
      
    },
    dropdownlist: {
      maxWidth: "250px",
      color: "white",
     
    },
    listItem: {
      textTransform: "capitalize",
      color: "white",
    },

    //sidenav
    drawerPaper: {
      width: "250px",
      marginTop: "194px",
      color: "white",
     backgroundColor:"#000",
      [theme.breakpoints.down("sm")]: {
        marginTop: "196px",
       
      },
    },

    navlink: {
      color: "white",
      fontWeight:"bold",
      transition: "0.8s",
      "&:hover  div": {
        color: "white",
      
       
      },
    },
    navButton: { width: "100%", textTransform: "capitalize" },
    selectedNav: {
      color: `#fff !important`,
      fontWeight: " bolder",
      " & div": {
        color: `#fff !important`,
        marginTop:"50px",
       
      
      },
    },
  };
});
