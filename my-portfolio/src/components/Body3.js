import React from "react";
import "./Body3.css";
// import websitetemp from "../images/websiteidea.png";
import website from "../images/website.PNG";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
AOS.init({
  once: true,
  mirror: true,
});
function Body3() {
  // let pics = [website, websitetemp];
  return (
    <div className="Body3cont" id = "Projects">
      <div className="omegaprojectcont" data-aos="fade-up" data-aos-duration="800">

      
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
            You're here now! This is my first project ever and was an incredibly useful learning experience throughout my time working on it.
            This has been the perfect introduction to front end development, and makes me excited to work on future projects!
          </div>
          <div className="languagesp">
            React Javascript HTML CSS Material-UI Node.js
          </div>
        </div>
      </div>
      
{/* c/p all above to add another */}

      </div>
    </div>
  );
}

export default Body3;
