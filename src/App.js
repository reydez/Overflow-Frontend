import { Switch, Route } from "react-router-dom";
import Home from "./views/Home";
import LandingPage from "./views/LandingPage";
import VisualizeQuestion from "./views/VisualizeQuestion";
import BarLeft from "./components/HomeComponents/BarLeft/BarLeft";
import PostFormMui from "./components/HomeComponents/FormWithMUI/PostFormMui";
import { useAuth0 } from "@auth0/auth0-react";
import { Redirect } from "react-router-dom";
import { useState, useEffect } from "react";
// import { UserProfile } from "./components/HomeComponents/UserProfile/UserProfile";
import Component404 from "./components/404/Component404";
import { useDispatch, useSelector } from "react-redux";
import { createUser } from "./redux/actions/user";
import FavoritesUser from "./views/FavouritesUser";
import Spinner from "./components/spinner/Spinner";
import ProfileDashboard from "./components/HomeComponents/ProfileDashBoard/ProfileDashboard";
import { AllUsers } from "./components/HomeComponents/AllUsers/AllUsers";
import { AdminContainer } from "./views/AdminContainer";
import { AdminEditTags } from "./components/HomeComponents/Admin/AdminEditTags";
import { PaypalC } from "./components/Paypal/PaypalC";

function App() {
  const { isLoading, isAuthenticated, user } = useAuth0();
  const dispatch = useDispatch();
  const userRedux = useSelector((state) => state.userReducer.user);

  useEffect(() => {
    const createUserFromDispatch = () => {
      if (isAuthenticated) {
        dispatch(createUser(user));
      }
    };
    createUserFromDispatch();
  }, [user, isAuthenticated, isLoading, dispatch]);

  if (isLoading && userRedux) {
    return <Spinner />;
  }

  console.log(userRedux.isAdmin);

  return (
    <Switch>
      <Route exact path="/">
        {isAuthenticated ? <Redirect to="/questions" /> : <LandingPage />}
      </Route>

      <Route exact path="/questions">
        {isAuthenticated ? <Home /> : <Redirect to="/" />}
      </Route>

      <Route exact={true} path="/visualize-question/:questionId">
        {isAuthenticated ? (
          <BarLeft>
            <VisualizeQuestion />
          </BarLeft>
        ) : (
          <Redirect to="/" />
        )}
      </Route>

      <Route exact={true} path="/create-question">
        {isAuthenticated ? (
          <BarLeft>
            <PostFormMui />
          </BarLeft>
        ) : (
          <Redirect to="/" />
        )}
      </Route>

      <Route exact={true} path="/user-profile">
        {isAuthenticated ? (
          <BarLeft>
            <ProfileDashboard />
          </BarLeft>
        ) : (
          <Redirect to="/" />
        )}
      </Route>

      <Route exact={true} path="/all-users">
        {isAuthenticated ? (
          <BarLeft>
            <AllUsers />
          </BarLeft>
        ) : (
          <Redirect to="/" />
        )}
      </Route>

      <Route exact={true} path="/donar">
        {!isAuthenticated ? (
          <Redirect to="/" />
        ) : (
          <BarLeft>
            <PaypalC />
          </BarLeft>
        )}
      </Route>

      <Route exact={true} path="/favourites-user">
        {isAuthenticated ? (
          <BarLeft>
            <FavoritesUser />
          </BarLeft>
        ) : (
          <Redirect to="/" />
        )}
      </Route>

      <Route exact={true} path="/admin">
        {isAuthenticated && userRedux.isAdmin ? (
          <BarLeft>
            <AdminContainer />
          </BarLeft>
        ) : (
          <Redirect to="/questions" />
        )}
      </Route>

      <Route exact={true} patch="/admin/edit-tags">
        {isAuthenticated && userRedux.isAdmin ? (
          <BarLeft>
            <AdminContainer />
            <AdminEditTags />
          </BarLeft>
        ) : (
          <Redirect to="/questions" />
        )}
      </Route>

      <Route path="*" exact={true} component={Component404} />
    </Switch>
  );
}

export default App;
