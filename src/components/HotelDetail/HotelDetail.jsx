import React from 'react'
import './hotelDetail.css'
import { roomsDummyData } from '../../assets/assets.js'

export const HotelDetail = () => (
  <div>
    <h1>{roomsDummyData[0].hotel.name}</h1>{roomsDummyData[0].hotel.type}
  </div>
)
