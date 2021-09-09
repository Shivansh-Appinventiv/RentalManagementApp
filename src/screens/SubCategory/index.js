import React from "react";
import { Container, Grid, makeStyles } from "@material-ui/core";
import Bread from "./breadcrumbs";
import { SubCategoryImage } from "../../assets";
import CardBox from "../Catalog/card";

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

export default function SubCategory(props) {
  const classes = useStyles();
  const { category, subCategories } = props?.location?.state;
  console.log(props);
  return (
    <Container maxWidth={"lg"} className={classes.screenContainer}>
      <Bread activeLink={category} />
      <Grid container className={classes.catalogContainer}>
        <Grid container item xs={12}>
          {subCategories.map((subCategory) => {
            if (subCategory.name === "NA")
              return (
                // <Typography key={subCategory.name} variant={"h3"}>
                //   {"NO Data Found"}
                // </Typography>
                null
              );
            return (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                lg={3}
                key={subCategory.name}
                className={classes.cardContainer}
              >
                {SubCategoryImage?.map((item) => {
                  if (item.name === subCategory.image) {
                    return (
                      <div key={item.name}>
                        <CardBox name={subCategory.name} imgSrc={item.imgSrc} />
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
