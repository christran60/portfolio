import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import { HashLink } from "react-router-hash-link";
import Logo from "/mnt/c/wsl/github/myportfolio/portfolio/my-portfolio/src/images/ded.png";

function NavBar() {
  return (
    // make contact me link different from other links so the user knows it goes to a different page
    // underline active page/section

    <div className="NavBarcont">
      <HashLink to="/#Home" className="hashlinktohome">
        <img className="Logo" src={Logo} alt="logo" />
        </HashLink>
      <ul className="nonmobile">
        <li>
          <Link to="/ContactPage" className="contact">
            Contact Me
          </Link>
        </li>
        <li>
          <HashLink to="/#Projects">Projects</HashLink>
        </li>
        <li>
          <HashLink to="/#Technologies">Technologies</HashLink>
        </li>

        <li>
          <HashLink to="/#AboutMe">About Me</HashLink>
        </li>
        <li>
          <HashLink to="/#Home">Home</HashLink>
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
