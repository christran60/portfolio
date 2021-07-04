import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// import NavBar from './NavBar'
// import Home from "./Home";
import { BrowserRouter } from "react-router-dom";
ReactDOM.render(
  <BrowserRouter>
  {/* <NavBar /> */}
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
