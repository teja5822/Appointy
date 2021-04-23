import { Grid } from "@material-ui/core";
import React from "react";

function AcadItem(props) {
  return (
    <Grid container direction="column" className="itemContainer">
      <Grid item>
        <img src={props.imgSrc} alt={props.institute} />
      </Grid>
      <Grid container item>
        <Grid item className="itemHeaderText">
          <h4>{props.institute}</h4>
        </Grid>
        <Grid item className="itemSubText">
          {props.description}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default AcadItem;
