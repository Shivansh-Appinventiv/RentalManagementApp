import "./App.css";

//components import
import Header from "./components/header";
import LandingPage from "./screens/LandingPage";
import Catalog from "./screens/Catalog";
import SubCategory from "./screens/SubCategory";

//router imports
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

//styles import
import { makeStyles } from "@material-ui/core";
import Footer from "./components/footer";

const useStyles = makeStyles((theme) => ({
  contentArea: {
    paddingTop: "80px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <div className={classes.contentArea}>
        <Router>
          <Header />
          <Switch>
            <Route exact path={"/"} component={LandingPage} />
            <Route
              exact
              path={"/location/:location/:branch"}
              render={(props) => <Catalog {...props} />}
            />
            <Route
              exact
              path={"/location/:location/:branch/:category"}
              render={(props) => <SubCategory {...props} />}
            />
          </Switch>
          <Footer />
        </Router>
      </div>
    </div>
  );
}

export default App;
