import React from "react";
import "./StyleComponents/footer.css";
import footerImage from "../assets/footerImage.png";
// import { BrowserRouter, Link } from "react-router-dom";

import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer">
      <div className="footerImageWrapper">
        <img src={footerImage} alt="fruits" className="footerImage" />
      </div>
      <div className="footerLinkWrapper">
        <div className="delishSocialLink">
          <div className="delishLinkContainer">
            <h3>Delsih</h3>
            <p>Connect with us through our Social Links below</p>
            <div className="footerSocialinksICON">
              <a href="#">
                <FaInstagram className="footerIcons"/>
              </a>
              <a href="#">
                <FaTwitter className="footerIcons"/>
              </a>
              <a href="#">
                <FaFacebook className="footerIcons"/>
              </a>
            </div>
          </div>
        </div>
        <div className="delishSocialLink">
          <div className="delishLinkContainer">
            <h3>Our Menu</h3>
            <a href="#" className="socialLinksProp">
              Sea Food
            </a>
            <a href="#" className="socialLinksProp">
              Baking
            </a>
            <a href="#" className="socialLinksProp">
              Order
            </a>
            <a href="#" className="socialLinksProp">
              Pastery
            </a>
          </div>
        </div>
        <div className="delishSocialLink">
          <div className="delishLinkContainer">
            <h3>Link</h3>
            <a href="#" className="socialLinksProp">
              About Us
            </a>
            <a href="#" className="socialLinksProp">
              Term and Condition
            </a>
            <a href="#" className="socialLinksProp">
              Privacy Policy
            </a>
          </div>
        </div>
        <div className="delishSocialLink">
          <div className="delishLinkContainer">
            <h3>Contact</h3>
            <a
              href="#"
              onclick="window.location.href='tel:+234 902 495 8212'"
              className="socialLinksProp">
              +234 902 495 8212
            </a>
            <a href="#" className="socialLinksProp">
              Info@Delish.com
            </a>
            <button type="button" className="socialLinksProp">
              Social Links
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
