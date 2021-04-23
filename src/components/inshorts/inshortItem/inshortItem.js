import React from "react";
import { Chip, Grid } from "@material-ui/core";
import "./inshortItem.css";

function InshortItem(props) {
  return (
    <Grid container item xs={12} sm={6}>
      <Grid item className="inshortItem">
        {props.message}
        <br />
        <Chip className="appChip" label={props.author} />
      </Grid>
    </Grid>
  );
}

export default InshortItem;
