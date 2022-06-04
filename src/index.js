import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "./redux/store";
import CssBaseline from '@mui/material/CssBaseline';
import {ColorContextProvider} from './darkMode/index';


import Auth0ProviderWithHistory from "./auth/auth0-provider-with-history";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Auth0ProviderWithHistory>
        <BrowserRouter>
        <CssBaseline />
        <ColorContextProvider>
        <App />
        </ColorContextProvider>
        </BrowserRouter>
      </Auth0ProviderWithHistory>
    </Provider>
      
  </React.StrictMode>
);
