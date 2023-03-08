import React from "react";
import "./StyleComponents/contact.css";
import lngRight from "../assets/lngleft.png";
import recBtm from "../assets/recBtm.png";
import squareTop from "../assets/squareTop.png";
import pepper from "../assets/pepperBB.png";
import doodle from "../assets/doodleTop.png";
function Contact() {
  return (
    <div className="contact">
      {" "}
      <div className="sectionHeader contactHeader">
        <h1 className="headerTag1">Reservation</h1>
        <h2 className="headerTag2">Reservation</h2>
      </div>
      <div className="contactContent">
        <div className="reserveForm">
          <h3 className="booking">Make reservations</h3>
          <form className="resevationForm">
            <input type="text" className="input" placeholder="Your Name" />
            <input type="text" className="input" placeholder="Phone" />
            <input type="text" className="input" placeholder="Person(s)" />
            <input type="text" className="input" placeholder="Date" />
            <div className="submitBtnWraapper">
              <button type="submit" className="submitBtn">
                Send
              </button>
            </div>
          </form>
        </div>
        {/* IMAGE SECTION */}
        <div className="reservationImagesWrapper">
          {/* <img src={doodle} alt="" className="image1" /> */}
          <div className="middleImages">
            <div className="recImage">
              <img src={squareTop} alt="" className="image3" />
              <img src={recBtm} alt="" className="image4" />
            </div>
            <img src={lngRight} alt="" className="image2" />
          </div>
          <img src={pepper} alt="" className="image5" />
        </div>
      </div>
    </div>
  );
}

export default Contact;
