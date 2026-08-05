import React, { useEffect } from "react";
import "./Home.css";
import {
  assets,
  hotelDummyData,
  hotelImg,
  exclusiveOffers,
  testimonials,
  roomsDummyData,
} from "../assets/assets.js";
import Featured from "./Featured/Featured.jsx";
import { Link, useLocation } from "react-router-dom";
import Offercard from "./Offercard/Offercard.jsx";
import Feedback from "../Home/Feedback/Feedback.jsx";
import CheckRoom from "../components/CheckRoom/CheckRoom.jsx";

function Home() {
    const { pathname } = useLocation();
 useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // remove if you want instant scroll
    });
  }, [pathname]);
  
  return (
    <>
      <div className="mainimg">
        <div className="text">
            <p className="highlightBadge">The ultimate hotel experience</p>
          <p className="heading">
            Discover your perfect <br /> gateway destination
          </p>
          <p className="smallText">
            Unparalleled luxury and comfort await at the world's most
            exclusive <br />
            hotels and resorts. Start your journey today.
          </p>
          <CheckRoom btntext={"Submit"} />
        </div>
      </div>

      <div className="featured">
        <h1>Featured Hotels</h1>
        <p className="light">
          Discover our handpicked selection of exceptional properties around the
          word offering <br />
          unparalleled and unforgettable experence
        </p>
        <div className="featured-list">
          {roomsDummyData.map((item, idx) => (

            <Featured key={idx} id={idx} item={item} />
       
          ))}
        </div>
      </div>

      <div className="offer">
        <div className="offers-top">
          <div className="offer-left">
            <h1>Exclusive Offers</h1>
            <p className="light">
              take advantage of our limited -time offers and special package to
              enhance your
              <br />
              stay and create unforgattable memories
            </p>
          </div>
          <div className="right">
            <Link to="/offers">
              view all Offer <img src={assets.arrowIcon} alt="" />
            </Link>{" "}
          </div>
        </div>
        <div className="offers-grid">
          {(exclusiveOffers || []).map((item, idx) => (
            <Offercard key={item.id ?? idx} item={item} />
          ))}
        </div>
      </div>

      <div className="feedback">
        <h1>What Our Guests Say</h1>
        <p className="light">Discover why discerning travelers choose QuickStory for their luxury accommodations around the world</p>
        <div className="feedback-boxes">
            {(testimonials || []).map((item, idx) => (
            <Feedback key={item.id ?? idx} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
