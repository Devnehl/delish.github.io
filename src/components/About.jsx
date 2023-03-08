import React from "react";
import chef from "../assets/chef_PNG140 2.png";
import tomato from "../assets/istockphoto-184616438-612x612 1.png";
import "./StyleComponents/about.css";
function About() {
  return (
    <div className="about">
      <div className="chefImageContainer">
        <img src={chef} alt="chef" />
      </div>{" "}
      <div className="aboutWriteUp">
        <h2>
          Welcome to <span>Delish</span>
        </h2>
        <h3>
          At Delish, we are passionate about delivering delicious meals straight
          to your doorstep. Our team of experienced chefs and delivery drivers
          work tirelessly to provide you with the freshest, highest quality food
          that will leave you coming back for more. We take pride in sourcing
          our ingredients from local suppliers and offering a diverse menu that
          caters to all tastes and dietary requirements. Whether you're in the
          mood for comfort food or something a little more exotic, we've got you
          covered. Trust us at Delish to satisfy your cravings and make your
          dining experience unforgettable.
        </h3>
        <div className="tomatoContainer">
          <img src={tomato} alt="veggies" />
        </div>
      </div>
    </div>
  );
}

export default About;
