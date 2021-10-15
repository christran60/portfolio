import React from "react";
import "./Body.css";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
AOS.init({
  once: true,
  mirror: true,
});
function Body() {
  //maybe use icons of languages for better design?
  //include about me section here
  //let skills = ["C++", "C", "HTML", "CSS", "Javascript", "React"]
  return (
    <div className="Bodycont" id="AboutMe">
      <div className="actualbiocont" data-aos="fade-up" data-aos-duration="800">
        <div className="border"></div>
        <div className="aboutmecont">
          <div className="actualnamecont">Bio</div>
        </div>

        <div className="descriptioncont">
          <p className="descp1">
            Hi, my name is Chris Tran, and I am currently a sophomore at UC
            Davis, studying computer engineering. I first started programming
            during my senior year of high school, and since then, I've been hard
            at work developing my skills even further.{" "}
          </p>
          <p>
            Currently, I'm working at{" "}
            <a
              className="pacare"
              href="https://www.linkedin.com/company/pacare-io/"
              target="_blank"
              rel="noreferrer"
            >
              PACare
            </a>
            , where I'm a software engineering intern. I also work as a
            graphics design intern for the esports organization at UC Davis!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Body;
