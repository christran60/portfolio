import React from "react";
import "./Body3.css";
// import websitetemp from "../images/websiteidea.png";
import website from "../images/website.PNG";
function Body3() {
  // let pics = [website, websitetemp];
  return (
    <div className="Body3cont">
      <div className="omegaprojectcont">

      
      <div className="projectscont">
        {/* <div className="outerbordercont"></div> */}
        <div className="projectwordbox">Projects</div>
      </div>
      {/* when adding another project, c/p all of this and just replace images and texts */}
      {/* all images should be 544x320*/}

      <div className="projectcont">
        <div className="projectimg">
          <img className="website" src={website}  alt="website"/>
        </div>
        <div className="projectnameanddesccont">
          <div className="projectnamecont">
            <div className="projectname">Personal Website</div>
          </div>
          <div className="projectdescription">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni nulla quibusdam non maiores odio earum autem magnam impedit repellat doloribus.
          </div>
          <div className="languagesp">
            React Javascript HTML CSS
          </div>
        </div>
      </div>

      </div>
    </div>
  );
}

export default Body3;
