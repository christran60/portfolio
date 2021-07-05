import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
function NavBar() {
  return (
    // make contact me link different from other links so the user knows it goes to a different page
    <div className="NavBarcont">
      <div className="Supercont">
        <div className="Logo">my logo</div>
        <div className="Links">
          <Link to="/ContactPage" className="contact">
            Contact Me
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
