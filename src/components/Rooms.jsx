import React from "react";
import {roomsDummyData} from "../assets/assets.js"
const Rooms = ({item}) => {
  
  return (
    <div>
      <div className="room-img"></div>
      <div className="room-detail">
        <p className="city">{item.hotel.city}</p>
        <h1>{item.hotel.name}</h1>
      </div>
    </div>
  );
};

export default Rooms;
