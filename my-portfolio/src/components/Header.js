import React from "react";
// import pfp from "../images/bestpicofmecroppednobg.png"
import pfp from "../images/bestpicofmecropped.jpg";
import "./Header.css";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
AOS.init({
  once:false,
  mirror:true
});
function Header() {
  return (
    <div className="Headcontainer" id="Home">

      <div className="nameandbiocontainer">
        <div className="introcont" 
            data-aos="fade-up"
            data-aos-delay="400"
        >Hi! I'm</div>
        <div className="name"
          data-aos="fade-up"
          data-aos-delay= "500"
        >Christopher Tran</div>
        {/* biocont is CV link */}
        <div className="biocont"  data-aos="fade-up"
          data-aos-delay="600">
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
        <div className="image" data-aos="fade"
          data-aos-delay="900"
          // data-aos-duration="300"
          >
          <img className="actualpfp" src={pfp} alt="pfp" />
        </div>
      </div>
    </div>
  );
}

export default Header;
