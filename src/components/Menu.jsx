import React, { useContext, useState } from "react";
import { EssentialsContext } from "../EssentialsContextProvider";
import "./StyleComponents/menu.css";

function Menu() {
  const [rating, setRating] = useState(0);
  const [liked, setLiked] = useState(false);
  const [catBtn, setCatBtn] = useState(0);

  const [activeButton, setActiveButton] = useState(null);
  const handleButtonClick = (buttonId) => {
    setActiveButton(buttonId);
  };
  const handleClick = (newRating) => {
    setRating(newRating);
  };

  const handleLike = () => {
    setLiked(!liked);
  };

  const categoryBtn = (index) => {
    console.log("button: " + catBtn, "index: " + index);
    if (index) {
      setCatBtn(index);
    }
  };

  const { text } = useContext(EssentialsContext);
  const btnType = ["all", "pizza", "chicken", "beef", "burger"];

  return (
    <div className="menu">
      <div className="sectionHeader">
        <h1 className="headerTag1">MENU</h1>
        <h2 className="headerTag2">MENU</h2>
      </div>
      <div className="foodCategoryBtnWrapper">
        {btnType.map((btnAct, index) => {
          return (
            <div className="btnContainer" key={index}>
              <button
                className={index === catBtn ? "catBtnClicked" : "btn"}
                onClick={() => categoryBtn(index)}>
                {btnAct}
              </button>
            </div>

            //          <button
            //   key={button.id}
            //   className={activeButton === button.id ? 'active' : ''}
            //   onClick={() => handleButtonClick(button.id)}
            // >
            //   {button.label}
            // </button>
          );
        })}
      </div>
      <div className="foodGallery">
        <div className="foodWrapper">
          <div className="foodImageWrapper">
            <img
              src="https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg"
              alt=""
            />
          </div>
          <div className="foodNameAndLikes">
            <h3 className="foodName">Burger</h3>
            <span className="linkBtn">
              <button
                className={`heart ${liked ? "active" : ""}`}
                onClick={handleLike}>
                <span className="sr-only"></span>
              </button>
            </span>
          </div>
          <div className="rating">
            <div>
              {[1, 2, 3, 4, 5].map((index) => (
                <button
                  key={index}
                  className={`star ${
                    index <= rating ? "activeRate" : "neutralRate"
                  }`}
                  onClick={() => handleClick(index)}>
                  ★
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
