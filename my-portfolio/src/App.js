import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import Home from "./Home";
import ContactPage from "./ContactPage";
import { Route, Link } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Home} />
      <Route exact path="/ContactPage" component={ContactPage} />
    </div>
  );
}

export default App;
