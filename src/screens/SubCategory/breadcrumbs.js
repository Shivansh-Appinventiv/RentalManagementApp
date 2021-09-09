import React from "react";
import { Breadcrumbs, makeStyles, Typography } from "@material-ui/core";
import { useHistory } from "react-router";

const useStyles = makeStyles((theme) => ({
  previousLinks: {
    cursor: "pointer",
  },
  activeLinks: {
    fontWeight: "bold",
  },
}));

export default function Bread(props) {
  const classes = useStyles();
  const { activeLink } = props;
  const history = useHistory();

  const handleLink = () => {
    history.goBack();
  };

  return (
    <Breadcrumbs aria-label={"breadcrumb"}>
      <Typography
        variant={"h6"}
        onClick={handleLink}
        className={classes.previousLinks}
      >
        {"Equipment Catalog"}
      </Typography>
      <Typography variant={"h6"} className={classes.activeLinks}>
        {activeLink}
      </Typography>
    </Breadcrumbs>
  );
}
