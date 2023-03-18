import React from "react";
import "./StyleComponents/contact.css";
import lngRight from "../assets/lngleft.png";
import recBtm from "../assets/recBtm.png";
import squareTop from "../assets/squareTop.png";
import pepper from "../assets/pepperBB.png";
import leafs from "../assets/leaf.png";
function Contact() {
  return (
    <div className="contact">
      <div className="headerTag">
        <div className="sectionHeader contactHeader">
          <h1 className="headerTag1">Reservation</h1>
          <h2 className="headerTag2">Make reservations</h2>
        </div>
      </div>
      <div className="contactContent">
        <div className="reserveForm">
          {/* <h3 className="booking">Make reservations</h3> */}
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
              <div className="restaurantImage">
                <img src={squareTop} alt="" className="image" />
              </div>
              <div className="restaurantImage indexImg">
                <img src={recBtm} alt="" className="image " />
              </div>
            </div>
            <div className="cafetaria">
              <img src={lngRight} alt="" className="image " />
            </div>
          </div>
        </div>
      </div>
      <div className="reviewsBackgroundImage">
        <img src={leafs} alt="leaf" className="leaf" />
      </div>
      <div className="pepperImageContainer">
        <img src={pepper} alt="pepper" className="pepperImage" />
      </div>
    </div>
  );
}

export default Contact;
