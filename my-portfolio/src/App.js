import React from "react";
// import ReactDOM from "react-dom";
import "./App.css";
import Home from "./Home";
import NavBar from './NavBar'
import ContactPage from "./ContactPage";
import { Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Route exact path="/" component={Home} />
      <Route exact path="/ContactPage" component={ContactPage} />
    </div>
  );
}

export default App;
