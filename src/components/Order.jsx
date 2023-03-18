import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruck } from "@fortawesome/free-solid-svg-icons";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";
import { faPizzaSlice } from "@fortawesome/free-solid-svg-icons";

// import { faTruck } from "@fortawesome/free-regular-svg-icons";

import "./StyleComponents/order.css";

function Order() {
  return (
    <div className="order">
      <div className="orderHeadLine">
        <h2>Order in just 30 mins</h2>
        <p>By Clicking 3 Steps</p>
      </div>
      <div className="orderCardWrappers">
        <div className="card">
          <div className="cardIcon">
            <FontAwesomeIcon className="orderIcon" icon={faTruck} />
            {/* <FontAwesomeIcon className="orderIcon" icon={faTruck} /> */}
          </div>
          <div className="cardTitle">title</div>
          <div className="cardDescription">description</div>
        </div>
        <div className="card">
          <div className="cardIcon">
            <FontAwesomeIcon className="orderIcon" icon={faUtensils} />
          </div>
          <div className="cardTitle">title</div>
          <div className="cardDescription">description</div>
        </div>
        <div className="card">
          <div className="cardIcon">
            <FontAwesomeIcon className="orderIcon" icon={faPizzaSlice} />
          </div>
          <div className="cardTitle">title</div>
          <div className="cardDescription">description</div>
        </div>
      </div>
    </div>
  );
}

export default Order;
