import React from "react";
import "./StyleComponents/reviews.css";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
// IMAGE
import commentImage from "../assets/commentImage.png";
function Reviews() {
  return (
    <div className="reviews">
      
      <div className="sectionHeader ">
        <h1 className="headerTag1">Customer</h1>
        <h2 className="headerTag2">Reviews</h2>
      </div>

      <div className="commentWrapper">
        <AwesomeSlider animation="cubeAnimation">
          <div className="comments">
            <img src={commentImage} alt="person" className="imageComment" />
            <h3 className="comment">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
              rem voluptatem at fugit cupiditate quisquam, quia excepturi harum
              ipsum quas odit quis placeat necessitatibus eaque numquam earum
              ratione maiores eligendi.
            </h3>
          </div>
          <div className="comments">
            <img src={commentImage} alt="person" className="imageComment" />
            <h3 className="comment">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
              rem voluptatem at fugit cupiditate quisquam, quia excepturi harum
              ipsum quas odit quis placeat necessitatibus eaque numquam earum
              ratione maiores eligendi.
            </h3>
          </div>
          <div className="comments">
            <img src={commentImage} alt="person" className="imageComment" />
            <h3 className="comment">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
              rem voluptatem at fugit cupiditate quisquam, quia excepturi harum
              ipsum quas odit quis placeat necessitatibus eaque numquam earum
              ratione maiores eligendi.
            </h3>
          </div>
        </AwesomeSlider>
      </div>
    </div>
  );
}

export default Reviews;
