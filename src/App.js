import { Switch, Route, BrowserRouter } from "react-router-dom";
import Home from "./views/Home";
import CreateQuestion from "./views/CreateQuestion";
import LandingPage from "./views/LandingPage";
import VisualizeQuestion from "./views/VisualizeQuestion";
import BarLeft from "./components/HomeComponents/BarLeft/BarLeft";
import PostFormMui from "./components/HomeComponents/FormWithMUI/PostFormMui";
import FormUser from "./views/FormUser";


function App() {
  return (
    <BrowserRouter>
      <Switch>

        <Route exact={true} path="/">
          <LandingPage />
        </Route>

        <Route exact={true} path="/questions">
          <Home />
        </Route>

        <Route exact={true} path="/visualize-question/:questionId">
          <BarLeft>
            <VisualizeQuestion />
          </BarLeft>
        </Route>

        <Route exact={true} path="/create-question" >
          {/* <BarLeft> */}
          <PostFormMui />
          {/* </BarLeft> */}
        </Route>



        <Route exact={true} path="/intro-user">
          <FormUser />
        </Route>

      </Switch>


    </BrowserRouter>
  );
}

export default App;
