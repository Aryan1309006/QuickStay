import React from "react";
import "./offeredcard.css";
import { assets } from "../../assets/assets.js";
import { Link } from "react-router-dom";

function Offercard({ item }) {
  const { image, priceOff, title, description, expiryDate } = item || {};
  return (
    <div
      className="Offercard-box"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <p className="off">{priceOff}% OFF</p>
      <div className="name">
        <h3>{title}</h3>
      </div>
      <div className="description">{description}</div>
      <div className="exp">{expiryDate}</div>
      <Link to={"/offers"}>
        View Offer <img src={assets.arrowIcon} alt="" />
      </Link>
    </div>
  );
}

export default Offercard;
