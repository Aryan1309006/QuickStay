import React from "react";
import {
  assets,
  facilityIcons,
  roomCommonData,
  roomsDummyData,
} from "../../assets/assets.js";
import "./roomdetail.css";
import CheckRoom from "../CheckRoom/CheckRoom.jsx";

const RoomDetail = () => {
  const roomId = window.location.pathname.split("/")[2]; // Assuming the URL is like /room/:id
  console.log("Room ID:", roomId);
  // You can use this ID to fetch room details from an API or state management
  const item = roomsDummyData.find((room) => room._id === roomId);
  if (!item) return <div>loading...</div>;
  return (
    <div className="roomdetail">
      <div className="roomdetails-header">
        <div className="roomdetail-name">
          <div className="roodetail-name">
            <p className="hotel-name">{item?.hotel.name}</p>
            <p className="room-type">({item?.roomType})</p>
            <p id="discount">20% off</p>
          </div>
        </div>
        <div>
          {Array.from({ length: 4 }).map((_, index) => (
            <img src={assets.starIconFilled} alt="" />
          ))}
          <img src={assets.starIconOutlined} alt="" /> 200+reviews
        </div>
        <div id="address">{item.hotel.address}</div>
      </div>

      <div className="room-img">
        <div className="main-image">
          <img src={item.images[0]} alt="Main Room" />
        </div>

        <div className="sub-images">
          {item.images.slice(1, 5).map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Room ${index + 1}`}
              className="sub-img"
            />
          ))}
        </div>
      </div>

      <div className="basic-detail">
        <div className="aminity">
          <p id="text">Experence Luxury like never before</p>
          <p className="amenities">
            {item.amenities.map((facility, index) => (
              <div key={index}>
                <img src={facilityIcons[facility]} alt={facility} />
                <span>{facility}</span>
              </div>
            ))}
          </p>
        </div>
        <p id="price">${item.pricePerNight}/day</p>
      </div>

      <div className="commandata">
        {roomCommonData.map((data, idx) => {
          return (
            <div className="data">
              <div id="icon">
                <img src={data.icon} alt={data.title} />
              </div>
              <div>
                <div id="title">{data.title}</div>
                <div id="discription">{data.description}</div>
              </div>
            </div>
          );
        })}
      </div>
<div className="checkroom">
      <CheckRoom btntext={"book now"} /></div>
      <div className="ownersdatail">
        <img src={item.hotel.owner.image} alt="owner img" />

        <div className="owner-name">
          <p id="name">Hosted by{item.hotel.owner.username}</p>
          <div className="discription">
            <p>{item.hotel.owner.role}</p>
            {""}
            <p>{item.hotel.owner.email}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomDetail;
