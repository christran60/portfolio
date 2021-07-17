import React from "react";
import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import { HashLink } from "react-router-hash-link";
function Sidebar() {
  return (
    <div className="Sidebar">
      <Menu right>
        {/* <ul className= "mobile"> */}

        <li>
          <HashLink to="/#Home"> Home</HashLink>
        </li>

        <li>
          <HashLink to="/#AboutMe">About Me</HashLink>
        </li>
        <li>
          <HashLink to="/#Technologies">Technologies</HashLink>
        </li>
        <li>
          <HashLink to="/#Projects">Projects</HashLink>
        </li>

        <li>
          <Link to="/ContactPage" className="contact">
            Contact Me
          </Link>
        </li>
        <div className="sbmnav">
        <a
          className="links"
          href="https://github.com/christran60"
          target="_blank"
          rel="noreferrer"
        >
          <i class="fab fa-github"></i>
        </a>
        <a
          className="links"
          href="https://www.linkedin.com/in/chris-tran-25702620b/"
          target="_blank"
          rel="noreferrer"
        >
          <i class="fab fa-linkedin-in"></i>
        </a>
        <a
          className="links"
          href="https://app.joinhandshake.com/users/28878550"
          target="_blank"
          rel="noreferrer"
        >
          <i class="fa fa-handshake"></i>
        </a>

        <a
          className="links"
          href="https://www.instagram.com/christopher.sixty/"
          target="_blank"
          rel="noreferrer"
        >
          <i class="fab fa-instagram"></i>
        </a>
        </div>
        {/* </ul> */}
      </Menu>
    </div>
  );
}

export default Sidebar;
