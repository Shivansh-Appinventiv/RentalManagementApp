import React from "react";
import { Container, Grid, makeStyles, Typography } from "@material-ui/core";
import category from "../../catalog.json";
import EquipmentCatalog from "../../assets";
import CardBox from "./card";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  screenContainer: {
    width: "100%",
  },
  cardContainer: {
    width: "100%",
    boxShadow:
      "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
    borderRadius: "5px",
    margin: "4px",
  },
  catalogContainer: {
    margin: "10px 0",
    width: "100%",
  },
}));

export default function Catalog(props) {
  const classes = useStyles();

  const { locationIndex, branchIndex } = props?.location?.state;
  console.log(props);
  const categories =
    category?.data?.locations[locationIndex].branches[branchIndex].categories;

  const history = useHistory();

  const handleClick = (val, subCategories) => {
    history.push({
      pathname: `${props.location.pathname}/${val}`,
      state: { category: val, subCategories },
    });
  };

  return (
    <Container maxWidth={"lg"} className={classes.screenContainer}>
      <Typography variant={"h6"}>{"Equipment Catalog"}</Typography>
      <Grid container className={classes.catalogContainer}>
        <Grid container item xs={12}>
          {categories.map((category) => {
            return (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                lg={3}
                key={category.name}
                className={classes.cardContainer}
              >
                {EquipmentCatalog?.map((item) => {
                  if (item.name === category.image) {
                    return (
                      <div key={item.name}>
                        <CardBox
                          name={category.name}
                          imgSrc={item.imgSrc}
                          onClick={() =>
                            handleClick(category?.name, category.subcategories)
                          }
                        />
                      </div>
                    );
                  }
                  return null;
                })}
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </Container>
  );
}
