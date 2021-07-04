import React from "react";
// import pfp from "../images/bestpicofmecroppednobg.png"
import pfp from "../images/bestpicofmecropped.jpg";
import "./Header.css";
function Header() {
  return (
    <div className="Headcontainer">
      <div className="nameandbiocontainer">
        <div className="introcont">Hi! I'm</div>
        <div className="namecont">Christopher Tran</div>
        {/* biocont is CV link */}
        <div className="biocont">
          <a
            className="cvlink"
            href="https://docs.google.com/document/d/1gowALDV-GSN5m80kZ-KGjs1kvQ62_JHBXO0Bs_BSD6s/edit?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            Resume!
          </a>
        </div>
      </div>
      <div className=" piccontainer  ">
        <div className="image">
          <img className="actualpfp" src={pfp} alt="pfp"/>
        </div>
      </div>
    </div>
  );
}

export default Header;
