import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

import { HashLink } from "react-router-hash-link";
import Logo from "/mnt/c/wsl/github/myportfolio/portfolio/my-portfolio/src/images/ded.png";
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
      <HashLink to="/#Home" className="hashlinktohome">
        <img className="Logo" src={Logo} alt="logo" />
      </HashLink>
      <ul className="nonmobile">
        <li>
          <Link
            to="/ContactPage"
            className="contact"
            data-aos="fade-down"
            data-aos-delay="2200"
          >
            Contact Me
          </Link>
        </li>
        <li>
          <HashLink to="/#Projects" data-aos="fade-down" data-aos-delay="2100">
            Projects
          </HashLink>
        </li>
        <li>
          <HashLink
            to="/#Technologies"
            data-aos="fade-down"
            data-aos-delay="2000"
          >
            Technologies
          </HashLink>
        </li>

        <li>
          <HashLink to="/#AboutMe" data-aos="fade-down" data-aos-delay="1900">
            About Me
          </HashLink>
        </li>
        <li>
          <div data-aos="fade-down" data-aos-delay="1800">
            <HashLink to="/#Home">Home</HashLink>
          </div>
        </li>
        <HashLink to="/#Home" className="hashlinktohome">
          <img className="Logo" src={Logo} alt="logo" />
        </HashLink>
      </ul>

      {/* <div className="Supercont"> */}

      {/* </div> */}
    </div>
  );
}

export default NavBar;
