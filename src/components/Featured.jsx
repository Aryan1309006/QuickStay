import React from "react";
import { assets } from "../assets/assets.js";
import "../style/featured.css"; // <-- fix filename if your file is named differently

function Featured({ item }) {
  return (
    <div className="box">
      <div className="image">
        <p id="tag">best sell</p>
        <img src={item} alt="featured hotel" />
      </div>

      <div className="info">
        <div>
          <h2>The green</h2>
          <p id="location">
            <img src={assets.locationFilledIcon} alt="location" /> Mumbai
          </p>
        </div>
        <p>
          <img src={assets.starIconFilled} alt="rating" /> 4.5
        </p>
      </div>

      <div className="price">
        <div className="pri">
          <p id="bold">$450</p>
          <p id="light">/night</p>
        </div>
        <div className="viwe">
          <button>view Details</button>
        </div>
      </div>
    </div>
  );
}

export default Featured;
