import React from "react";
import { assets, cities } from "../../assets/assets";
import "./CheckRoom.css";
import { useLocation, useNavigate } from "react-router-dom";

const CheckRoom = ({btntext}) => {
  const nevigate=useNavigate()
  return (
    <div className="checkRoom">
      <div className="destination">
        <p>
          <img src={assets.calenderIcon} alt="" /> Destination
        </p>
        <input
          type="text"
          list="cityOptions"
          placeholder="Enter or choose destination"
          required
        />
        <datalist id="cityOptions">
          {cities.map((city, index) => (
            <option key={index} value={city} />
          ))}
        </datalist>
      </div>
      <div className="checkin">
        <p>
          <img src={assets.calenderIcon} alt="" />
          Check in
        </p>
        <input type="date" name="checkin" id="checkin" />
      </div>
      <div className="checkout">
        <p>
          <img src={assets.calenderIcon} alt="" />
          Check out
        </p>
        <input type="date" name="checkout" id="checkout" />
      </div>
      <div className="guest">
        <p>
          <img src={assets.calenderIcon} alt="" />
          Guests
        </p>

        <input type="number" name="number" id="number" placeholder="0" />
      </div>
      <button type="submit" onClick={()=>{(btntext==="Submit")? `${nevigate('/room')}`:nevigate('/booking')}}>
        {" "}
        <img src={assets.searchIcon} alt="" /> {btntext}
      </button>
    </div>
  );
};

export default CheckRoom;
