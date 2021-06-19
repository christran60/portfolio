import React from "react";
import "./Body3.css";
import websitetemp from "../images/websiteidea.png";
import website from "../images/website.PNG";
function Body3() {
  let pics = [website, websitetemp];
  return (
    <div className="Body3cont">
      <div className="projectscont">
        <div className="outerbordercont"></div>
        <div className="projectwordbox">Projects</div>
      </div>
      <div className="project1">
          Personal Website Portfolio
      </div>
    </div>
  );
}

export default Body3;
