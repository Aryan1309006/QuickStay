import React from 'react'
import {roomsDummyData}from '../assets/assets'
import Rooms from './Rooms'

const HotelRoom = () => {
  return (
    <div>
        <h1>Hotel Rooms</h1>
        <p>Take advantages of our limited -time offer and special package enhance youer stay and create unforgatabale memories.</p>
        <div className="main-hroom">
            {roomsDummyData.map((item) => (
              <div className="room" key={item._id}>
            <Rooms key={item._id} id={item._id} items={item}/>
            </div>
          ))}
        </div>
    </div>
  )
}

export default HotelRoom