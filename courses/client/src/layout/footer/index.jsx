import React from "react";
import "./index.scss";
const Footer = () => {
  return (
    <>
    <div className="footer">
      <div className="footerright">
        <img
          src="https://preview.colorlib.com/theme/courses/assets/img/logo/logo.png.webp"
          alt=""
        />
        <p>
          The automated process starts as soon as <br /> your clothes go into
          the machine.
        </p>
        <div className="icons">
        <div className="icon1">
        <a>
          <i class="fa-brands fa-twitter"></i>
        </a>
        </div>
        <div className="icon1">
        <a>
          <i class="fa-brands fa-facebook-f"></i>
        </a>
        </div>
       <div className="icon1">
       <a>
          <i class="fa-brands fa-pinterest"></i>
        </a>
       </div>
      
        </div>
       
      </div>
      <div className="footerleft">
        <div className="solutions">
          <ul>
            <h4>Our solutions</h4>
            <a href="#"> <li>Design & creatives</li></a>
           <a href="#"><li>Telecommunication</li> </a>
            <a href="#">  <li>Restaurant</li></a>
          <a href="#"> <li>Programing</li></a>
           <a href="#"><li>Architecture</li></a>
            
          </ul>
        </div>
        <div className="support">
          <ul>
            <h4>Support</h4>
            <a href="#"> <li>Design & creatives</li></a>
           <a href="#">  <li>Telecommunication</li></a>
          <a href="#">  <li>Restaurant</li></a>
           <a href="#"><li>Programing</li></a>
            <a href="#"><li>Programing</li></a>
            <a href="#">  <li>Architecture</li></a>
           
          </ul>
        </div>
        <div className="company">
          <ul>
            <h4>Company</h4>
            <a href="#"> <li>Design & creatives</li></a>
           <a href="#"><li>Telecommunication </li></a>
            <a href="#"> <li>Restaurant </li> </a>
           <a href="#"> <li>Programing </li> </a>
            <li>Architecture </li>
           <a href="#"></a>
          </ul>
        </div>
      </div>
     
    </div>
     <div className="end">
     <p>Copyright ©2023 All rights reserved | This template is made with <i class="fa-solid fa-heart"></i>by <a href="https://colorlib.com/" target="_blank">Colorlib</a></p>
     </div>
    </>
  );
};

export default Footer;
