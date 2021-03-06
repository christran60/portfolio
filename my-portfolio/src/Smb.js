import React from "react";
import "./Smb.css";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
AOS.init({
  once: true,
  mirror: true,
});
function Smb() {
  return (
    <div className="smbcont" data-aos="fade" data-aos-delay="3000"> 
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
       href="https://www.linkedin.com/in/christophertran-dev/"
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
      <i class="far fa-handshake"></i>
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
  );
}

export default Smb;
