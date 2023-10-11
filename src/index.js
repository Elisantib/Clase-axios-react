import React from "react";
import ReactDOM from "react-dom/client";
import CssBaseline from "@mui/material/CssBaseline";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import "./index.css";
import reportWebVitals from "./reportWebVitals";
import App from "./app";

const root = ReactDOM.createRoot(document.getElementById("root"));
// ReactDOM ==== > se encarga de crear el DOM virtual y posterior mente renderize en el elemento de id "root"
root.render(
  <React.StrictMode>
    <CssBaseline />
    <App /> {/* 1° hijo del Render index.js */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
