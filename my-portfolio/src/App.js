import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import Body2 from "./components/Body2";
import Body3 from "./components/Body3";
import ContactMe from "./components/ContactMe";
import ContactPage from "./ContactPage";
import { Route, Link } from "react-router-dom";
function App() {
  return (
    <div className="App">
      {/* <Route exact path= "/" component = {Header, Body, Body2} />
       */}
      {/* <Header />
     <Body />
     <Body2 />
     <Body3 />
     <ContactMe /> */}
      {/* <Route exact path="/ContactPage" component={ContactPage} /> */}
    </div>
  );
}

export default App;
