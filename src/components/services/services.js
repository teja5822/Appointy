import React from "react";
import Img from "../../assets/Appointy-integrations-with-different-apps-Education-1024x125.png";
import Img768 from "../../assets/768.png";
import Img414 from "../../assets/414.png";
import AcadItem from "../academicInstitutions/acadItem/acadItem";
import TPI from "../../assets/Third-party-integration.svg";
import E2E from "../../assets/End-to-end-branding.svg";
import CustomWorkflow from "../../assets/Custom-workflows.svg";
import Support from "../../assets/Dedicated-support-team.svg";
import { Button, Grid } from "@material-ui/core";

function Services() {
  const serviceItems = [
    {
      imgSrc: TPI,
      institute: "Third-Party Integrations",
      description: `We build integrations with core systems that you work with every day to give you an all-in-one solution`,
    },
    {
      imgSrc: E2E,
      institute: "End-to-End Branding",
      description: `We offer custom branded and white tabelled solutions that match your
          brand image`,
    },
    {
      imgSrc: CustomWorkflow,
      institute: "Custom Workflows",
      description: `Our solution can be customized to cater to any specific scheduling needs of your company`,
    },
    {
      imgSrc: Support,
      institute: "Dedicated Support",
      description: `Our support team will help on board and train your team, implement new features, troubleshoot, etc.`,
    },
  ];
  return (
    <Grid container className="headerContainer">
      <Grid item container>
        <Grid item xs={1} />
        <Grid container item xs={10} direction="column">
          <Grid item className="headerText" style={{ textAlign: "center" }}>
            <h1>
              Custom online scheduling software to fit the unique needs of
              universities, schools and tutoring centers
            </h1>
          </Grid>
          <Grid item className="subText" style={{ textAlign: "center" }}>
            We have designed tailor made scheduling software solutions for
            various educational institutes to help streamline their complex
            booking process
          </Grid>
        </Grid>
        <Grid item xs={1} />
      </Grid>

      <Grid container item className="mainContainer">
        {serviceItems.map((i) => (
          <Grid item xs={12} sm={6} md={3} key={i.institute}>
            <AcadItem
              imgSrc={i.imgSrc}
              institute={i.institute}
              description={i.description}
            />
          </Grid>
        ))}
        <Grid item xs={12} style={{ textAlign: "center", marginTop: "30px" }}>
          <Button className="btnTertiary">Learn More</Button>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Services;
