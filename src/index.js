import React from "react";
import ReactDOM from "react-dom";
import "./reset.css";
import WebFont from 'webfontloader';

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);

WebFont.load({
  custom: {
    families: ['Roobert TRIAL'],
    urls: ['/fonts.css']
  }
});