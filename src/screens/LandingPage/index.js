import React from "react";
import { Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  landingText: {
    height: "800px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    textTransform: "uppercase",
    textAlign: "center"
  },
}));

export default function LandingPage() {
  const classes = useStyles();
  return (
    <div className={classes.landingText}>
      <Typography variant={"h5"}>
        {"Welcome To Rental Management System"}
      </Typography>
      <Typography variant={"h6"}>{"Please Select Location"}</Typography>
    </div>
  );
}
