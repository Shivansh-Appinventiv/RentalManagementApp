import React from "react";
import { AppBar, makeStyles, Toolbar } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  footerContainer: {
    "& .MuiAppBar-colorPrimary": {
      backgroundColor: "black",
    },
  },
  appBar: {
    top: "auto",
    bottom: 0,
  },
}));

export default function Footer() {
  const classes = useStyles();
  return (
    <div className={classes.footerContainer}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar></Toolbar>
      </AppBar>
    </div>
  );
}
