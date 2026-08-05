import React from "react";
import { assets } from "../../assets/assets.js";
import "./featured.css";
import { Link, useNavigate } from "react-router-dom";
function Featured({ item }) {
  const nevigate = useNavigate();

  return (
    <div className="box">
      <div className="image">
        <p id="tag">best sell</p>
        <img src={item.images[0]} alt="featured hotel" />
      </div>
      <div className="featured-info">
        <div className="info">
          <div className="name">
            <h2>The green</h2>
            <p id="location">
              <img src={assets.locationFilledIcon} alt="location" /> Mumbai
            </p>
          </div>
          <p id="reating">
            <img src={assets.starIconFilled} alt="rating" /> 4.5
          </p>
        </div>

        <div className="price">
          <div className="pri">
            <p id="bold">{item.pricePerNight}</p>
            <p id="light">/night</p>
          </div>
          <div className="viwe">
            <button
              onClick={() => {
                nevigate("/room");
              }}
            >
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
