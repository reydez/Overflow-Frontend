import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "./redux/store";
import CssBaseline from '@mui/material/CssBaseline';
import {ColorContextProvider} from './darkMode/index';



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
      <Provider store={store}>
      <BrowserRouter>
        <CssBaseline />
        <ColorContextProvider>
        <App />
        </ColorContextProvider>
      </BrowserRouter>
    </Provider>
      
  </React.StrictMode>
);
