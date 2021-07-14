import React from "react";
// import ReactDOM from "react-dom";
import "./App.css";
import Home from "./Home";
import NavBar from './NavBar'
import ContactPage from "./ContactPage";
import { Route } from "react-router-dom";
import Sidebar from './Sidebar';
import Smb from './Smb';
function App() {
  return (
        <div className="App" id="outer-container">
          <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
      <div id="page-wrap">

      <NavBar />
      <Smb />
      <Route exact path="/" component={Home} />
      <Route exact path="/ContactPage" component={ContactPage} />
    </div>
    </div>
  );
}

export default App;
