import React from "react";
import {
  makeStyles,
  AppBar,
  Toolbar,
  Typography,
  Container,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import category from "../../catalog.json";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  headerContainer: {
    "& .MuiAppBar-colorPrimary": {
      backgroundColor: "black",
    },
  },
  innerContainer: {
    paddingBottom: "8px",
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.up("sm")]: {
      flexDirection: "row",
    },
  },
  root: {
    flexGrow: 1,
  },
  menuButton: {
    display: "block",
    marginLeft: theme.spacing(1),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  titleContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    [theme.breakpoints.up("sm")]: {
      width: "60%",
    },
  },
  titleText: {
    textTransform: "uppercase",
    textAlign: "center",
  },
  dropdown: {
    cursor: "pointer",
    display: "flex",
    width: "100%",
    height: "40px",
    justifyContent: "space-around",
    alignItems: "center",
    border: "2px solid white",
    borderRadius: "4px",
    position: "relative",
    [theme.breakpoints.up("sm")]: {
      width: "250px",
    },
  },
  dropdownText: {
    fontSize: "20px",
  },
  dropdownItemContainer: {
    position: "absolute",
    width: "100%",
    top: "60px",
    color: "black",
    backgroundColor: theme.palette.background.paper,
    border: "1px solid grey",
  },
  locationItem: {
    cursor: "pointer",
    position: "relative",
    borderBottom: "1px solid grey",
  },
  dropdownSideItemContainer: {
    position: "absolute",
    width: "250px",
    top: -1,
    left: "250px",
    color: "black",
    backgroundColor: theme.palette.background.paper,
    //borderTop: "1px solid grey"
  },
  branchItem: {
    cursor: "pointer",
    borderLeft: "1px solid grey",
    borderRight: "1px solid grey",
    borderBottom: "1px solid grey",
    zIndex: 100,
    "&:hover": {
      backgroundColor: "grey",
      color: "white",
    },
  },
}));

export default function Header() {
  const classes = useStyles();

  const [display, setDisplay] = React.useState(false);
  const [subCategory, setSubCategory] = React.useState(null);
  const [dropDown, setDropDown] = React.useState(false);

  const history = useHistory();

  const handleHover = (value) => {
    setDisplay(true);
    setSubCategory(value);
  };

  const handleLeave = () => {
    setDisplay(false);
    setSubCategory(null);
  };

  const handleDropDown = () => {
    setDropDown(!dropDown);
  };

  const handleBranch = (locationIndex, branchIndex) => {
    history.push({
      pathname: `/location/${category?.data?.locations[locationIndex]?.name}/${category?.data?.locations[locationIndex]?.branches[branchIndex]?.name}`,
      state: { locationIndex, branchIndex },
    });
  };
  return (
    <div className={classes.headerContainer}>
      <AppBar position="fixed">
        <Toolbar>
          <Container maxWidth={"lg"} className={classes.innerContainer}>
            <div className={classes.titleContainer}>
              <Typography variant={"h6"} className={classes.titleText}>
                {"Rental Management System"}
              </Typography>
            </div>
            <div className={classes.dropdown} onClick={handleDropDown}>
              <Typography variant={"body1"} className={classes.dropdownText}>
                {"Select Location"}
              </Typography>
              <div>
                <ExpandMoreIcon />
              </div>
              <div
                className={classes.dropdownItemContainer}
                style={dropDown ? { display: "block" } : { display: "none" }}
              >
                <List disablePadding>
                  {category.data.locations.map((location, locationIndex) => {
                    return (
                      <ListItem
                        button
                        className={classes.locationItem}
                        onMouseOver={() => handleHover(location.name)}
                        onMouseLeave={() => handleLeave()}
                        key={`${location.name}`}
                      >
                        <ListItemText primary={location.name} />
                        <List
                          disablePadding
                          className={classes.dropdownSideItemContainer}
                          style={
                            display ? { display: "block" } : { display: "none" }
                          }
                        >
                          {subCategory === location.name &&
                            location.branches.map((branch, branchIndex) => {
                              return (
                                <ListItem
                                  className={classes.branchItem}
                                  key={`${branch.name}`}
                                  onClick={() =>
                                    handleBranch(locationIndex, branchIndex)
                                  }
                                >
                                  <ListItemText primary={branch.name} />
                                </ListItem>
                              );
                            })}
                        </List>
                      </ListItem>
                    );
                  })}
                </List>
              </div>
            </div>
          </Container>
        </Toolbar>
      </AppBar>
    </div>
  );
}
