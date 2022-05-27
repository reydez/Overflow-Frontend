import { Switch, Route } from "react-router-dom";
import Home from "./views/Home";
import CreateQuestion from "./views/CreateQuestion";
import LandingPage from "./views/LandingPage";
import VisualizeQuestion from "./views/VisualizeQuestion";
import BarLeft from "./components/HomeComponents/BarLeft/BarLeft";


function App() {
  return (
    <>
      <Switch>
        <Route path="/questions">
          <Home />
        </Route>
        <Route path="/visualize-question/:questionId">
          <BarLeft>
            <VisualizeQuestion />
          </BarLeft>
        </Route>
        <Route path="/create-question">
          <BarLeft>
            <CreateQuestion />
          </BarLeft>
        </Route>
        <Route path="/">
          <LandingPage />
        </Route>
      </Switch>
     
   
    </>
  );
}

export default App;
