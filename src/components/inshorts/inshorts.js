import React from "react";
import { Grid } from "@material-ui/core";
import InshortItem from "./inshortItem/inshortItem";

function Inshorts() {
  const inshortItems = [
    {
      msg: `Appointy gives our students a fast and efficient way to book their sessions. It has completely eliminated missed appointments, human typos, back-and-forth emails and more issues like these for us. We can now control almost every single aspect of the booking process and our admin team has more time available to talk to students and for other tasks. This has improved our customer satisfaction rate. We've got so many new students with a positive word of mouth about our business!`,
      author: `- Owner BeMo Academic Consulting`,
    },
    {
      msg: `Appointy has helped our appointment system become much easier and less work. We have more accurate data on daily and sales report. And it is easier to track the appointment status. It is very customizable and suits to your company needs. And the customer service is excellent!! Their live chat ready to answer your questions within seconds.`,
      author: `- Chyntia P. Counselor, Education Management`,
    },
  ];
  return (
    <Grid container className="headerContainer">
      <Grid item container>
        <Grid item xs={1} />
        <Grid container item xs={10} direction="column">
          <Grid item className="headerText" style={{ textAlign: "center" }}>
            <h1>23,000+ educators and institutes use Appointy worldwide</h1>
          </Grid>
        </Grid>
        <Grid item xs={1} />
      </Grid>
      <Grid container className="mainContainer">
        {inshortItems.map((i) => (
          <InshortItem message={i.msg} author={i.author} key={i.author} />
        ))}
      </Grid>
    </Grid>
  );
}

export default Inshorts;
