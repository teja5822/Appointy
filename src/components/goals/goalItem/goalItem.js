import React from "react";
import { Grid } from "@material-ui/core";
import "./goalItem.css";

function GoalItem(props) {
  return (
    <Grid
      container
      direction="column"
      item
      xs={props.xs}
      sm={props.sm}
      className="goalItem"
    >
      <Grid item container className="itemHeaderText" alignItems="center">
        <Grid item xs={2}>
          <img src={props.imgSrc} alt={props.head} height="25px" width="25px" />
        </Grid>
        <Grid item xs={10}>
          <h4>{props.head}</h4>
        </Grid>
      </Grid>
      <Grid item>{props.des}</Grid>
    </Grid>
  );
}

export default GoalItem;
