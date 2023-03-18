import React from "react";
// import Shapes from "./Essentials/Shapes";
import "./StyleComponents/home.css";
import FoodImage from "../assets/pexels-tim-douglas-6210894.jpg";
import leaves from "../assets/leaf.png";
import { FaPlay } from "react-icons/fa";

function home() {
  return (
    <div className="home">
      {" "}
      <div className="orderBtn">
        <div className="orderBtnWrapper">
          <div className="imgLeaveContainer">
            <img src={leaves} alt="leave" />
          </div>
          <div className="mainOrderBtn">
            <h3>
              Get the most from <br /> our Yummy Factory
            </h3>
            <button type="button">
              Order
              <span>
                <FaPlay />
              </span>
            </button>
          </div>
        </div>
      </div>
      
      <div className="heroImage">
        <div className="imageHandler">
          <div className="mainHeroImg">
            <img src={FoodImage} alt="food" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default home;
