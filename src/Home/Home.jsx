import React from "react";
import "./Home.css";
import {
  assets,
  hotelDummyData,
  hotelImg,
  exclusiveOffers,
  testimonials,
} from "../assets/assets.js";
import Featured from "../components/Featured.jsx";
import { Link } from "react-router-dom";
import Offercard from "../components/Offercard.jsx";
import Feedback from "../components/Feedback.jsx";
import CheckRoom from "../components/CheckRoom.jsx";

function Home() {
  return (
    <>
      <div className="mainimg">
        <div className="text">
          <p id="blue"> The ultimate hotel experence</p>
          <p className="heading" >
            Discover your perfect <br /> gateway destination
          </p>
          <p id="small">
            Unparalleled luxary and comfort await at the world's at the most
            exclusive <br />
            hotel and resorts. Start your journey today
          </p>
          <CheckRoom/>
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
          {hotelImg.map((img, idx) => (
            <Featured key={idx} id={idx} item={img} />
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
        <h1>What Our Guests Sayes</h1>
        <p className="light">Discover why discerning travelers choose QuickStory for their luxury accommodations around the world</p>
        <div className="feeback-boxs">
            {(testimonials || []).map((item, idx) => (
            <Feedback key={item.id ?? idx} item={item}/>
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
