import React from 'react'
import "./Body2.css"
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
AOS.init({
  once: true,
  mirror: true,
});
function Body2() {
    return (
        <div className="Body2cont" id="Technologies">
            <div className="Languagescont"  data-aos="fade-up" data-aos-duration="800">
                {/* <div className="border">

                </div> */}
                
                <div className="langbox">
                    <div className="actuallang">
                        Skills
                    </div>
                </div>
                <div className="alllangcont">
            <div className="langthrough3cont">

            {/* c++ icon font */}
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.12.0/devicon.min.css"></link>
            <i class="devicon-cplusplus-line"></i>

            <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.14.0/devicon.min.css"></link>
            <i class="devicon-csharp-line"></i>

            {/* css icon font */}
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.12.0/devicon.min.css"></link>
            <i class="devicon-css3-plain"></i>

            {/* html icon font */}
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.12.0/devicon.min.css"></link>
            <i class="devicon-html5-plain"></i>

            {/* photoshop */}
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.14.0/devicon.min.css"></link>
            <i class="devicon-photoshop-plain"></i>
        
                {/* heroku*/}
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.14.0/devicon.min.css"></link>
                <i class="devicon-heroku-plain"></i>
            </div>
            <div className="langthrough6cont">
                {/* nodejs */}
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.14.0/devicon.min.css"></link>
                <i class="devicon-nodejs-plain"></i>
                {/* react icon font */}
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.12.0/devicon.min.css"></link>
                <i class="devicon-react-original"></i>

                {/* js icon font */}
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.12.0/devicon.min.css"></link>
                <i class="devicon-javascript-plain"></i>

                {/* python icon font */}
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.12.0/devicon.min.css"></link>
                <i class="devicon-materialui-plain"></i>

                <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.14.0/devicon.min.css"></link>
                <i class="devicon-dotnetcore-plain"></i>
            </div>
            </div>
        </div>
        </div>
    )
}

export default Body2
