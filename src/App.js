import { Switch, Route, BrowserRouter } from "react-router-dom";
import Home from "./views/Home";
import CreateQuestion from "./views/CreateQuestion";
import LandingPage from "./views/LandingPage";
import VisualizeQuestion from "./views/VisualizeQuestion";
import BarLeft from "./components/HomeComponents/BarLeft/BarLeft";
import PostFormMui from "./components/HomeComponents/FormWithMUI/PostFormMui";
import FormUser from "./views/FormUser";
import CardUser from "./components/cardUser/CardUser"
import { useContext } from "react";
import { ColorModeContext } from "./darkMode";
import { bgcolor } from "@mui/system";
import { Button, Box, dividerClasses } from "@mui/material";


function App() {
  // const {mode, toggleMode} = useContext(ColorModeContext);

  // console.log(mode, "mode")
  return (
      
    
      // <Box sx={{
      //   display: 'flex',
      //   width: '100%',
      //   alignItems: 'center',
      //   justifyContent: 'center',
      //   bgcolor: 'background.default',
      //   color: 'text.primary',
      //   boderRadius: 1,
      //   p: 3,
      // }}>
      //   <Button onClick={toggleMode}>
      //     change Mode
      //   </Button>
      // </Box>

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

          {/* <CreateQuestion /> */}
          {/* </BarLeft> */}
        </Route>


        <Route exact={true} path="/intro-user">
          <FormUser />
        </Route>

        <Route exact={true} path="/user">
          <CardUser />
        </Route>

      </Switch>


    </BrowserRouter>
  );
}

export default App;
