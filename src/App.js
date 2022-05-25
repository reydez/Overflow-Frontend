import { Switch, Route } from "react-router-dom";
import Home from "./views/Home";
import CreateQuestion from "./views/CreateQuestion";
import LandingPage from "./views/LandingPage";
import VisualizeQuestion from "./views/VisualizeQuestion";

function App() {
  return (
    <>
      <Switch>
        <Route path="/questions">
          <Home />
        </Route>
        <Route path="/visualize-question/:questionId">
          <VisualizeQuestion />
        </Route>
        <Route path="/create-question">
          <CreateQuestion />
        </Route>
        <Route path="/">
          <LandingPage />
        </Route>
      </Switch>
    </>
  );
}

export default App;
