import React from "react";
import "./Body.css";
function Body() {
  //maybe use icons of languages for better design?
  //include about me section here
  //let skills = ["C++", "C", "HTML", "CSS", "Javascript", "React"]
  return (
    <div className="Bodycont" id="AboutMe">
      <div className="actualbiocont">
        <div className="outerbordercont"></div>

        <div className="aboutmecont">
          <div className="actualnamecont">About</div>
        </div>

        <div className="descriptioncont">
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ut, eveniet cupiditate debitis officiis voluptates nisi corrupti sunt unde quia natus omnis. Praesentium, consectetur commodi.
        </div>
      </div>
    </div>
  );
}

export default Body;
