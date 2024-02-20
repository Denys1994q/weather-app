import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { GoogleOAuthProvider } from "@react-oauth/google";
import store from "./store/store";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
    // <React.StrictMode>
    <Provider store={store}>
        <GoogleOAuthProvider clientId={process.env.REACT_APP_CLIENT_GOOGLE_KEY ? process.env.REACT_APP_CLIENT_GOOGLE_KEY : ''}>
            <App /> 
        </GoogleOAuthProvider>
    </Provider>
    // </React.StrictMode>
);
