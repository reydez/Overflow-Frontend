import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "./redux/store";
import { Auth0Provider } from "@auth0/auth0-react";
import axios from "axios"
import CssBaseline from '@mui/material/CssBaseline';
import {ColorContextProvider} from './darkMode/index';
import Auth0ProviderWithHistory from "./auth/auth0-provider-with-history";


axios.defaults.baseURL = process.env.REACT_APP_API || "http://localhost:3000";


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
