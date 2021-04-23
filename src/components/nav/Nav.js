import React from "react";
import { Grid, Button } from "@material-ui/core";
import "./Nav.css";
function Nav() {
  return (
    <Grid container className="navContainer">
      <Grid item xs={1} />
      <Grid item container xs={10} alignItems="center">
        <Grid container item xs={2}>
          <Grid item>Appointy</Grid>
        </Grid>
        <Grid
          container
          item
          xs={10}
          justify="flex-end"
          className="navItem"
          alignItems="center"
        >
          <Grid item>Home</Grid>
          <Grid item>Customers</Grid>
          <Grid item>Contact Us</Grid>
          <Grid item>Enterprise</Grid>
          <Grid item>Pricing</Grid>
          <Grid item>Login</Grid>
          <Grid item>
            <Button className="signUpBtn">Sign Up</Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={1} />
    </Grid>
  );
}

export default Nav;
