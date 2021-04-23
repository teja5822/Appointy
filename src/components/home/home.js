import React from "react";
import { Button, Grid } from "@material-ui/core";
import HappyEduImg from "../../assets/Happy-educator-using-Educator-scheduling-software.svg";
import "./home.css";

function Home() {
  return (
    <Grid container className="homeContainer">
      <Grid container item xs={12} sm={12} md={6} direction="column">
        <Grid container item direction="column">
          <Grid item className="headerText">
            <h1>
              Education scheduling software to reduce admin work, increase
              efficiency, and deliver better results
            </h1>
          </Grid>
          <Grid item className="subText">
            Save valuable teaching time with easy online appointments, class
            scheduling, student management, payments, automated reminders and
            web conferencing!
          </Grid>
        </Grid>
        <Grid container item direction="column" className="mainContainer">
          <Grid item>
            <Button className="btnPrimary">Get started now!</Button>
          </Grid>
          <Grid item>
            No credit card required! Our free plan is free forever
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={12} md={6} style={{ textAlign: "center" }}>
        <img src={HappyEduImg} alt="happyEduImg" className="happyEduImg" />
      </Grid>
    </Grid>
  );
}

export default Home;
