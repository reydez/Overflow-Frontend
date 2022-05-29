import { Switch, Route } from "react-router-dom";
import Home from "./views/Home";
import CreateQuestion from "./views/CreateQuestion";
import LandingPage from "./views/LandingPage";
import VisualizeQuestion from "./views/VisualizeQuestion";
import BarLeft from "./components/HomeComponents/BarLeft/BarLeft";
import PostFormMui from "./components/HomeComponents/FormWithMUI/PostFormMui";
import FormUser from "./views/FormUser";


function App() {
  return (
    <>
      <Switch>
        
        <Route path exact="/">
          <LandingPage />
        </Route>

        <Route path="/questions">
          <Home />
        </Route>

        <Route path="/visualize-question/:questionId">
          <BarLeft>
            <VisualizeQuestion />
          </BarLeft>
        </Route>

        <Route path="/create-question">
          {/* <BarLeft> */}
          <PostFormMui />
          {/* <CreateQuestion /> */}
          {/* </BarLeft> */}
        </Route>


        <Route path="/intro-user">
          <FormUser />
        </Route>

      </Switch>
     
   
    </>
  );
}

export default App;
