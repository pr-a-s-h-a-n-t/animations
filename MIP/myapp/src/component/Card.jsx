import React from "react";
import "./card.css";
function Card({ label, price, path }) {
  return (
    <div className="card_">
      <div className="card_img">
        <h6>
          <img src={path} alt="product-image" />
        </h6>
      </div>
      <div className="card_price">
        <h6>{label}</h6>
        <h6>{price}</h6>
      </div>
    </div>
  );
}

export default Card;
