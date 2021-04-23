import React from "react";
import { Grid, Chip } from "@material-ui/core";
import "./appInteg.css";

function AppInteg() {
  return (
    <>
      <Grid container className="headerContainer">
        <Grid item container>
          <Grid item xs={1} />
          <Grid container item xs={10} direction="column">
            <Grid item className="headerText" style={{ textAlign: "center" }}>
              <h1>Appointy integrates with the apps you already use</h1>
            </Grid>
            <Grid item className="subText" style={{ textAlign: "center" }}>
              Education scheduling software that integrates with popular
              payments apps, social media, video conferencing tools, and
              personal/ work calendars
            </Grid>
          </Grid>
          <Grid item xs={1} />
        </Grid>
        <Grid item container className="mainContainer">
          <Grid item xs={12} sm={4} style={{ textAlign: "center" }}>
            <Chip label="Multiple Payment Apps" className="appChip" />
          </Grid>
          <Grid item xs={12} sm={4} style={{ textAlign: "center" }}>
            <Chip label="Personal & Work Calendar" className="appChip" />
          </Grid>
          <Grid item xs={12} sm={4} style={{ textAlign: "center" }}>
            <Chip label="Video Conferencing Apps" className="appChip" />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default AppInteg;
