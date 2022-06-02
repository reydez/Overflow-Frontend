import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "./redux/store";
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Auth0Provider // PROPIEDADES "domain" Y "clientId" SE DEBEN CONFIGURAR DESDE LA PAGINA DE AUTH0
          domain="dev-fdp66b-n.us.auth0.com"
          clientId="fmN8jTxwORLlH6KCeOrBozf7dITXTf9z"
          redirectUri={window.location.origin}
        >
          <App />
        </Auth0Provider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
