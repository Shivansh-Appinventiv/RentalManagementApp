import React from "react";
import { makeStyles, Typography } from "@material-ui/core";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";

const useStyles = makeStyles((theme) => ({
  innerContainer: {
    width: "100%",
  },
  textContainer: {
    width: "100%",
    background: "rgba(34,107,172,255)",
    color: "white",
    minHeight: "50px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
  },
}));

export default function CardBox(props) {
  const classes = useStyles();
  const { name, imgSrc, ...rest } = props;
  return (
    <>
      <div>
        <img src={imgSrc} alt={name} />
      </div>
      <div className={classes.textContainer} {...rest}>
        <Typography variant={"h6"}>{name}</Typography>
        <ArrowRightIcon />
      </div>
    </>
  );
}
