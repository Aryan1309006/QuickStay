import React from "react";
import {
  assets,
  facilityIcons,
  roomsDummyData,
} from "../../../assets/assets.js";
import "./room.css";
import { Link } from "react-router-dom";

const Rooms = ({ items }) => {
  const room = items;
  return (
    <div className="rooms-container">
      <Link to={`/room/${items._id}`}>
        {" "}
        <div className="images">
          <img src={items.images[0]} />
        </div>
        <div className="room-content">
          <h1>{items.hotel.name}</h1>
          <p className="address">
            <img src={assets.locationIcon} alt="" />
            {items.hotel.address}
          </p>
          <div className="amenities">
            {items.amenities.map((facility, index) => (
              <div key={index}>
                <img src={facilityIcons[facility]} alt={facility} />
                <span>{facility}</span>
              </div>
            ))}
          </div>

          <p className="prices">
            ₹{room.pricePerNight}
            <span>/ night</span>
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Rooms;
