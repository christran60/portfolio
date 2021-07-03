import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Header from "./components/Header";
import Body from "./components/Body";
import Body2 from "./components/Body2";
import Body3 from "./components/Body3";
import ContactMe from "./components/ContactMe";
import { BrowserRouter } from "react-router-dom";
ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Body />
    <Body2 />
    <Body3 />
    <ContactMe />
  </React.StrictMode>,
  // <BrowserRouter>
  //   <App />
  // </BrowserRouter>,
  document.getElementById("root")
);
