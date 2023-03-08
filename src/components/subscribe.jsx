import React from "react";
import "./StyleComponents/subscribe.css";
import { FaArrowRight } from "react-icons/fa";

function Subscribe() {
  return (
    <div className="subscribe">
      <h4>Subscribe </h4>
      <h1>Want To Get Updated ?</h1>
      <form className="subscribeForm">
        <input type="text" placeholder="Enter Your Email Address"></input>
        <button type="submit" className="suscribeButton">
          <FaArrowRight  className="submitBtnIcon"/>
        </button>
      </form>
    </div>
  );
}

export default Subscribe;
