import React from 'react'
import { stack as Menu } from 'react-burger-menu';
import { Link } from "react-router-dom";
import "./Sidebar.css";
import { HashLink } from "react-router-hash-link";
function Sidebar() {
    return (
        <div>
            <Menu right>
      {/* <ul className= "mobile"> */}
      <li>
          <HashLink to="/#Home">Home</HashLink>
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
      {/* </ul> */}
      </Menu>
        </div>
    )
}

export default Sidebar
