import React from "react";
import "./StyleComponents/reviews.css";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
// IMAGE
import commentImage from "../assets/commentImage.png";
import pepper from "../assets/redPepper.png";

function Reviews() {
  return (
    <div className="reviews">
      <div className="headerTag">
        <div className="sectionHeader">
          <h1 className="headerTag1">Customer</h1>
          <h2 className="headerTag2">Reviews</h2>
        </div>
      </div>
      <div className="reviewsWrapper">
        <div className="commentWrapper">
          <AwesomeSlider
            animation="SeymourAnimation"
            className="animationSlider">
            <div className="comments">
              <div className="commentImageWrapper">
                <div className="commentImageContainer">
                  <img
                    src={commentImage}
                    alt="person"
                    className="imageComment"
                  />
                </div>
              </div>
              <div className="comment-textWrapper">
                <h3 className="comment">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Facilis rem voluptatem at fugit cupiditate quisquam, quia
                  excepturi harum ipsum quas odit quis placeat necessitatibus
                  eaque numquam earum ratione maiores eligendi.
                </h3>
              </div>
            </div>
            <div className="comments">
              <div className="commentImageWrapper">
                <div className="commentImageContainer">
                  <img
                    src={commentImage}
                    alt="person"
                    className="imageComment"
                  />
                </div>
              </div>
              <div className="comment-textWrapper">
                <h3 className="comment">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Facilis rem voluptatem at fugit cupiditate quisquam, quia
                  excepturi harum ipsum quas odit quis placeat necessitatibus
                  eaque numquam earum ratione maiores eligendi.
                </h3>
              </div>
            </div>
            <div className="comments">
              <div className="commentImageWrapper">
                <div className="commentImageContainer">
                  <img
                    src={commentImage}
                    alt="person"
                    className="imageComment"
                  />
                </div>
              </div>
              <div className="comment-textWrapper">
                <h3 className="comment">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Facilis rem voluptatem at fugit cupiditate quisquam, quia
                  excepturi harum ipsum quas odit quis placeat necessitatibus
                  eaque numquam earum ratione maiores eligendi.
                </h3>
              </div>
            </div>
          </AwesomeSlider>
        </div>
      </div>
      <div className="redPepperWrapper">
        <div className="redPepperCon">
          <img src={pepper} alt="" className="pepper" />
        </div>
      </div>
    </div>
  );
}

export default Reviews;
