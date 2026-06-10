import React, { useEffect, useState } from "react";
import { roomsDummyData } from "../../assets/assets.js";
import Rooms from "./Room/Rooms";
import "./hotelroom.css";
import { useLocation } from "react-router-dom";

const HotelRoom = () => {
  const { pathname } = useLocation();

  const [roomTypes, setRoomTypes] = useState([]);
  const [priceRange, setPriceRange] = useState([]);
  const [sortBy, setSortBy] = useState("");

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  const handleRoomType = (type) => {
    setRoomTypes((prev) =>
      prev.includes(type)
        ? prev.filter((item) => item !== type)
        : [...prev, type]
    );
  };

  const handlePriceRange = (range) => {
    setPriceRange((prev) =>
      prev.includes(range)
        ? prev.filter((item) => item !== range)
        : [...prev, range]
    );
  };

  const filteredRooms = roomsDummyData
    .filter((room) => {
      if (roomTypes.length === 0) return true;
      return roomTypes.includes(room.roomType);
    })
    .filter((room) => {
      if (priceRange.length === 0) return true;

      return priceRange.some((range) => {
        switch (range) {
          case "0-500":
            return room.pricePerNight >= 0 && room.pricePerNight <= 500;

          case "500-1000":
            return (
              room.pricePerNight > 500 &&
              room.pricePerNight <= 1000
            );

          case "1000-2000":
            return (
              room.pricePerNight > 1000 &&
              room.pricePerNight <= 2000
            );

          case "2000-3000":
            return (
              room.pricePerNight > 2000 &&
              room.pricePerNight <= 3000
            );

          default:
            return true;
        }
      });
    })
    .sort((a, b) => {
      if (sortBy === "low-high")
        return a.pricePerNight - b.pricePerNight;

      if (sortBy === "high-low")
        return b.pricePerNight - a.pricePerNight;

      if (sortBy === "newest")
        return (
          new Date(b.createdAt) - new Date(a.createdAt)
        );

      return 0;
    });

  const clearFilters = () => {
    setRoomTypes([]);
    setPriceRange([]);
    setSortBy("");
  };

  return (
    <div className="hotelRoom">
      {/* Filter Sidebar */}
      <div className="filters">

        <div className="filter-header">
          <h3>FILTERS</h3>
          <button onClick={clearFilters}>CLEAR</button>
        </div>

        <h4>Popular Filters</h4>

        <label>
          <input
            type="checkbox"
            checked={roomTypes.includes("Single Bed")}
            onChange={() => handleRoomType("Single Bed")}
          />
          Single Bed
        </label>

        <label>
          <input
            type="checkbox"
            checked={roomTypes.includes("Double Bed")}
            onChange={() => handleRoomType("Double Bed")}
          />
          Double Bed
        </label>

        <h4>Price Range</h4>

        <label>
          <input
            type="checkbox"
            onChange={() => handlePriceRange("0-500")}
          />
          $0 - $500
        </label>

        <label>
          <input
            type="checkbox"
            onChange={() => handlePriceRange("500-1000")}
          />
          $500 - $1000
        </label>

        <label>
          <input
            type="checkbox"
            onChange={() => handlePriceRange("1000-2000")}
          />
          $1000 - $2000
        </label>

        <label>
          <input
            type="checkbox"
            onChange={() => handlePriceRange("2000-3000")}
          />
          $2000 - $3000
        </label>

        <h4>Sort By</h4>

        <label>
          <input
            type="radio"
            name="sort"
            checked={sortBy === "low-high"}
            onChange={() => setSortBy("low-high")}
          />
          Price Low to High
        </label>

        <label>
          <input
            type="radio"
            name="sort"
            checked={sortBy === "high-low"}
            onChange={() => setSortBy("high-low")}
          />
          Price High to Low
        </label>

        <label>
          <input
            type="radio"
            name="sort"
            checked={sortBy === "newest"}
            onChange={() => setSortBy("newest")}
          />
          Newest First
        </label>
      </div>

      {/* Rooms */}
      <div className="hotellist">
        <h1>Hotel Rooms</h1>

        <div className="main-hroom">
          {filteredRooms.map((item) => (
            <Rooms
              key={item._id}
              id={item._id}
              items={item}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HotelRoom;
