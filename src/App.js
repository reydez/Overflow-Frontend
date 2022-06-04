import { Switch, Route } from "react-router-dom";
import Home from "./views/Home";
import LandingPage from "./views/LandingPage";
import VisualizeQuestion from "./views/VisualizeQuestion";
import BarLeft from "./components/HomeComponents/BarLeft/BarLeft";
import PostFormMui from "./components/HomeComponents/FormWithMUI/PostFormMui";
import FormUser from "./views/FormUser";
import CardUser from "./components/cardUser/CardUser";
import { useAuth0 } from "@auth0/auth0-react";
import ProtectedRoute from "./auth/protected-route";
import { Redirect } from "react-router-dom";
import { useEffect, useState } from "react";

function App() {
  const { isLoading, isAuthenticated, user } = useAuth0();

  useEffect(() => {
    if (isAuthenticated) {
      console.log(user);
    }
  }, [user, isAuthenticated]);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <Switch>
      <Route exact path="/">
        {isAuthenticated ? <Redirect to="/questions" /> : <LandingPage />}
      </Route>

      {/* <Route exact={true} path="/questions">
        <Home />
      </Route> */}

      <Route exact path="/questions">
        {!isAuthenticated ? <Redirect to="/" /> : <Home />}
      </Route>

      <Route exact={true} path="/visualize-question/:questionId">
        {!isAuthenticated ? (
          <Redirect to="/" />
        ) : (
          <BarLeft>
            <VisualizeQuestion />
          </BarLeft>
        )}
      </Route>

      <Route exact={true} path="/create-question">
        {!isAuthenticated ? <Redirect to="/" /> : <PostFormMui />}
      </Route>

      <Route exact={true} path="/user">
        <CardUser />
      </Route>
    </Switch>
  );
}

export default App;
