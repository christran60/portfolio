import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

import { HashLink } from "react-router-hash-link";
import Logo from "./images/Untitled-1.png";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
AOS.init({
  once: true,
  mirror: true,
});
function NavBar() {
  return (
    // make contact me link different from other links so the user knows it goes to a different page
    // underline active page/section

    <div className="NavBarcont" data-aos="fade" data-aos-duration="300">
 
      <ul className="nonmobile">
        
        <li>
          <div  data-aos="fade-down"
            data-aos-delay="2200">
          <Link
            to="/ContactPage"
            className="contact"
            
          >
            Contact Me
          </Link>
          </div>
        </li>
        <li>
          <div data-aos="fade-down"  data-aos-delay="2100">
           
          <HashLink to="/#Projects" >
            Projects
          </HashLink>
          </div>
        </li>
        <li>
          <div data-aos="fade-down" data-aos-delay="2000">
          <HashLink
            to="/#Technologies"
           
          >
            Technologies
          </HashLink>
          </div>
        </li>

        <li>
          <div data-aos="fade-down" data-aos-delay="1900">
          <HashLink to="/#AboutMe" >
            About Me
          </HashLink>
          </div>
        </li>
        <li>
          <div data-aos="fade-down" data-aos-delay="1800">
            <HashLink to="/#Home">Home</HashLink>
          </div>
        </li>
        
        <HashLink to="/#Home">
            
          <img className="Logo" src={Logo} alt="logo" />
        </HashLink>
      </ul>
    </div>
  );
}

export default NavBar;
