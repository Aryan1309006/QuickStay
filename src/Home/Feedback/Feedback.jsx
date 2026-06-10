import React from "react";
import "./feedback.css";
import { assets } from "../../assets/assets";

function Feedback({ item }) {
  const { image, name, address, rating, review } = item || {};

  return (
    <div className="feedback-box">
      <div className="intro">
        <img src={image} alt="" />
        <div className="name">
          {name} <br />
          <p className="light">{address}</p>
        </div>
      </div>
    <div className="star">
  {[...Array(rating)].map((_, index) => (
    <img
      key={index}
      src={index < rating ? assets.starIconFilled : assets.starIconEmpty}
      alt="stars"
      style={{ width: "20px", height: "20px" }}
    />
  ))}
</div>


      <div className="review">{review}</div>
    </div>
  );
}

export default Feedback;
