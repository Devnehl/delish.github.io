import React from "react";
import "./StyleComponents/ad.css";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";

function Ad() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };
  const Slider = () => {
    return (
      <>
        <AwesomeSlider animation="cubeAnimation" className="carousel">
          <div className="youtubeAd">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/HzH08w25Vj4"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen></iframe>
          </div>
          <div className="youtubeAd">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/FPE0BK8jkLI"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen></iframe>
          </div>
          <div className="youtubeAd">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/54eHmcri6b4"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen></iframe>
          </div>
        </AwesomeSlider>
      </>
    );
  };
  return (
    <div className="adWrapper">
      <div className="videoWrapper">
        <Slider />
      </div>
    </div>
  );
}
export default Ad;
