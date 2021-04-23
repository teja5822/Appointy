import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/nav/Nav";
import { Grid } from "@material-ui/core";
import Home from "./components/home/home";
import Acad from "./components/academicInstitutions/acadContainer/acad";
import Goals from "./components/goals/goals";
import Feature from "./components/features/feature";
import AppInteg from "./components/appIntegrations/appInteg";
import Img from "./assets/Appointy-integrations-with-different-apps-Education-1024x125.png";
import Services from "./components/services/services";
import Inshorts from "./components/inshorts/inshorts";

function App() {
  return (
    <Grid className="App" container>
      <Nav />
      <Grid item xs={1} />
      <Grid item container xs={10}>
        <Home />
        <Acad />
        <Goals />
        <Feature />
        <AppInteg />
      </Grid>
      <Grid item xs={1} />
      <Grid item xs={12}>
        <img src={Img} alt="Flowers" style={{ width: "100%" }} />
      </Grid>
      <Grid item xs={1} />
      <Grid item container xs={10}>
        <Services />
        <Inshorts />
      </Grid>
      <Grid item xs={1} />
    </Grid>
  );
}

export default App;
